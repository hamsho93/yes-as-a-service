# Yes-as-a-Service

A simple API that returns random affirmations in multiple languages. The enthusiastic counterpart to [No-as-a-Service](https://github.com/hotheadhacker/no-as-a-service).

![Yes Man](images/image.png)

## API Usage

**Method:** `GET`  
**Rate Limit:** `120 requests per minute per IP`

### Endpoints

```
GET /yes              # Random affirmation (English)
GET /yes?lang=es      # Random affirmation (Spanish)
GET /yes?lang=ar      # Random affirmation (Arabic)
GET /languages        # List supported languages
GET /health           # Health check
```

### Example Response

```json
{
  "affirmation": "Absolutely, positively, unequivocally YES.",
  "lang": "en"
}
```

## Self-Hosting

```bash
git clone https://github.com/hamsho93/yes-as-a-service.git
cd yes-as-a-service
npm install
npm start
```

The API runs at `http://localhost:3000`

## Docker

```bash
docker build -t yes-as-a-service .
docker run -p 3000:3000 yes-as-a-service
```

## Contributing

Want to add more languages? Create a JSON file in `affirmations/` and submit a PR.

## License

MIT
