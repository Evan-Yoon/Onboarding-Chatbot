import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

console.log("API KEY EXISTS:", !!process.env.OPENAI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "message is required" });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an onboarding assistant for new employees. Answer clearly and briefly in Korean. If policy details are uncertain, say it is sample or dummy information.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.4,
    });

    const answer =
      completion.choices?.[0]?.message?.content ??
      "답변을 생성하지 못했습니다.";

    res.json({ answer });
  } catch (error) {
    console.error("OPENAI ERROR:");
    console.error("message:", error?.message);
    console.error("status:", error?.status);
    console.error("code:", error?.code);
    console.error("type:", error?.type);
    console.error("full error:", error);

    res.status(500).json({
      error: "LLM request failed",
      detail: error?.message || "unknown error",
    });
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on port ${process.env.PORT || 3001}`);
});
