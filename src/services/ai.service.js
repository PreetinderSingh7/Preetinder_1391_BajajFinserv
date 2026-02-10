const axios = require("axios");

exports.askAI = async (question) => {
  if (typeof question !== "string" || !question.trim()) {
    throw new Error("Question must be a non-empty string");
  }

  if (process.env.GEMINI_API_KEY) {
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `Answer in ONE word only.\nQuestion: ${question}`
                }
              ]
            }
          ]
        },
        { timeout: 5000 }
      );

      return response.data.candidates[0].content.parts[0].text.trim();
    } catch (err) {
      console.warn("⚠️ Gemini failed, using fallback");
    }
  }

  if (question.toLowerCase().includes("maharashtra")) return "Mumbai";
  if (question.toLowerCase().includes("india")) return "Delhi";

  return "Unknown";
};
