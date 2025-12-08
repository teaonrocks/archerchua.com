export type ProjectCategory = "web" | "web3" | "design" | "mobile" | "vr";

export interface ProjectImage {
	src: string;
	alt: string;
	caption?: string;
	type?: "image" | "video";
	poster?: string;
}

export interface Project {
	id: number;
	slug: string;
	title: string;
	description: string;
	longDescription: string;
	image: string;
	images?: ProjectImage[];
	video?: string;
	tags: string[];
	categories: ProjectCategory[];
	github?: string;
	demo?: string;
	gdd?: string; // Game Design Document path
	highlights: string[];
	hasCaseStudy?: boolean;
}

export const projects: Project[] = [
	{
		id: 1,
		slug: "one-day-at-a-time",
		title: "One Day At a Time",
		description:
			"A real-time, Kahoot-style web app for 'One Day At A Time,' a poverty simulation experience.",
		longDescription:
			"A real-time, Kahoot-style web app I developed for 'One Day At A Time,' a poverty simulation experience by Youth Corps, enhancing immersion from its Google Sheets format. The application features live synchronization, interactive gameplay mechanics, and a modern interface built with React and Next.js, utilizing Convex for real-time data management.",
		image: "/odat-1.png",
		images: [
			{
				src: "/odat-1.png",
				alt: "Landing Screen",
				caption: "Hosts can create sessions and users can join via code.",
			},
			{
				src: "/odat-2.png",
				alt: "Game Lobby",
				caption: "Game lobby screen showing qr code and join instructions.",
			},
			{
				src: "/odat-3.png",
				alt: "Day Screen",
				caption:
					"Users see questions on the big screen and answer on their devices.",
			},
			{
				src: "/odat-4.png",
				alt: "Mobile User Screen",
				caption: "Users screen on mobile showing real-time updates.",
			},
		],
		tags: ["React", "Next.js", "Convex", "Tailwind"],
		categories: ["web", "mobile"],
		github: "https://github.com/teaonrocks/odat",
		demo: "https://odat.archerchua.com",
		highlights: [
			"Real-time game state synchronization using Convex",
			"Interactive mobile-first player interface",
			"Admin dashboard for game control and analytics",
			"Scalable architecture supporting multiple concurrent sessions",
		],
	},
	{
		id: 2,
		slug: "hima-discord-bots",
		title: "HIMA Discord Bots & API",
		description:
			"Discord-based NFT community platform integrating PyCord bots with a FastAPI/SQLite backend.",
		longDescription:
			"Discord-based NFT community platform integrating PyCord bots with a FastAPI/SQLite backend, featuring Attendance, Points (with NFT multipliers), and Shop bots. The system manages community engagement through automated point tracking, NFT holder benefits, and a virtual economy, all accessible through Discord commands and powered by a robust REST API.",
		image: "/hima-discord.svg",
		tags: ["Python", "Pycord", "SQLite", "FastAPI"],
		categories: ["web3"],
		github: "https://github.com/teaonrocks/HIMA-discord",
		highlights: [
			"Integrated Discord bot ecosystem with shared economy",
			"NFT ownership verification and multiplier system",
			"REST API for cross-platform data access",
			"Automated attendance and reward tracking",
		],
	},
	{
		id: 3,
		slug: "invoicething",
		title: "InvoiceThing",
		description:
			"A modern, full-featured invoice management system for freelancers and small businesses.",
		longDescription:
			"A comprehensive invoice management system designed for freelancers and small businesses. Features include customizable invoice templates, client management, payment tracking, automated reminders, and detailed financial reporting. Built with Next.js for optimal performance, Convex for real-time data synchronization, and Clerk for secure authentication.",
		image: "/InvoiceThing-1.png",
		images: [
			{
				src: "/InvoiceThing-1.png",
				alt: "Dashboard",
				caption: "Overview of financial health and recent invoices.",
			},
			{
				src: "/InvoiceThing-2.png",
				alt: "Invoice Editor",
				caption: "WYSIWYG editor for creating invoices.",
			},
			{
				src: "/InvoiceThing-3.png",
				alt: "Client List",
				caption: "Manage client details and history.",
			},
		],
		tags: ["Next.js", "Convex", "Clerk", "Tailwind"],
		categories: ["web"],
		github: "https://github.com/teaonrocks/invoicething",
		demo: "https://invoicething.archerchua.com",
		highlights: [
			"Customizable invoice generation with PDF export",
			"Real-time payment status tracking",
			"Secure user authentication with Clerk",
			"Responsive dashboard for business analytics",
		],
	},
	{
		id: 4,
		slug: "cardano-nft-minting",
		title: "Cardano NFT Minting System",
		description:
			"Automates Cardano NFT drops by monitoring payments, validating prices, and submitting minting transactions.",
		longDescription:
			"Automates Cardano NFT drops by monitoring payments, validating prices (including discounts), generating metadata, and submitting minting or refund transactions. The system is highly configurable via environment variables and backed by SQLite for tracking successful mints. It handles payment verification, metadata generation, blockchain interaction through Cardano CLI, and automated transaction processing with built-in error handling and recovery mechanisms.",
		image: "/hima-mint.png",
		video: "/hima-mint.mp4",
		images: [
			{
				src: "/hima-mint.mp4",
				alt: "Cardano NFT minting automation preview",
				caption:
					"Console walkthrough showing automated payment detection and mint execution.",
				type: "video",
			},
		],
		tags: ["Python", "CardanoCLI", "SQLite"],
		categories: ["web3"],
		github: "https://github.com/teaonrocks/HIMA-minter",
		highlights: [
			"Automated payment monitoring and verification",
			"Dynamic metadata generation for NFTs",
			"Robust error handling and refund mechanism",
			"Direct integration with Cardano CLI",
		],
	},
	{
		id: 6,
		slug: "lost-in-the-stars",
		title: "Lost in the stars",
		description:
			"VR escape room game developed using Unity and C#, featuring immersive puzzles and environments.",
		longDescription:
			"VR escape room game developed using Unity and C#, featuring immersive puzzles and environments. Players must solve a series of challenges and riddles to escape within a time limit. The game utilizes advanced VR technology to create a fully interactive 3D environment, allowing players to explore and interact with objects in real-time.",
		image: "/lost-in-the-stars-cover.png",
		video: "/lost-in-the-stars.mp4",
		images: [
			{
				src: "/lost-in-the-stars.mp4",
				alt: "Lost in the Stars gameplay walkthrough",
				caption:
					"Gameplay capture showing the VR escape room flow inside the observatory.",
				type: "video",
			},
			{
				src: "/lost-in-the-stars-storyboard.png",
				alt: "Lost in the Stars observatory storyboard",
				caption: "Storyboard and layout for the observatory escape room.",
				type: "image",
			},
		],
		gdd: "/Lost%20In%20The%20Stars%20GDD.pdf",
		tags: ["Unity", "C#", "VR", "Game Development"],
		categories: ["vr"],
		highlights: [
			"Immersive 3D environments and physics",
			"Complex puzzle mechanics and interactions",
			"Optimized performance for VR headsets",
			"Spatial audio for enhanced immersion",
		],
	},
	{
		id: 7,
		slug: "ocbc-vtm-poc",
		title: "OCBC Smart Banking Kiosk (VTM)",
		description:
			"AI-assisted virtual teller prototype with voice intent, kiosk workflows, and WebRTC live-agent escalation.",
		longDescription:
			"An end-to-end virtual teller machine built for the OCBC Ignite Innovation Challenge 2025. The kiosk captures voice requests, transcribes them locally with Whisper, routes intents through an Ollama-hosted LLM, renders guided workflows, and escalates to a remote live agent over WebRTC with screen-share, video, audio, and annotations.",
		image: "/ocbc-vtm.svg",
		tags: ["React", "TanStack Start", "WebRTC", "Zustand", "Ollama", "Whisper"],
		categories: ["web"],
		github: "https://github.com/teaonrocks/ocbc-vtm-poc",
		highlights: [
			"Voice -> text -> intent pipeline powered by local Whisper + Ollama",
			"Guided banking workflows with Zustand action cards",
			"WebRTC escalation with dual video feeds, screen share, and annotations",
			"Optional ASR microservice, signaling server, and live agent dashboard packages",
		],
	},
];

export function getAllProjects() {
	return projects;
}

export function getProjectBySlug(slug: string) {
	return projects.find((p) => p.slug === slug);
}
