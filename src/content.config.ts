import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const articlesCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string(),
        }),
});

export const collections = {
    articles: articlesCollection,
};