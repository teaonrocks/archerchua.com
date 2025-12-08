import { motion } from "motion/react";
import type { ComponentProps } from "react";

const graphPoints = [
	{ x: 32, y: 190, color: "#f472b6" },
	{ x: 80, y: 150, color: "#22d3ee" },
	{ x: 132, y: 170, color: "#38bdf8" },
	{ x: 180, y: 120, color: "#c084fc" },
	{ x: 240, y: 150, color: "#94a3b8" },
	{ x: 296, y: 110, color: "#facc15" },
];

const linePath = graphPoints
	.map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`)
	.join(" ");

const ambientPaths = [
	"M120 220 Q 240 140 420 200 T 900 220",
	"M80 360 Q 360 500 640 360 T 1120 360",
	"M140 500 Q 300 600 520 520 T 1040 520",
];

export type HimaDiscordIllustrationProps = ComponentProps<typeof motion.svg>;

export function HimaDiscordIllustration(props: HimaDiscordIllustrationProps) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width="1200"
			height="675"
			viewBox="0 0 1200 675"
			preserveAspectRatio="xMidYMid meet"
			role="img"
			aria-label="HIMA Discord automation illustration"
			{...props}
		>
			<defs>
				<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#020617" />
					<stop offset="100%" stopColor="#0f172a" />
				</linearGradient>
				<linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#1e293b" stopOpacity="0.9" />
					<stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
				</linearGradient>
				<linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="#f472b6" />
					<stop offset="50%" stopColor="#c084fc" />
					<stop offset="100%" stopColor="#38bdf8" />
				</linearGradient>
				<linearGradient id="himaLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="#f472b6" />
					<stop offset="50%" stopColor="#c084fc" />
					<stop offset="100%" stopColor="#38bdf8" />
				</linearGradient>
				<filter id="himaLineGlow" x="-20%" y="-20%" width="140%" height="140%">
					<feDropShadow
						dx="0"
						dy="0"
						stdDeviation="6"
						floodColor="#38bdf8"
						floodOpacity="0.25"
					/>
				</filter>
			</defs>
			<rect width="1200" height="675" rx="32" fill="url(#bg)" />

			<g stroke="rgba(148,163,184,0.25)" fill="none" strokeWidth="1.5">
				{ambientPaths.map((d, index) => (
					<motion.path
						key={d}
						d={d}
						strokeDasharray="14 18"
						initial={{ pathLength: 0, opacity: 0 }}
						animate={{ pathLength: 1, opacity: 0.4 }}
						transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
					/>
				))}
			</g>

			<g transform="translate(120 148)">
				<motion.g
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					<rect
						width="560"
						height="380"
						rx="28"
						fill="url(#panel)"
						stroke="rgba(148,163,184,0.2)"
					/>
					<rect
						x="0"
						y="0"
						width="78"
						height="380"
						rx="28"
						fill="#0f172a"
						opacity="0.95"
					/>
					<rect
						x="82"
						y="0"
						width="128"
						height="380"
						fill="#111827"
						opacity="0.6"
					/>
					<rect
						x="228"
						y="28"
						width="320"
						height="44"
						rx="14"
						fill="#0b1220"
						opacity="0.8"
					/>
					<text
						x="248"
						y="56"
						fontFamily="'Inter', sans-serif"
						fontSize="18"
						fill="#e2e8f0"
						opacity="0.95"
					>
						# general
					</text>
					<circle cx="526" cy="50" r="11" fill="#38bdf8" opacity="0.9" />

					<circle cx="34" cy="48" r="18" fill="#38bdf8" />
					<circle cx="34" cy="104" r="16" fill="#c084fc" opacity="0.9" />
					<circle cx="34" cy="156" r="14" fill="#facc15" opacity="0.9" />
					<circle cx="34" cy="206" r="14" fill="#22d3ee" opacity="0.9" />
					<circle cx="34" cy="256" r="12" fill="#f472b6" opacity="0.9" />
					<circle cx="34" cy="304" r="12" fill="#cbd5f5" opacity="0.8" />

					<rect
						x="94"
						y="32"
						width="102"
						height="16"
						rx="6"
						fill="#f8fafc"
						opacity="0.15"
					/>
					<rect
						x="94"
						y="64"
						width="102"
						height="12"
						rx="5"
						fill="#94a3b8"
						opacity="0.4"
					/>
					<rect
						x="94"
						y="84"
						width="102"
						height="12"
						rx="5"
						fill="#cbd5f5"
						opacity="0.35"
					/>
					<rect
						x="94"
						y="116"
						width="102"
						height="12"
						rx="5"
						fill="#818cf8"
						opacity="0.6"
					/>
					<rect
						x="94"
						y="136"
						width="102"
						height="12"
						rx="5"
						fill="#38bdf8"
						opacity="0.4"
					/>
					<rect
						x="94"
						y="168"
						width="102"
						height="12"
						rx="5"
						fill="#94a3b8"
						opacity="0.3"
					/>
					<rect
						x="94"
						y="188"
						width="102"
						height="12"
						rx="5"
						fill="#94a3b8"
						opacity="0.2"
					/>
					<rect
						x="94"
						y="208"
						width="102"
						height="12"
						rx="5"
						fill="#94a3b8"
						opacity="0.15"
					/>
					<rect
						x="94"
						y="228"
						width="102"
						height="12"
						rx="5"
						fill="#94a3b8"
						opacity="0.15"
					/>

					<rect
						x="228"
						y="88"
						width="320"
						height="260"
						rx="18"
						fill="#0d1728"
						opacity="0.9"
					/>
					<rect
						x="244"
						y="110"
						width="256"
						height="12"
						rx="6"
						fill="#94a3b8"
						opacity="0.35"
					/>
					<rect
						x="244"
						y="128"
						width="220"
						height="10"
						rx="5"
						fill="#64748b"
						opacity="0.3"
					/>
					<circle cx="264" cy="176" r="18" fill="#38bdf8" />
					<text
						x="298"
						y="168"
						fontFamily="'Inter', sans-serif"
						fontSize="14"
						fill="#f8fafc"
						opacity="0.9"
					>
						HIMA Bot
					</text>
					<text
						x="392"
						y="168"
						fontFamily="'Inter', sans-serif"
						fontSize="11"
						fill="#94a3b8"
						opacity="0.9"
					>
						Today 09:42
					</text>

					<rect
						x="298"
						y="178"
						width="220"
						height="12"
						rx="6"
						fill="#cbd5f5"
						opacity="0.6"
					/>
					<rect
						x="298"
						y="196"
						width="232"
						height="12"
						rx="6"
						fill="#cbd5f5"
						opacity="0.45"
					/>
					<rect
						x="298"
						y="214"
						width="222"
						height="12"
						rx="6"
						fill="#cbd5f5"
						opacity="0.35"
					/>
					<motion.rect
						x="294"
						y="240"
						width="234"
						height="42"
						rx="14"
						fill="#0d5062"
						opacity="0.9"
						animate={{ opacity: [0.7, 1, 0.7] }}
						transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
					/>
					<text
						x="411"
						y="263"
						fontFamily="'Inter', sans-serif"
						fontSize="14"
						fill="#e0f2fe"
						opacity="0.95"
						textAnchor="middle"
						dominantBaseline="middle"
					>
						✔ Attendance recorded · +15 pts
					</text>
					<motion.rect
						x="244"
						y="294"
						width="150"
						height="32"
						rx="12"
						fill="#f472b6"
						opacity="0.85"
						animate={{ translateY: [0, -2, 0] }}
						transition={{
							duration: 3.6,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 0.2,
						}}
					/>
					<motion.rect
						x="422"
						y="294"
						width="110"
						height="32"
						rx="12"
						fill="#c084fc"
						opacity="0.75"
						animate={{ translateY: [0, -2, 0] }}
						transition={{
							duration: 3.6,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 0.6,
						}}
					/>
				</motion.g>
			</g>

			<g transform="translate(750 208)">
				<motion.g
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
				>
					<rect
						width="360"
						height="260"
						rx="24"
						fill="rgba(15,23,42,0.85)"
						stroke="rgba(168,162,158,0.25)"
					/>
					<text
						x="32"
						y="40"
						fontFamily="'Inter', sans-serif"
						fontSize="18"
						fill="#e2e8f0"
					>
						Attendance • Points • Shop
					</text>
					<rect
						x="32"
						y="64"
						width="296"
						height="26"
						rx="8"
						fill="#22d3ee"
						opacity="0.8"
					/>
					<rect
						x="32"
						y="102"
						width="220"
						height="20"
						rx="6"
						fill="#c4b5fd"
						opacity="0.6"
					/>
					<rect
						x="32"
						y="132"
						width="250"
						height="20"
						rx="6"
						fill="#c084fc"
						opacity="0.4"
					/>
					<rect
						x="32"
						y="162"
						width="200"
						height="20"
						rx="6"
						fill="#f472b6"
						opacity="0.45"
					/>
					<rect
						x="32"
						y="212"
						width="120"
						height="34"
						rx="10"
						fill="#22d3ee"
						opacity="0.9"
					/>
					<rect
						x="180"
						y="212"
						width="120"
						height="34"
						rx="10"
						fill="#f472b6"
						opacity="0.7"
					/>

					<motion.g
						style={{ mixBlendMode: "screen" }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
					>
						<motion.path
							d={linePath}
							stroke="url(#himaLineGradient)"
							strokeWidth={5}
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							filter="url(#himaLineGlow)"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
						/>
						{graphPoints.map((point, index) => (
							<motion.circle
								key={`${point.x}-${point.y}`}
								cx={point.x}
								cy={point.y}
								r={7}
								fill={point.color}
								initial={{ scale: 0, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{
									duration: 0.4,
									delay: 0.6 + index * 0.08,
									type: "spring",
									stiffness: 260,
									damping: 16,
								}}
							/>
						))}
					</motion.g>
				</motion.g>
			</g>
		</motion.svg>
	);
}
