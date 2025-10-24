import { motion } from "motion/react";

export function MotionDemo() {
	return (
		<div className="flex flex-col gap-8 items-center">
			{/* Fade in animation */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center"
			>
				<h2 className="text-2xl md:text-3xl font-bold mb-2">
					Welcome to Motion
				</h2>
				<p className="text-muted-foreground">
					Smooth, production-grade animations for React
				</p>
			</motion.div>

			{/* Hover and tap interactions */}
			<div className="flex flex-wrap gap-4 justify-center">
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium"
				>
					Hover & Tap Me
				</motion.button>

				<motion.button
					whileHover={{ rotate: 5 }}
					whileTap={{ rotate: -5 }}
					className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium"
				>
					Rotate on Hover
				</motion.button>

				<motion.button
					whileHover={{
						boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
						y: -2,
					}}
					whileTap={{ y: 0 }}
					className="px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium"
				>
					Lift on Hover
				</motion.button>
			</div>

			{/* Animated cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
				{[1, 2, 3].map((item, index) => (
					<motion.div
						key={item}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							delay: index * 0.2,
							ease: "easeOut",
						}}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.2 },
						}}
						className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm"
					>
						<h3 className="text-lg font-semibold mb-2">Feature {item}</h3>
						<p className="text-sm text-muted-foreground">
							This card animates in with a stagger effect and responds to hover.
						</p>
					</motion.div>
				))}
			</div>

			{/* Scroll animation example */}
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6 }}
				className="mt-8 p-8 border-2 border-dashed border-primary/50 rounded-lg text-center max-w-2xl"
			>
				<h3 className="text-xl font-bold mb-2">Scroll Animation</h3>
				<p className="text-muted-foreground">
					This element animates when it comes into view
				</p>
			</motion.div>

			{/* Loading spinner */}
			<motion.div
				animate={{ rotate: 360 }}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: "linear",
				}}
				className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
			/>
		</div>
	);
}
