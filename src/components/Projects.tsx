import { motion, AnimatePresence } from "motion/react";
import { Fragment } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

type ProjectCategory = "web" | "web3" | "design" | "game";

interface Project {
	id: number;
	title: string;
	description: string;
	longDescription: string;
	image: string;
	images?: string[]; // Multiple images for carousel
	video?: string;
	tags: string[];
	categories: ProjectCategory[];
	github?: string;
	demo?: string;
}

// All projects in a single array
const projects: Project[] = [
	{
		id: 1,
		title: "One Day At a Time",
		description:
			"A real-time, Kahoot-style web app for 'One Day At A Time,' a poverty simulation experience by Youth Corps.",
		longDescription:
			"A real-time, Kahoot-style web app I developed for 'One Day At A Time,' a poverty simulation experience by Youth Corps, enhancing immersion from its Google Sheets format. The application features live synchronization, interactive gameplay mechanics, and a modern interface built with React and Next.js, utilizing Convex for real-time data management.",
		image: "/odat-1.png",
		images: [
			"/odat-1.png",
			"/odat-2.png",
			"/odat-3.png",
			"/odat-4.png",
			"odat-5.png",
		], // Add multiple images for carousel
		tags: ["React", "Next.js", "Convex", "Tailwind"],
		categories: ["web"],
		github: "https://github.com/teaonrocks/odat",
		demo: "https://odat.archerchua.com",
	},
	{
		id: 2,
		title: "HIMA Discord Bots & API",
		description:
			"Discord-based NFT community platform integrating PyCord bots with a FastAPI/SQLite backend.",
		longDescription:
			"Discord-based NFT community platform integrating PyCord bots with a FastAPI/SQLite backend, featuring Attendance, Points (with NFT multipliers), and Shop bots. The system manages community engagement through automated point tracking, NFT holder benefits, and a virtual economy, all accessible through Discord commands and powered by a robust REST API.",
		image: "/hima-bot-1.jpeg",
		tags: ["Python", "Pycord", "SQLite"],
		categories: ["web3"],
		github: "https://github.com/teaonrocks/HIMA-discord",
	},
	{
		id: 3,
		title: "InvoiceThing",
		description:
			"A modern, full-featured invoice management system for freelancers and small businesses.",
		longDescription:
			"A comprehensive invoice management system designed for freelancers and small businesses. Features include customizable invoice templates, client management, payment tracking, automated reminders, and detailed financial reporting. Built with Next.js for optimal performance, Convex for real-time data synchronization, and Clerk for secure authentication.",
		image: "/InvoiceThing-1.png",
		images: [
			"/InvoiceThing-1.png",
			"/InvoiceThing-2.png",
			"/InvoiceThing-3.png",
		],
		tags: ["Next.js", "Convex", "Clerk", "Tailwind"],
		categories: ["web"],
		github: "https://github.com/teaonrocks/invoicething",
		demo: "https://invoicething.archerchua.com",
	},
	{
		id: 4,
		title: "Cardano NFT Minting System",
		description:
			"Automates Cardano NFT drops by monitoring payments, validating prices, and submitting minting transactions.",
		longDescription:
			"Automates Cardano NFT drops by monitoring payments, validating prices (including discounts), generating metadata, and submitting minting or refund transactions. The system is highly configurable via environment variables and backed by SQLite for tracking successful mints. It handles payment verification, metadata generation, blockchain interaction through Cardano CLI, and automated transaction processing with built-in error handling and recovery mechanisms.",
		image: "hima-mint.png",
		video: "/hima-mint.mp4",
		tags: ["Python", "CardanoCLI", "SQLite"],
		categories: ["web3"],
		github: "https://github.com/teaonrocks/HIMA-minter",
	},
	{
		id: 5,
		title: "Archerchua.com",
		description:
			"A modern portfolio website built with Astro and React, featuring dark mode and animations.",
		longDescription:
			"A modern portfolio website built with Astro and React, featuring dark mode, smooth animations, and responsive design. The site showcases projects with an interactive expandable grid layout, includes a timeline for education and experience, and utilizes Motion for fluid animations. Built with performance in mind using Astro's islands architecture and styled with Tailwind CSS.",
		image: "/archerchua.png",
		tags: ["Astro", "React", "Tailwind", "Motion"],
		categories: ["web", "design"],
		github: "https://github.com/archerchua.com",
	},
	{
		id: 6,
		title: "Lost in the stars",
		description:
			"VR escape room game developed using Unity and C#, featuring immersive puzzles and environments.",
		longDescription:
			"VR escape room game developed using Unity and C#, featuring immersive puzzles and environments. Players must solve a series of challenges and riddles to escape within a time limit. The game utilizes advanced VR technology to create a fully interactive 3D environment, allowing players to explore and interact with objects in real-time.",
		image: "/lost-in-the-stars-storyboard.png",
		video: "/lost-in-the-stars.mp4",
		tags: ["Unity", "C#", "VR", "Game Development"],
		categories: ["game"],
	},
];

