import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";
 
const schema = defineSchema({
  ...authTables,
  userProfiles: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
    email: v.string(),
  }).index('by_token', ['tokenIdentifier']),
  // Your other tables...
});
 
export default schema;