import { defineTable, defineSchema } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userName: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  }),

  pdfFiles: defineTable({
    fileId: v.string(),
    fileName: v.string(),
    storageId: v.string(),
    createdBy: v.string(),
  }),
});
