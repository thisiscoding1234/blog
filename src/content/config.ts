import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    col1: z.string(),
    col2: z.string(),
    dir: z.string(),
    type: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'blog': blogCollection,
};