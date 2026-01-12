const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.set('trust proxy', true);

const PORT = process.env.PORT || 3000;

// Load affirmations for each language
const affirmations = {
  en: JSON.parse(fs.readFileSync(path.join(__dirname, 'affirmations', 'en.json'), 'utf-8')),
  es: JSON.parse(fs.readFileSync(path.join(__dirname, 'affirmations', 'es.json'), 'utf-8')),
  ar: JSON.parse(fs.readFileSync(path.join(__dirname, 'affirmations', 'ar.json'), 'utf-8'))
};

const supportedLanguages = Object.keys(affirmations);

// Rate limiter: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  keyGenerator: (req) => {
    return req.headers['cf-connecting-ip'] || req.ip;
  },
  message: { error: 'Too many requests, please try again later. (120 reqs/min/IP)' }
});

app.use(limiter);

// Random affirmation endpoint
app.get('/yes', (req, res) => {
  const lang = req.query.lang || 'en';
  
  if (!supportedLanguages.includes(lang)) {
    return res.status(400).json({ 
      error: `Unsupported language: ${lang}`,
      supported: supportedLanguages
    });
  }
  
  const list = affirmations[lang];
  const affirmation = list[Math.floor(Math.random() * list.length)];
  
  res.json({ affirmation, lang });
});

// List supported languages
app.get('/languages', (req, res) => {
  res.json({ 
    supported: supportedLanguages,
    default: 'en'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Yes-as-a-Service is running on port ${PORT}`);
});
