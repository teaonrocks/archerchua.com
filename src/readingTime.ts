const WORDS_PER_MINUTE = 225;

export interface ReadingTime {
	minutes: number;
	label: string;
	isoDuration: string;
}

export function getReadingTime(content = ""): ReadingTime {
	const wordCount = getWordCount(stripMdx(content));
	const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));

	return {
		minutes,
		label: `${minutes} min read`,
		isoDuration: `PT${minutes}M`,
	};
}

function getWordCount(content: string) {
	return content.match(/[\p{L}\p{N}][\p{L}\p{N}'-]*/gu)?.length ?? 0;
}

function stripMdx(content: string) {
	return content
		.replace(/^---[\s\S]*?---/, " ")
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/`[^`]*`/g, " ")
		.replace(/<!--[\s\S]*?-->/g, " ")
		.replace(/^import\s.+$/gm, " ")
		.replace(/^export\s.+$/gm, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
		.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
		.replace(/[#>*_~|=[\]{}()\\-]/g, " ");
}
