const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  const openAIResponse = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer YOUR_API_KEY`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: userMessage,
      max_tokens: 150,
    }),
  });

  const data = await openAIResponse.json();
  res.json({ reply: data.choices[0].text.trim() });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
