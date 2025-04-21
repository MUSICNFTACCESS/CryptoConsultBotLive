const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
console.log("OPENAI_API_KEY detected:", !!OPENAI_API_KEY);
console.log("OPENAI_API_KEY detected:", !!OPENAI_API_KEY);

app.use(cors());
app.use(bodyParser.json());

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }]
    }, {
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    const reply = response.data.choices[0].message.content;
    res.json({ response: reply });
  } catch (error) {
    console.error("Error from OpenAI:", error?.response?.data || error.message);
    res.json({ response: "Sorry, something went wrong on my end." });
  }
});

app.listen(PORT, () => {
  console.log(`CrimznBot backend running on port ${PORT}`);
});
