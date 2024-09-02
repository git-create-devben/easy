import { v } from "convex/values";
import { action, query } from "./_generated/server";
import {
  GoogleGenerativeAI,
  GenerativeModel,
  ChatSession,
} from "@google/generative-ai";
import { getAuthUserId } from "@convex-dev/auth/server";
const apiKey = process.env.GEMINI_API_KEY as string;

const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain" as const,
};

// Mock game database
const gameDatabase = [
  { name: "Ludo", url: "https://ludoking.com" },
  { name: "Chess", url: "https://www.chess.com/embed" },
  { name: "Tic Tac Toe", url: "https://playtictactoe.org" },
  { name: "Sudoku", url: "https://sudoku.com" },
  { name: "2048", url: "https://play2048.co" },
  { name: "Pac-Man", url: "https://scratch.mit.edu/projects/68831387/embed" },
  { name: "Minesweeper", url: "https://minesweeperonline.com" },
  { name: "Snake", url: "https://playsnake.org" },
  { name: "Checkers", url: "https://www.mathsisfun.com/games/checkers.html" },
  { name: "Tetris", url: "https://tetris.com/play-tetris" },
  { name: "Flappy Bird", url: "https://flappybird.io" },
  {
    name: "Connect Four",
    url: "https://www.mathsisfun.com/games/connect4.html",
  },
  { name: "Solitaire", url: "https://www.solitr.com" },
  { name: "Pong", url: "https://pong-2.com" },
];

export const getAIResponse = action({
  args: { input: v.string() },
  handler: async (
    ctx,
    args: { input: string }
  ): Promise<{ text: string; gameUrl: string | null }> => {
    const identity = await ctx.auth.getUserIdentity();
    const userName = identity?.name; // Get user's name here
    const model: GenerativeModel = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction: `Yo, you're Easy AI, the ultimate game hookup by devben! When ${userName} asks to play a game, you find it and embed it, quick style. If they don't mention a game, just rep Easy AI as their go-to for all things gaming. If they do ask, keep it hype and short—like, "Ludo? Say less, it's lit!" then throw in something fun like "Your game’s all set, check the content box. Happy gaming!"`,
    });
    
    const chatSession: ChatSession = model.startChat({ generationConfig });

    try {
      const result = await chatSession.sendMessage(args.input);
      const text = result.response.text();

      // Simple game recommendation logic
      const lowerInput = args.input.toLowerCase();
      const recommendedGame = gameDatabase.find((game) =>
        lowerInput.includes(game.name.toLowerCase())
      );

      return {
        text,
        gameUrl: recommendedGame ? recommendedGame.url : null,
      };
    } catch (error) {
      console.error("Error generating AI response:", error);
      throw new Error("Failed to generate AI response");
    }
  },
});
