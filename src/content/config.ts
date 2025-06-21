// src/content/config.ts
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const repos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './data/repos' }),
  schema: z.object({
    name: z.string(),
    full_name: z.string(),
    url: z.string(),
    description: z.string(),
    highlights: z.array(z.string()).optional(),
    tags: z.array(z.string()),
    links: z.array(z.object({
      type: z.enum(['docs']).optional(),
      url: z.string(),
      text: z.string(),
    }))
  }),
});

export const collections = {
  repos,
};
