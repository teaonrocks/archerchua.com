import { motion } from "motion/react";
import type { ComponentProps } from "react";

const scenarios = [
	{
		day: "Day 1",
		title: "Medical Emergency",
		cost: -150,
		balanceStart: 450,
		balanceEnd: 300,
	},
];

export type OneDayAtATimeIllustrationProps = ComponentProps<typeof motion.svg>;

export function OneDayAtATimeIllustration(
	props: OneDayAtATimeIllustrationProps
) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width="1200"
			height="675"
			viewBox="0 0 1200 675"
			preserveAspectRatio="xMidYMid meet"
			role="img"
			aria-label="One Day At A Time illustration showing financial choices"
			{...props}
		>
			<defs>
				<linearGradient id="odatBg" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#0f172a" />
					<stop offset="100%" stopColor="#334155" />
				</linearGradient>
				<filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
					<feDropShadow
						dx="0"
						dy="8"
						stdDeviation="16"
						floodColor="#000000"
						floodOpacity="0.4"
					/>
				</filter>
			</defs>

			{/* Background */}
			<rect width="1200" height="675" fill="url(#odatBg)" rx="32" />

			{/* Grid Background */}
			<g stroke="#94a3b8" strokeOpacity="0.1" strokeWidth="1">
				{Array.from({ length: 12 }).map((_, i) => (
					<line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="675" />
				))}
				{Array.from({ length: 7 }).map((_, i) => (
					<line key={`h-${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
				))}
			</g>

			{/* Game Container */}
			<motion.g
				initial={{ y: 40, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				{/* Main Card */}
				<rect
					x="300"
					y="138"
					width="600"
					height="400"
					rx="24"
					fill="#1e293b"
					stroke="#475569"
					strokeWidth="2"
					filter="url(#cardShadow)"
				/>

				{/* Header Bar (Day & Balance) */}
				<g transform="translate(300, 138)">
					<path
						d="M 0 24 C 0 12 12 0 24 0 L 576 0 C 588 0 600 12 600 24 L 600 80 L 0 80 Z"
						fill="#0f172a"
						fillOpacity="0.5"
					/>

					{/* Day Indicator */}
					<rect x="32" y="24" width="80" height="32" rx="8" fill="#334155" />
					<text
						x="72"
						y="45"
						textAnchor="middle"
						fill="#e2e8f0"
						fontFamily="sans-serif"
						fontSize="14"
						fontWeight="bold"
					>
						DAY 3
					</text>

					{/* Balance Indicator */}
					<rect
						x="440"
						y="24"
						width="128"
						height="32"
						rx="8"
						fill="#0f172a"
						stroke="#334155"
					/>
					<text
						x="460"
						y="45"
						fill="#22c55e"
						fontFamily="sans-serif"
						fontSize="16"
						fontWeight="bold"
					>
						$
					</text>
					<text
						x="480"
						y="45"
						fill="#e2e8f0"
						fontFamily="sans-serif"
						fontSize="16"
						fontWeight="bold"
					>
						450
					</text>

					{/* Balance Drop Animation */}
					<motion.text
						x="530"
						y="45"
						fill="#ef4444"
						fontFamily="sans-serif"
						fontSize="14"
						fontWeight="bold"
						initial={{ opacity: 0, y: 45 }}
						animate={{ opacity: [0, 1, 0], y: 20 }}
						transition={{ delay: 2, duration: 1.5 }}
					>
						-150
					</motion.text>
				</g>

				{/* Scenario Content */}
				<g transform="translate(340, 258)">
					{/* Title Placeholder */}
					<rect width="300" height="24" rx="4" fill="#e2e8f0" />
					{/* Description Lines */}
					<rect y="40" width="480" height="12" rx="2" fill="#64748b" />
					<rect y="64" width="420" height="12" rx="2" fill="#64748b" />
					<rect y="88" width="360" height="12" rx="2" fill="#64748b" />
				</g>

				{/* Choice Buttons */}
				<g transform="translate(340, 418)">
					{/* Option A */}
					<motion.g
						whileHover={{ scale: 1.02 }}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5 }}
					>
						<rect
							width="250"
							height="80"
							rx="12"
							fill="#334155"
							stroke="#475569"
							strokeWidth="2"
						/>
						<rect x="20" y="20" width="120" height="12" rx="2" fill="#94a3b8" />
						<rect x="20" y="44" width="80" height="12" rx="2" fill="#64748b" />
					</motion.g>

					{/* Option B (Selected) */}
					<motion.g
						transform="translate(270, 0)"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.7 }}
					>
						<motion.rect
							width="250"
							height="80"
							rx="12"
							fill="#334155"
							stroke="#475569"
							strokeWidth="2"
							animate={{
								stroke: ["#475569", "#ef4444", "#ef4444"],
								fill: [
									"#334155",
									"rgba(239, 68, 68, 0.1)",
									"rgba(239, 68, 68, 0.1)",
								],
							}}
							transition={{ delay: 1.5, duration: 0.5 }}
						/>
						<rect x="20" y="20" width="140" height="12" rx="2" fill="#94a3b8" />
						<rect x="20" y="44" width="60" height="12" rx="2" fill="#64748b" />

						{/* Selection Indicator */}
						<motion.circle
							cx="220"
							cy="40"
							r="12"
							fill="none"
							stroke="#ef4444"
							strokeWidth="2"
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 1.5, type: "spring" }}
						/>
						<motion.path
							d="M 214 40 L 218 44 L 226 36"
							stroke="#ef4444"
							strokeWidth="2"
							fill="none"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ delay: 1.7, duration: 0.3 }}
						/>
					</motion.g>
				</g>
			</motion.g>
		</motion.svg>
	);
}