// Helper function to filter projects by category
const getProjectsByCategory = (category: ProjectCategory | "all") => {
	if (category === "all") return projects;
	return projects.filter((project) => project.categories.includes(category));
};

interface ProjectGridProps {
	projects: Project[];
}

function ProjectGrid({ projects }: ProjectGridProps) {
	const [expandedId, setExpandedId] = useState<number | null>(null);
	const [animatingId, setAnimatingId] = useState<number | null>(null);
	const [gridHeight, setGridHeight] = useState<number>(0);
	const [isMobile, setIsMobile] = useState(false);
	const [dialogProject, setDialogProject] = useState<Project | null>(null);
	const gridRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	// Ensure we have exactly 6 projects to fill the 3x2 grid
	const displayProjects = projects.slice(0, 6);

	// Create placeholders to fill remaining grid slots
	const placeholderCount = Math.max(0, 6 - displayProjects.length);
	const placeholders = Array.from({ length: placeholderCount }, (_, i) => ({
		id: `placeholder-${i}`,
		isPlaceholder: true,
	}));

	// Measure grid height for desktop expansion
	useEffect(() => {
		const measureHeight = () => {
			if (containerRef.current) {
				const height = containerRef.current.offsetHeight;
				setGridHeight(height);
			}
		};

		measureHeight();
		window.addEventListener("resize", measureHeight);
		return () => window.removeEventListener("resize", measureHeight);
	}, []);

	// Detect mobile screen size
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768); // md breakpoint
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Handle escape key
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape" && expandedId) {
				setExpandedId(null);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [expandedId]);

	// Handle click outside grid
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				expandedId &&
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setExpandedId(null);
				setAnimatingId(expandedId);
				setTimeout(() => setAnimatingId(null), 300);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [expandedId]);

	const handleCardClick = (project: Project) => {
		if (isMobile) {
			// On mobile, open dialog
			setDialogProject(project);
		} else {
			// On desktop, use fancy expansion
			if (expandedId === project.id) {
				// Collapsing - keep animatingId for 300ms
				setExpandedId(null);
				setAnimatingId(project.id);
				setTimeout(() => setAnimatingId(null), 300);
			} else {
				// Expanding
				setExpandedId(project.id);
				setAnimatingId(project.id);
			}
		}
	};

	const expandedProject = displayProjects.find((p) => p.id === expandedId);

	return (
		<div ref={gridRef} className="relative w-full">
			{/* Main Grid Container */}
			<div
				ref={containerRef}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
			>
				{displayProjects.map((project, index) => {
					const isExpanded = expandedId === project.id;
					const isAnimating = animatingId === project.id;
					const shouldBeOnTop = isExpanded || isAnimating;
					const videoRef = useRef<HTMLVideoElement>(null);

					const handleMouseEnter = () => {
						if (!isExpanded && project.video && videoRef.current) {
							videoRef.current.play();
						}
					};

					const handleMouseLeave = () => {
						if (!isExpanded && project.video && videoRef.current) {
							videoRef.current.pause();
							videoRef.current.currentTime = 0;
						}
					};

					return (
						<Fragment key={project.id}>
							{/* Placeholder to maintain grid layout */}
							{isExpanded && (
								<div
									key={`placeholder-${project.id}`}
									className="relative z-0"
								/>
							)}

							{/* Actual card */}
							<motion.div
								key={project.id}
								layout
								initial={false}
								transition={{
									layout: {
										duration: 0.35,
										ease: [0.25, 0.1, 0.25, 1],
									},
								}}
								className={`${isExpanded ? "absolute inset-0" : "relative"}`}
								style={{
									position: isExpanded ? "absolute" : "relative",
									top: isExpanded ? 0 : "auto",
									left: isExpanded ? 0 : "auto",
									right: isExpanded ? 0 : "auto",
									bottom: isExpanded ? 0 : "auto",
									zIndex: shouldBeOnTop ? 50 : 0,
								}}
							>
								<motion.div
									whileHover={!isExpanded ? { scale: 1.03 } : {}}
									transition={{ duration: 0.2 }}
									className="h-full"
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
								>
									<Card
										className="group cursor-pointer overflow-hidden transition-all h-full"
										onClick={() => !isExpanded && handleCardClick(project)}
									>
										{/* Only show images on desktop or when expanded */}
										{!isMobile && (
											<div
												className={`relative overflow-hidden ${
													isExpanded ? "aspect-[21/9]" : "aspect-video"
												}`}
											>
												{isExpanded &&
												project.images &&
												project.images.length > 1 ? (
													// Carousel for expanded state with multiple images
													<Carousel className="w-full h-full">
														<CarouselContent>
															{project.images.map((img, idx) => (
																<CarouselItem key={idx}>
																	<img
																		src={img}
																		alt={`${project.title} - Image ${idx + 1}`}
																		className="w-full h-full object-cover"
																	/>
																</CarouselItem>
															))}
														</CarouselContent>
														<CarouselPrevious className="left-4" />
														<CarouselNext className="right-14" />
													</Carousel>
												) : project.video ? (
													<video
														ref={videoRef}
														src={project.video}
														poster={project.image}
														loop
														muted
														playsInline
														autoPlay={isExpanded}
														className="w-full h-full object-cover"
													/>
												) : (
													<img
														src={project.image}
														alt={project.title}
														className="w-full h-full object-cover"
													/>
												)}

												{/* Close button when expanded */}
												{isExpanded && (
													<motion.div
														initial={{ opacity: 0, scale: 0.8 }}
														animate={{ opacity: 1, scale: 1 }}
														transition={{ delay: 0.15, duration: 0.2 }}
													>
														<Button
															variant="outline"
															size="icon"
															className="absolute top-4 right-4 z-10"
															onClick={(e) => {
																e.stopPropagation();
																setExpandedId(null);
															}}
														>
															<X className="h-4 w-4" />
														</Button>
													</motion.div>
												)}
											</div>
										)}

										<CardContent className={isExpanded ? "p-6" : "p-4"}>
											<motion.h3
												layout
												className={`font-bold mb-2 ${
													isExpanded ? "text-3xl mb-3" : "text-xl"
												}`}
												transition={{ duration: 0.3 }}
											>
												{project.title}
											</motion.h3>
											<motion.div
												layout
												className="flex flex-wrap gap-2 mb-3"
												transition={{ duration: 0.3 }}
											>
												{project.tags.map((tag) => (
													<Badge
														key={tag}
														variant="secondary"
														className={isExpanded ? "" : "text-xs"}
													>
														{tag}
													</Badge>
												))}
											</motion.div>
											<motion.p
												layout
												className={`text-muted-foreground ${
													isExpanded
														? "text-base leading-relaxed mb-6"
														: "text-sm"
												}`}
												transition={{ duration: 0.3 }}
											>
												{isExpanded
													? project.longDescription
													: project.description}
											</motion.p>

											{/* Action buttons when expanded */}
											{isExpanded && (project.github || project.demo) && (
												<motion.div
													className="flex gap-3"
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.2, duration: 0.3 }}
												>
													{project.github && (
														<Button variant="outline" asChild>
															<a
																href={project.github}
																target="_blank"
																rel="noopener noreferrer"
																onClick={(e) => e.stopPropagation()}
															>
																<Github className="h-4 w-4 mr-2" />
																View Code
															</a>
														</Button>
													)}
													{project.demo && (
														<Button asChild>
															<a
																href={project.demo}
																target="_blank"
																rel="noopener noreferrer"
																onClick={(e) => e.stopPropagation()}
															>
																<ExternalLink className="h-4 w-4 mr-2" />
																Live Demo
															</a>
														</Button>
													)}
												</motion.div>
											)}
										</CardContent>
									</Card>
								</motion.div>
							</motion.div>
						</Fragment>
					);
				})}

				{/* Invisible placeholders to fill the grid */}
				{placeholders.map((placeholder) => (
					<div
						key={placeholder.id}
						className="relative z-0 opacity-0 pointer-events-none"
						aria-hidden="true"
					>
						<Card className="h-full overflow-hidden">
							<div className="relative aspect-video overflow-hidden bg-muted" />
							<CardContent className="p-4">
								<div className="h-20" />
							</CardContent>
						</Card>
					</div>
				))}
			</div>

			{/* Mobile Dialog */}
			<Dialog
				open={!!dialogProject}
				onOpenChange={(open) => !open && setDialogProject(null)}
			>
				<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
					{dialogProject && (
						<>
							<DialogHeader>
								<DialogTitle className="text-2xl">
									{dialogProject.title}
								</DialogTitle>
							</DialogHeader>

							{/* Image/Video Section */}
							<div className="relative aspect-video overflow-hidden rounded-lg">
								{dialogProject.images && dialogProject.images.length > 1 ? (
									<Carousel className="w-full h-full">
										<CarouselContent>
											{dialogProject.images.map((img, idx) => (
												<CarouselItem key={idx}>
													<img
														src={img}
														alt={`${dialogProject.title} - Image ${idx + 1}`}
														className="w-full h-full object-cover"
													/>
												</CarouselItem>
											))}
										</CarouselContent>
										<CarouselPrevious className="left-4" />
										<CarouselNext className="right-4" />
									</Carousel>
								) : dialogProject.video ? (
									<video
										src={dialogProject.video}
										poster={dialogProject.image}
										loop
										muted
										playsInline
										autoPlay
										className="w-full h-full object-cover"
									/>
								) : (
									<img
										src={dialogProject.image}
										alt={dialogProject.title}
										className="w-full h-full object-cover"
									/>
								)}
							</div>

							{/* Tags */}
							<div className="flex flex-wrap gap-2">
								{dialogProject.tags.map((tag) => (
									<Badge key={tag} variant="secondary">
										{tag}
									</Badge>
								))}
							</div>

							{/* Description */}
							<p className="text-base leading-relaxed text-muted-foreground">
								{dialogProject.longDescription}
							</p>

							{/* Action Buttons */}
							{(dialogProject.github || dialogProject.demo) && (
								<div className="flex gap-3 pt-4">
									{dialogProject.github && (
										<Button variant="outline" asChild>
											<a
												href={dialogProject.github}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="h-4 w-4 mr-2" />
												View Code
											</a>
										</Button>
									)}
									{dialogProject.demo && (
										<Button asChild>
											<a
												href={dialogProject.demo}
												target="_blank"
												rel="noopener noreferrer"
											>
												<ExternalLink className="h-4 w-4 mr-2" />
												Live Demo
											</a>
										</Button>
									)}
								</div>
							)}
						</>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function Projects() {
	return (
		<div className="max-w-7xl mx-auto space-y-12">
			{/* Section Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-center space-y-4"
			>
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
					Featured Projects
				</h2>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
					A selection of my recent work showcasing modern web technologies and
					design principles
				</p>
			</motion.div>

			{/* Tabs for Categories */}
			<Tabs defaultValue="all" className="w-full">
				<TabsList className="grid w-full max-w-md mx-auto grid-cols-5">
					<TabsTrigger value="all">All</TabsTrigger>
					<TabsTrigger value="web">Web</TabsTrigger>
					<TabsTrigger value="web3">Web3</TabsTrigger>
					<TabsTrigger value="design">Design</TabsTrigger>
					<TabsTrigger value="game">Games</TabsTrigger>
				</TabsList>

				<TabsContent value="all" className="mt-8">
					<ProjectGrid projects={getProjectsByCategory("all")} />
				</TabsContent>

				<TabsContent value="web" className="mt-8">
					<ProjectGrid projects={getProjectsByCategory("web")} />
				</TabsContent>

				<TabsContent value="web3" className="mt-8">
					<ProjectGrid projects={getProjectsByCategory("web3")} />
				</TabsContent>

				<TabsContent value="design" className="mt-8">
					<ProjectGrid projects={getProjectsByCategory("design")} />
				</TabsContent>

				<TabsContent value="game" className="mt-8">
					<ProjectGrid projects={getProjectsByCategory("game")} />
				</TabsContent>
			</Tabs>
		</div>
	);
}
