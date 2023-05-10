// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const poemsCollection = defineCollection({
  schema: z.object({
    number: z.number(),
    title: z.string(),
    chapter: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  poems: poemsCollection,
};
