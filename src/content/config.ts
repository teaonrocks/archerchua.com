import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		summary: z.string().optional(),
		published: z.boolean().optional(),
	}),
});

export const collections = { projects };
