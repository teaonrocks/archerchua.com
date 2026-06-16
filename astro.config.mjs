// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkMermaidTldraw } from "./plugins/remark-mermaid-tldraw";
import { mermaidTldraw } from "./plugins/astro-mermaid-tldraw";

// https://astro.build/config
export default defineConfig({
	site: "https://archerchua.com",

	markdown: {
		remarkPlugins: [remarkMermaidTldraw],
	},

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [mermaidTldraw(), react(), mdx(), sitemap()],
});
