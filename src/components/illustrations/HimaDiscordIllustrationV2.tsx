import { motion } from "motion/react";
import type { ComponentProps } from "react";

const bots = [
	{
		id: "attendance",
		label: "Attendance",
		color: "#f472b6", // Pink
		x: 280,
		y: 528,
		iconPath: "M -15 0 L -5 10 L 15 -10", // Checkmark relative to center
		delay: 0.2,
	},
	{
		id: "points",
		label: "Points",
		color: "#facc15", // Yellow
		x: 600,
		y: 148,
		iconPath:
			"M 0 -15 L 5 -5 L 15 -5 L 8 2 L 10 12 L 0 7 L -10 12 L -8 2 L -15 -5 L -5 -5 Z", // Star relative to center
		delay: 0.4,
	},
	{
		id: "shop",
		label: "Shop",
		color: "#38bdf8", // Blue
		x: 920,
		y: 528,
		iconPath:
			"M -10 -10 L 10 -10 L 15 15 L -15 15 Z M -5 -10 C -5 -15 5 -15 5 -10", // Bag relative to center
		delay: 0.6,
	},
];

// Central Hub Coordinates
const hub = { x: 600, y: 348, r: 60 };

// Calculate connection lines
// We want lines to go from the Hub's edge to the Bot Card's edge
const connections = [
	{
		// To Attendance (Bottom Left)
		from: { x: 560, y: 388 }, // Approx bottom-left of hub
		to: { x: 320, y: 468 }, // Top-right corner of attendance card area
		color: "#f472b6",
	},
	{
		// To Points (Top)
		from: { x: 600, y: 288 }, // Top of hub
		to: { x: 600, y: 208 }, // Bottom of points card
		color: "#facc15",
	},
	{
		// To Shop (Bottom Right)
		from: { x: 640, y: 388 }, // Approx bottom-right of hub
		to: { x: 880, y: 468 }, // Top-left corner of shop card area
		color: "#38bdf8",
	},
];

export type HimaDiscordIllustrationV2Props = ComponentProps<typeof motion.svg>;

export function HimaDiscordIllustrationV2(
	props: HimaDiscordIllustrationV2Props
) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width="1200"
			height="675"
			viewBox="0 0 1200 675"
			preserveAspectRatio="xMidYMid meet"
			role="img"
			aria-label="HIMA Discord Bot Ecosystem Illustration"
			{...props}
		>
			<defs>
				<linearGradient id="himaBg" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#0f172a" />
					<stop offset="100%" stopColor="#1e1b4b" />
				</linearGradient>
				<filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
					<feGaussianBlur stdDeviation="4" result="coloredBlur" />
					<feMerge>
						<feMergeNode in="coloredBlur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>

			{/* Background */}
			<rect width="1200" height="675" fill="url(#himaBg)" rx="32" />

			{/* Grid Background */}
			<g stroke="#6366f1" strokeOpacity="0.1" strokeWidth="1">
				{Array.from({ length: 12 }).map((_, i) => (
					<line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="675" />
				))}
				{Array.from({ length: 7 }).map((_, i) => (
					<line key={`h-${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
				))}
			</g>

			{/* Connections */}
			{connections.map((conn, i) => (
				<g key={i}>
					{/* Static Line */}
					<line
						x1={conn.from.x}
						y1={conn.from.y}
						x2={conn.to.x}
						y2={conn.to.y}
						stroke={conn.color}
						strokeWidth="2"
						strokeOpacity="0.2"
					/>
					{/* Moving Particle */}
					<motion.circle r="4" fill={conn.color} filter="url(#glow)">
						<animateMotion
							dur="2s"
							repeatCount="indefinite"
							path={`M ${conn.from.x} ${conn.from.y} L ${conn.to.x} ${conn.to.y}`}
						/>
					</motion.circle>
				</g>
			))}

			{/* Central Hub (Discord/Server) */}
			<motion.g
				initial={{ x: hub.x, y: hub.y, scale: 0, opacity: 0 }}
				animate={{ x: hub.x, y: hub.y, scale: 1, opacity: 1 }}
				transition={{ duration: 0.8, type: "spring" }}
			>
				<circle
					r={hub.r}
					fill="#5865F2"
					fillOpacity="0.2"
					stroke="#5865F2"
					strokeWidth="2"
				/>
				<circle r="30" fill="#5865F2" />
				{/* Simple Discord-like shape */}
				<path
					d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z"
					fill="white"
					transform="scale(0.055) translate(-512, -512)"
				/>
			</motion.g>

			{/* Bots */}
			{bots.map((bot) => (
				<motion.g
					key={bot.id}
					initial={{ x: bot.x, y: bot.y + 50, opacity: 0 }}
					animate={{ x: bot.x, y: bot.y, opacity: 1 }}
					transition={{ delay: bot.delay, duration: 0.6, type: "spring" }}
				>
					{/* Bot Card Group - Centered at 0,0 */}
					<g transform="translate(-80, -60)">
						<rect
							width="160"
							height="120"
							rx="16"
							fill="#1e293b"
							stroke={bot.color}
							strokeWidth="2"
							fillOpacity="0.8"
						/>
					</g>

					{/* Icon Circle */}
					<circle cy="-10" r="24" fill={bot.color} fillOpacity="0.2" />

					{/* Icon Path */}
					<path
						d={bot.iconPath}
						stroke={bot.color}
						strokeWidth="3"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						transform="translate(0, -10)"
					/>

					{/* Label */}
					<text
						y="40"
						textAnchor="middle"
						fill="white"
						fontSize="16"
						fontWeight="600"
						fontFamily="sans-serif"
					>
						{bot.label}
					</text>

					{/* Status Dot */}
					<circle cx="60" cy="-40" r="4" fill="#22c55e">
						<animate
							attributeName="opacity"
							values="1;0.5;1"
							dur="2s"
							repeatCount="indefinite"
						/>
					</circle>
				</motion.g>
			))}
		</motion.svg>
	);
}
