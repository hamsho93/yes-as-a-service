# Yes-as-a-Service

The enthusiastic counterpart to [No-as-a-Service](https://github.com/hotheadhacker/no-as-a-service).

A lightweight API that returns random affirmations in multiple languages. Because sometimes the answer is just... yes.

---

## API Usage

**Base URL**

```
https://your-domain.com
```

**Method:** `GET`  
**Rate Limit:** `120 requests per minute per IP`

### Get a Random Affirmation

```
GET /yes
```

**Response:**

```json
{
  "affirmation": "Absolutely, positively, unequivocally YES.",
  "lang": "en"
}
```

### Get Affirmation in a Specific Language

```
GET /yes?lang=es
```

**Response:**

```json
{
  "affirmation": "Absolutamente, positivamente, inequivocamente SI.",
  "lang": "es"
}
```

### Supported Languages

| Code | Language |
|------|----------|
| `en` | English (default) |
| `es` | Spanish |
| `ar` | Arabic |

```
GET /languages
```

**Response:**

```json
{
  "supported": ["en", "es", "ar"],
  "default": "en"
}
```

### Health Check

```
GET /health
```

**Response:**

```json
{
  "status": "ok"
}
```

---

## Self-Hosting

### 1. Clone the repository

```bash
git clone https://github.com/hamsho93/yes-as-a-service.git
cd yes-as-a-service
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

The API will be live at `http://localhost:3000`

Change the port with an environment variable:

```bash
PORT=5000 npm start
```

---

## Docker

### Build

```bash
docker build -t yes-as-a-service .
```

### Run

```bash
docker run -p 3000:3000 yes-as-a-service
```

---

## Project Structure

```
yes-as-a-service/
├── index.js              # Express API
├── affirmations/
│   ├── en.json           # English affirmations
│   ├── es.json           # Spanish affirmations
│   └── ar.json           # Arabic affirmations
├── package.json
├── Dockerfile
├── .dockerignore
├── .gitignore
├── LICENSE
└── README.md
```

---

## Contributing

Want to add more languages or affirmations? Pull requests are welcome!

To add a new language:

1. Create a new JSON file in `affirmations/` (e.g., `fr.json`)
2. Add the language code to the `affirmations` object in `index.js`
3. Submit a PR

---

## License

MIT - say yes to whatever you want.
