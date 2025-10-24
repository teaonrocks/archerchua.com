import { motion, useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";

export function InteractiveBackground() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};

		if (typeof window !== "undefined") {
			window.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, [mouseX, mouseY]);

	return (
		<div
			ref={containerRef}
			className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
		>
			{/* Grid background */}
			<div className="absolute inset-0 bg-background bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]" />

			{/* Cursor glow effect - hidden on mobile */}
			<motion.div
				className="hidden md:block absolute w-96 h-96 rounded-full pointer-events-none"
				style={{
					x: mouseX,
					y: mouseY,
					translateX: "-50%",
					translateY: "-50%",
					background:
						"radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
					filter: "blur(60px)",
				}}
			/>
		</div>
	);
}
