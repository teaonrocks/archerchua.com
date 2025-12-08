import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import {
	ExternalLink,
	Github,
	ArrowRight,
	Download,
	Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getAllProjects, type Project } from "@/lib/projects";
import { HimaDiscordIllustrationV2 } from "@/components/illustrations/HimaDiscordIllustrationV2";
import { OcbcVtmIllustrationV2 } from "@/components/illustrations/OcbcVtmIllustrationV2";
import { CardanoMintIllustrationV2 } from "@/components/illustrations/CardanoMintIllustrationV2";
import { InvoiceThingIllustration } from "@/components/illustrations/InvoiceThingIllustration";
import { OneDayAtATimeIllustration } from "@/components/illustrations/OneDayAtATimeIllustration";
import { LostInTheStarsIllustration } from "@/components/illustrations/LostInTheStarsIllustration";

const MotionCard = motion.create(Card);

function ProjectThumbnail({
	project,
	className,
}: {
	project: Project;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"relative w-full h-full overflow-hidden bg-muted",
				className
			)}
		>
			{project.slug === "hima-discord-bots" ? (
				<HimaDiscordIllustrationV2 className="w-full h-full" />
			) : project.slug === "ocbc-vtm-poc" ? (
				<OcbcVtmIllustrationV2 className="w-full h-full" />
			) : project.slug === "cardano-nft-minting" ? (
				<CardanoMintIllustrationV2 className="w-full h-full" />
			) : project.slug === "invoicething" ? (
				<InvoiceThingIllustration className="w-full h-full" />
			) : project.slug === "one-day-at-a-time" ? (
				<OneDayAtATimeIllustration className="w-full h-full" />
			) : project.slug === "lost-in-the-stars" ? (
				<LostInTheStarsIllustration className="w-full h-full" />
			) : (
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			)}
		</div>
	);
}

