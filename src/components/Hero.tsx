import { motion } from "motion/react";
import { toast } from "sonner";

export function Hero() {
	return (
		<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
			{/* Portrait - Left side */}
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="order-1 md:order-1 flex justify-center"
			>
				<div className="relative">
					<motion.img
						src="/portrait.jpg"
						alt="Archer Chua"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
						className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl"
					/>
					{/* Decorative border */}
					<div className="absolute inset-0 rounded-2xl border-2 border-primary/20 -z-10 translate-x-4 translate-y-4"></div>
				</div>
			</motion.div>

			{/* Text Content - Right side */}
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
				className="order-2 md:order-2 space-y-6 text-center md:text-left"
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
						Archer Chua
					</h1>
					<div className="h-1 w-24 bg-primary mx-auto md:mx-0 mb-6"></div>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="text-lg md:text-xl text-muted-foreground leading-relaxed"
				>
					A passionate Software Engineer crafting beautiful, performant web
					experiences. Specializing in modern web technologies and bringing
					ideas to life through clean, efficient code.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="text-base md:text-lg text-muted-foreground"
				>
					Building with React, TypeScript, and cutting-edge tools to create
					exceptional digital experiences that make a difference.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1 }}
					className="flex gap-4 justify-center md:justify-start pt-4"
				>
					<motion.a
						href="#projects"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium shadow-lg hover:shadow-xl transition-shadow"
					>
						View Projects
					</motion.a>
					<motion.button
						type="button"
						onClick={async () => {
							const email = "arxherchua@gmail.com";
							try {
								await navigator.clipboard.writeText(email);
								toast.success("Email copied to clipboard!");
							} catch (e) {
								toast.error("Could not copy email. Please copy manually.");
							}
						}}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors"
					>
						Get in Touch
					</motion.button>
				</motion.div>
			</motion.div>
		</div>
	);
}
