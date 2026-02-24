import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    links: defineTable({ url: v.string(), title: v.string(), domain: v.string(), tags: v.array(v.string()), fullText: v.optional(v.string()), collectionId: v.optional(v.id("collections")), savedAt: v.string() }).index("by_collection", ["collectionId"]),
    collections: defineTable({ name: v.string(), color: v.string() }),
    tags: defineTable({ name: v.string(), usageCount: v.number() }).index("by_name", ["name"])
});
