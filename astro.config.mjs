// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkMermaidTldraw } from "./plugins/remark-mermaid-tldraw";
import { mermaidTldraw } from "./plugins/astro-mermaid-tldraw";

// https://astro.build/config
export default defineConfig({
	site: "https://archerchua.com",

	fonts: [
		{
			name: "Manrope",
			cssVariable: "--font-manrope",
			provider: fontProviders.google(),
			weights: [500, 600, 700],
			styles: ["normal"],
		},
		{
			name: "IBM Plex Sans",
			cssVariable: "--font-ibm-plex-sans",
			provider: fontProviders.google(),
			weights: [400, 500, 600],
			styles: ["normal"],
		},
	],

	markdown: {
		remarkPlugins: [remarkMermaidTldraw],
	},

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [mermaidTldraw(), react(), mdx(), sitemap()],
});
