import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import type { ProjectImage } from "@/lib/projects";
import { Button } from "@/components/ui/button";

interface ProjectGalleryProps {
	images: (ProjectImage | string)[];
}

type NormalizedImage = ProjectImage & { type: "image" | "video" };

export function ProjectGallery({ images }: ProjectGalleryProps) {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const normalizedImages: NormalizedImage[] = images.map((img) => {
		const baseImage =
			typeof img === "string"
				? { src: img, alt: "", caption: "", type: "image" as const }
				: img;

		return {
			...baseImage,
			caption: baseImage.caption ?? "",
			type: baseImage.type ?? "image",
		};
	});

	const handlePrevious = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (selectedIndex === null) return;
		setSelectedIndex(
			(prev) => (prev! - 1 + normalizedImages.length) % normalizedImages.length
		);
	};

	const handleNext = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (selectedIndex === null) return;
		setSelectedIndex((prev) => (prev! + 1) % normalizedImages.length);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "ArrowLeft") handlePrevious(e as any);
		if (e.key === "ArrowRight") handleNext(e as any);
		if (e.key === "Escape") setSelectedIndex(null);
	};

	return (
		<section className="space-y-8 pt-8 border-t">
			<h2 className="text-2xl font-bold">Project Gallery</h2>

			{/* Grid Layout */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{normalizedImages.map((image, index) => (
					<motion.div
						key={index}
						layoutId={`gallery-image-${index}`}
						className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-muted"
						onClick={() => setSelectedIndex(index)}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						{image.type === "video" ? (
							<video
								src={image.src}
								poster={image.poster}
								className="h-full w-full object-cover"
								muted
								playsInline
								loop
							/>
						) : (
							<img
								src={image.src}
								alt={image.alt}
								className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
							/>
						)}

						<div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
						<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							<Button
								variant="secondary"
								size="icon"
								className="rounded-full bg-background/80 backdrop-blur-sm"
							>
								<Maximize2 className="h-4 w-4" />
							</Button>
						</div>
						{image.caption && (
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								<p className="text-sm text-white font-medium line-clamp-1">
									{image.caption}
								</p>
							</div>
						)}
					</motion.div>
				))}
			</div>

			{/* Lightbox */}
			<AnimatePresence>
				{selectedIndex !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
						onClick={() => setSelectedIndex(null)}
						onKeyDown={handleKeyDown}
						tabIndex={0}
					>
						<Button
							variant="ghost"
							size="icon"
							className="absolute right-4 top-4 text-white/70 hover:bg-white/10 hover:text-white"
							onClick={() => setSelectedIndex(null)}
						>
							<X className="h-6 w-6" />
						</Button>

						<Button
							variant="ghost"
							size="icon"
							className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:bg-white/10 hover:text-white"
							onClick={handlePrevious}
						>
							<ChevronLeft className="h-8 w-8" />
						</Button>

						<Button
							variant="ghost"
							size="icon"
							className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:bg-white/10 hover:text-white"
							onClick={handleNext}
						>
							<ChevronRight className="h-8 w-8" />
						</Button>

						<div
							className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-lg"
							onClick={(e) => e.stopPropagation()}
						>
							{normalizedImages[selectedIndex].type === "video" ? (
								<video
									src={normalizedImages[selectedIndex].src}
									poster={normalizedImages[selectedIndex].poster}
									className="max-h-[85vh] w-auto"
									autoPlay
									controls
									playsInline
									muted
								/>
							) : (
								<motion.div
									layoutId={`gallery-image-${selectedIndex}`}
									className="h-full w-full"
								>
									<img
										src={normalizedImages[selectedIndex].src}
										alt={normalizedImages[selectedIndex].alt}
										className="max-h-[85vh] w-auto object-contain"
									/>
								</motion.div>
							)}

							{normalizedImages[selectedIndex].caption && (
								<div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-center backdrop-blur-md">
									<p className="text-white/90">
										{normalizedImages[selectedIndex].caption}
									</p>
								</div>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
