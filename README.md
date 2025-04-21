# CrimznBot

CrimznBot is a simple AI-powered crypto chatbot built with Express and OpenAI's GPT-3.5 API.
It runs on a Node.js backend hosted on Render, and connects to a front-end interface where users can ask questions and get intelligent responses.

---

## Features
- Connects to OpenAI GPT via `/chat` endpoint
- Built with Express, Axios, and body-parser
- Cross-origin support via CORS
- Deployable on Render (free tier friendly)

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/MUSICNFTACCESS/Crimznbot.git
cd Crimznbot
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set your OpenAI API Key
Create a `.env` file or set the environment variable:
```
OPENAI_API_KEY=your-openai-api-key-here
```

### 4. Start the server
```bash
npm start
```

---

## API Usage
**POST /chat**
```json
{
  "message": "What is Bitcoin?"
}
```
**Response:**
```json
{
  "response": "Bitcoin is a decentralized digital currency..."
}
```

---

## License
This project is licensed under the MIT License.
