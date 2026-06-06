import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		image: z.string().optional(),
		canonical: z.string().optional(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		github: z.string().url().optional(),
	}),
});

export const collections = { blog };
