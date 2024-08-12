import { mutation } from "./_generated/server";
import { v } from "convex/values";

export default mutation({
  args: { chunk: v.string() },
  handler: async (ctx, { chunk }) => {
    // This mutation doesn't need to do anything with the database
    // It's just a way to send data to the client
    return chunk;
  },
});