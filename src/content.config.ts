import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { postSchema } from './content/postSchema.mjs';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: postSchema,
});

export const collections = { posts };
