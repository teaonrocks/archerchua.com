import { motion } from "motion/react";
import type { ComponentProps } from "react";

const spaceDark = "#020617";
const spaceLight = "#1e1b4b";
const starYellow = "#fef08a";
const telescopeGrey = "#64748b";
const lensBlue = "#38bdf8";
const vrPurple = "#a855f7";

const stars = [
	{ cx: 200, cy: 190, r: 2, delay: 0 },
	{ cx: 350, cy: 140, r: 3, delay: 0.5 },
	{ cx: 500, cy: 220, r: 2, delay: 1 },
	{ cx: 650, cy: 120, r: 2, delay: 1.5 },
	{ cx: 800, cy: 240, r: 3, delay: 2 },
	{ cx: 950, cy: 160, r: 2, delay: 2.5 },
	{ cx: 1100, cy: 290, r: 2, delay: 3 },
	{ cx: 150, cy: 440, r: 2, delay: 0.2 },
	{ cx: 1050, cy: 490, r: 2, delay: 2.8 },
];

const constellation = [
	{ x: 600, y: 190 },
	{ x: 700, y: 140 },
	{ x: 750, y: 240 },
	{ x: 650, y: 290 },
	{ x: 600, y: 190 }, // Close loop
];

export type LostInTheStarsIllustrationProps = ComponentProps<typeof motion.svg>;

export function LostInTheStarsIllustration(
	props: LostInTheStarsIllustrationProps
) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width="1200"
			height="675"
			viewBox="0 0 1200 675"
			preserveAspectRatio="xMidYMid meet"
			role="img"
			aria-label="Lost in the Stars VR illustration"
			{...props}
		>
			<defs>
				<linearGradient id="spaceBg" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor={spaceDark} />
					<stop offset="100%" stopColor={spaceLight} />
				</linearGradient>
				<filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur stdDeviation="2" result="blur" />
					<feComposite in="SourceGraphic" in2="blur" operator="over" />
				</filter>
			</defs>

			{/* Background */}
			<rect width="1200" height="675" fill="url(#spaceBg)" rx="32" />

			{/* Stars */}
			{stars.map((star, i) => (
				<motion.circle
					key={i}
					cx={star.cx}
					cy={star.cy}
					r={star.r}
					fill={starYellow}
					filter="url(#starGlow)"
					animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
					transition={{
						duration: 3,
						repeat: Number.POSITIVE_INFINITY,
						delay: star.delay,
						ease: "easeInOut",
					}}
				/>
			))}

			{/* Constellation Lines */}
			<motion.path
				d={`M ${constellation[0].x} ${constellation[0].y} L ${constellation[1].x} ${constellation[1].y} L ${constellation[2].x} ${constellation[2].y} L ${constellation[3].x} ${constellation[3].y} Z`}
				fill="none"
				stroke={lensBlue}
				strokeWidth="1"
				strokeDasharray="4 4"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={{ pathLength: 1, opacity: 0.4 }}
				transition={{
					duration: 4,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
			/>
			{/* Constellation Points */}
			{constellation.slice(0, 4).map((point, i) => (
				<circle
					key={i}
					cx={point.x}
					cy={point.y}
					r="4"
					fill={lensBlue}
					opacity="0.8"
				/>
			))}

			{/* Telescope */}
			<g transform="translate(300, 440) rotate(-30)">
				{/* Tripod Legs (Simplified) */}
				<line
					x1="0"
					y1="0"
					x2="-40"
					y2="150"
					stroke={telescopeGrey}
					strokeWidth="8"
					strokeLinecap="round"
				/>
				<line
					x1="0"
					y1="0"
					x2="40"
					y2="150"
					stroke={telescopeGrey}
					strokeWidth="8"
					strokeLinecap="round"
				/>
				{/* Main Tube */}
				<rect
					x="-25"
					y="-180"
					width="50"
					height="200"
					rx="4"
					fill={telescopeGrey}
				/>
				<rect x="-30" y="-180" width="60" height="20" rx="2" fill="#475569" />{" "}
				{/* Lens cap area */}
				<rect
					x="-20"
					y="20"
					width="40"
					height="40"
					rx="4"
					fill="#475569"
				/>{" "}
				{/* Eyepiece mount */}
				{/* Lens Reflection */}
				<circle cx="0" cy="-170" r="15" fill={lensBlue} opacity="0.3" />
			</g>

			{/* VR Headset (Floating) */}
			<g transform="translate(900, 390)">
				<motion.g
					animate={{ y: [-10, 10, -10] }}
					transition={{
						duration: 4,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				>
					{/* Main Body */}
					<rect
						x="-60"
						y="-30"
						width="120"
						height="60"
						rx="16"
						fill="#1e293b"
						stroke={vrPurple}
						strokeWidth="2"
					/>
					{/* Strap */}
					<path
						d="M -60 -10 C -80 -10, -90 -20, -90 -30"
						stroke="#334155"
						strokeWidth="4"
						fill="none"
						strokeLinecap="round"
					/>
					<path
						d="M 60 -10 C 80 -10, 90 -20, 90 -30"
						stroke="#334155"
						strokeWidth="4"
						fill="none"
						strokeLinecap="round"
					/>

					{/* Lenses (Subtle) */}
					<circle
						cx="-25"
						cy="0"
						r="15"
						fill="#0f172a"
						stroke="#334155"
						strokeWidth="1"
					/>
					<circle
						cx="25"
						cy="0"
						r="15"
						fill="#0f172a"
						stroke="#334155"
						strokeWidth="1"
					/>

					{/* Sensor/Camera Glow */}
					<circle cx="0" cy="0" r="4" fill={vrPurple}>
						<animate
							attributeName="opacity"
							values="0.5;1;0.5"
							dur="2s"
							repeatCount="indefinite"
						/>
					</circle>
				</motion.g>
			</g>

			{/* Connection Beam (VR to Constellation) */}
			<motion.path
				d="M 900 360 Q 800 240 750 240"
				fill="none"
				stroke={vrPurple}
				strokeWidth="2"
				strokeDasharray="4 4"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={{ pathLength: 1, opacity: 0.3 }}
				transition={{ duration: 2, delay: 1 }}
			/>
		</motion.svg>
	);
}