export function Projects() {
	const projects = getAllProjects();
	const [activeCategory, setActiveCategory] = useState<string>("All");
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	// Calculate category counts
	const categories = useMemo(() => {
		const counts: Record<string, number> = { All: projects.length };
		projects.forEach((project) => {
			project.categories.forEach((cat) => {
				const displayCat =
					cat === "web"
						? "Web"
						: cat === "mobile"
						? "Mobile"
						: cat === "vr"
						? "VR"
						: cat === "web3"
						? "Web3"
						: cat === "design"
						? "Design"
						: cat;
				counts[displayCat] = (counts[displayCat] || 0) + 1;
			});
		});

		const order = ["All", "Web", "Mobile", "VR", "Web3", "Design"];
		return order
			.filter((cat) => counts[cat] !== undefined)
			.map((cat) => ({ name: cat, count: counts[cat] }));
	}, []);

	const filteredProjects = useMemo(() => {
		if (activeCategory === "All") return projects;
		return projects.filter((p) =>
			p.categories.some(
				(c) =>
					c.toLowerCase() === activeCategory.toLowerCase() ||
					(activeCategory === "VR" && c === "vr")
			)
		);
	}, [activeCategory]);

	return (
		<div className="max-w-7xl mx-auto space-y-12 py-12 px-4" id="projects">
			{/* Header */}
			<div className="text-center space-y-4">
				<h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
					A selection of recent work showcasing my skills in design and
					development
				</p>
			</div>

			{/* Filter Bar */}
			<div className="flex flex-wrap justify-center gap-2">
				{categories.map((category) => (
					<button
						key={category.name}
						onClick={() => setActiveCategory(category.name)}
						className={cn(
							"px-4 py-2 rounded-full text-sm font-medium transition-all border flex items-center gap-2",
							activeCategory === category.name
								? "bg-primary text-primary-foreground border-primary shadow-md"
								: "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground hover:bg-accent"
						)}
					>
						{category.name}
						<span
							className={cn(
								"text-xs px-1.5 py-0.5 rounded-full",
								activeCategory === category.name
									? "bg-primary-foreground/20"
									: "bg-muted"
							)}
						>
							{category.count}
						</span>
					</button>
				))}
			</div>

			{/* Projects Grid */}
			<motion.div
				layout
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
			>
				<AnimatePresence mode="popLayout">
					{filteredProjects.map((project) => (
						<MotionCard
							layout
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.2 }}
							key={project.id}
							className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full p-0 gap-0"
							onClick={() => setSelectedProject(project)}
						>
							<div className="aspect-video w-full overflow-hidden relative">
								<ProjectThumbnail project={project} />
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
									<Badge className="bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90">
										<Maximize2 className="w-3 h-3 mr-1" />
										View Details
									</Badge>
								</div>
							</div>
							<CardHeader className="px-6 pt-6 pb-2">
								<div className="flex justify-between items-start gap-2">
									<CardTitle className="text-xl line-clamp-1">
										{project.title}
									</CardTitle>
									<Badge variant="secondary" className="shrink-0">
										{project.categories[0].toUpperCase()}
									</Badge>
								</div>
							</CardHeader>
							<CardContent className="px-6 py-2 flex-grow">
								<CardDescription className="line-clamp-3 text-sm">
									{project.description}
								</CardDescription>
							</CardContent>
							<CardFooter className="px-6 pb-6 pt-2 text-xs text-muted-foreground gap-2 flex-wrap">
								{project.tags.slice(0, 3).map((tag) => (
									<span
										key={tag}
										className="bg-secondary/50 px-2 py-1 rounded-md"
									>
										{tag}
									</span>
								))}
								{project.tags.length > 3 && (
									<span className="px-2 py-1">
										+{project.tags.length - 3} more
									</span>
								)}
							</CardFooter>
						</MotionCard>
					))}
				</AnimatePresence>
			</motion.div>

			{/* Project Details Dialog */}
			<Dialog
				open={!!selectedProject}
				onOpenChange={(open) => !open && setSelectedProject(null)}
			>
				<DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0 gap-0">
					{selectedProject && (
						<>
							<div className="relative w-full aspect-video bg-muted">
								{selectedProject.video ? (
									<video
										key={selectedProject.slug}
										src={selectedProject.video}
										poster={selectedProject.image}
										controls
										className="w-full h-full object-cover"
										autoPlay
										muted
										playsInline
									/>
								) : (
									<ProjectThumbnail project={selectedProject} />
								)}
							</div>

							<div className="p-6 space-y-6">
								<DialogHeader>
									<div className="flex items-center justify-between gap-4">
										<div className="space-y-1">
											<DialogTitle className="text-2xl font-bold">
												{selectedProject.title}
											</DialogTitle>
											<div className="flex flex-wrap gap-2">
												{selectedProject.categories.map((cat) => (
													<Badge key={cat} variant="outline">
														{cat.toUpperCase()}
													</Badge>
												))}
											</div>
										</div>
									</div>
								</DialogHeader>

								<div className="space-y-6">
									<div>
										<h4 className="font-semibold mb-2">Overview</h4>
										<DialogDescription className="text-base text-foreground/80 leading-relaxed">
											{selectedProject.longDescription}
										</DialogDescription>
									</div>

									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<h4 className="font-semibold mb-2">Key Highlights</h4>
											<ul className="space-y-2 text-sm text-muted-foreground">
												{selectedProject.highlights.map((highlight, idx) => (
													<li key={idx} className="flex items-start gap-2">
														<span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
														<span>{highlight}</span>
													</li>
												))}
											</ul>
										</div>

										<div>
											<h4 className="font-semibold mb-2">Technologies</h4>
											<div className="flex flex-wrap gap-2">
												{selectedProject.tags.map((tag) => (
													<Badge key={tag} variant="secondary">
														{tag}
													</Badge>
												))}
											</div>
										</div>
									</div>

									<div className="flex flex-wrap gap-3 pt-4 border-t">
										{selectedProject.hasCaseStudy !== false && (
											<Button asChild>
												<a href={`/projects/${selectedProject.slug}`}>
													Read Case Study
													<ArrowRight className="h-4 w-4 ml-2" />
												</a>
											</Button>
										)}
										{selectedProject.demo && (
											<Button variant="secondary" asChild>
												<a
													href={selectedProject.demo}
													target="_blank"
													rel="noopener noreferrer"
												>
													<ExternalLink className="h-4 w-4 mr-2" />
													View Project
												</a>
											</Button>
										)}
										{selectedProject.github && (
											<Button variant="outline" asChild>
												<a
													href={selectedProject.github}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github className="h-4 w-4 mr-2" />
													View Code
												</a>
											</Button>
										)}
										{selectedProject.gdd && (
											<Button variant="outline" asChild>
												<a
													href={selectedProject.gdd}
													download
													className="flex items-center"
												>
													<Download className="h-4 w-4 mr-2" />
													Download GDD
												</a>
											</Button>
										)}
									</div>
								</div>
							</div>
						</>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
}
