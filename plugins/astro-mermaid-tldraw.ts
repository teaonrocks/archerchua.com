import type { AstroIntegration } from "astro";
import { renderDiagrams } from "../scripts/render-mermaid";

function isContentMarkdown(file: string): boolean {
	const normalized = file.replace(/\\/g, "/");
	return /\.mdx?$/.test(normalized) && normalized.includes("/src/content/blog/");
}

/**
 * Renders mermaid diagrams found in blog content into `public/diagrams/` and
 * keeps them in sync with the source.
 */
export function mermaidTldraw(): AstroIntegration {
	return {
		name: "mermaid-tldraw",
		hooks: {
			"astro:config:setup": async ({ logger }) => {
				const { total, rendered } = await renderDiagrams();
				if (!total) return;
				logger.info(rendered ? `rendered ${rendered}/${total} diagram(s)` : `${total} diagram(s) cached`);
			},
			"astro:server:setup": ({ server, logger }) => {
				let running = Promise.resolve();
				const onChange = (file: string) => {
					if (!isContentMarkdown(file)) return;
					running = running
						.then(() => renderDiagrams())
						.then(({ rendered }) => {
							if (rendered) {
								logger.info(`re-rendered ${rendered} diagram(s), reloading`);
								server.ws.send({ type: "full-reload" });
							}
						})
						.catch((err) => logger.error(`render failed: ${(err as Error).message}`));
				};
				server.watcher.on("change", onChange);
				server.watcher.on("add", onChange);
			},
		},
	};
}

export default mermaidTldraw;
