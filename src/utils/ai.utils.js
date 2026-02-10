const axios = require("axios");

async function getSingleWordAIAnswer(question) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("AI API key missing");
  }

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [
        {
          parts: [
            {
              text: `Answer in ONE WORD only:\n${question}`
            }
          ]
        }
      ]
    },
    { timeout: 5000 }
  );

  const text =
    response.data.candidates?.[0]?.content?.parts?.[0]?.text || "";

  return text.split(/\s+/)[0].replace(/[^\w]/g, "");
}

module.exports = { getSingleWordAIAnswer };
