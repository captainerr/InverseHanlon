import { z } from 'astro/zod';

// Shared between src/content.config.ts (the real build) and
// scripts/lint-posts.mjs (a fast standalone check) so they can never drift.
export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});
