import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('2027梯子测评团队'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
