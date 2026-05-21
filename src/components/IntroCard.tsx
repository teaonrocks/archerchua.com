export default function IntroCard() {
	return (
		<div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-2xl shadow-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/60 dark:shadow-black/20">
			<p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
				React island
			</p>
			<p className="mt-3 text-neutral-600 dark:text-neutral-300">
				This component is rendered with React and hydrated by Astro. Replace it
				when you are ready to build interactive portfolio pieces.
			</p>
		</div>
	);
}
