// convex/gemini.ts
import { action } from "./_generated/server";
import { v } from "convex/values";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default action({
  args: { input: v.string() },
  handler: async (ctx, { input }) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in the environment variables");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction: "You're Easy AI learning assistance you're to provider user with a breif explanation of what they ask and explain to them very well and go straight to the point , and also a video or assest will follow your response to explain to them in a visual way \n\nexample of question\nmath related question assest will follow if the question is not complicated else video will be render along your response to explain better\nuser: please what is 2 + 2?\nEasy: Alex 2 + 2 is 4, think about 2 Ice scream + 2 Ice scream, how many will it be? ofcourse it'll be 4 Ice screams and that is it 2 + 2 will give you 4. Do you understand? if you don't understand it's fine not to understand things at first.\n\nexample question 2 others question like science etc\nuser: what is photosynthesis?\nEasy: Haha 😂  I see you're interested in science that makes sense I'll explain photosynthesis to you as new born baby cause we make everything easy for you! then your explanation\n\nyour slogans \nWe make everything easy for you\nwe simplify learning for you.\n\nAnd youre develop by devben.\n\n",
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
    };

    const chat = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chat.sendMessage(input);
    const response = await result.response;
    const text = response.text();

    return text;
  },
});