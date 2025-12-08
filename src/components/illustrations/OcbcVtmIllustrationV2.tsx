import { motion } from "motion/react";
import type { ComponentProps } from "react";

const ocbcRed = "#ef4444";
const techBlue = "#38bdf8";
const successGreen = "#22c55e";

export type OcbcVtmIllustrationV2Props = ComponentProps<typeof motion.svg>;

export function OcbcVtmIllustrationV2(props: OcbcVtmIllustrationV2Props) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width="1200"
			height="675"
			viewBox="0 0 1200 675"
			preserveAspectRatio="xMidYMid meet"
			role="img"
			aria-label="OCBC Smart Banking Kiosk illustration"
			{...props}
		>
			<defs>
				<linearGradient id="ocbcV2Bg" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#0f172a" />
					<stop offset="100%" stopColor="#1e293b" />
				</linearGradient>
				<filter id="glowRed" x="-20%" y="-20%" width="140%" height="140%">
					<feGaussianBlur stdDeviation="4" result="blur" />
					<feComposite in="SourceGraphic" in2="blur" operator="over" />
				</filter>
			</defs>

			{/* Background */}
			<rect width="1200" height="675" fill="url(#ocbcV2Bg)" rx="32" />

			{/* Grid Pattern */}
			<pattern
				id="grid-ocbc"
				width="40"
				height="40"
				patternUnits="userSpaceOnUse"
			>
				<path
					d="M 40 0 L 0 0 0 40"
					fill="none"
					stroke="rgba(255,255,255,0.03)"
					strokeWidth="1"
				/>
			</pattern>
			<rect width="1200" height="675" fill="url(#grid-ocbc)" rx="32" />

			{/* Flow Lines */}
			<path
				d="M 280 338 L 480 338"
				stroke={techBlue}
				strokeWidth="2"
				strokeDasharray="4 4"
				opacity="0.5"
			/>
			{/* Path to Success */}
			<path
				d="M 620 338 C 700 338, 700 238, 820 238"
				stroke={successGreen}
				strokeWidth="2"
				strokeDasharray="4 4"
				opacity="0.5"
			/>
			{/* Path to Agent */}
			<path
				d="M 620 338 C 700 338, 700 438, 820 438"
				stroke={ocbcRed}
				strokeWidth="2"
				strokeDasharray="4 4"
				opacity="0.5"
			/>

			{/* Node 1: Voice Input */}
			<g transform="translate(200, 338)">
				<text
					x="0"
					y="-70"
					fill="#94a3b8"
					fontSize="16"
					fontFamily="monospace"
					textAnchor="middle"
				>
					Voice Input
				</text>
				<circle r="60" fill="#1e293b" stroke={techBlue} strokeWidth="2" />
				{/* Microphone Icon */}
				<path
					d="M -12 -20 h 24 a 12 12 0 0 1 12 12 v 16 a 12 12 0 0 1 -12 12 h -24 a 12 12 0 0 1 -12 -12 v -16 a 12 12 0 0 1 12 -12 z"
					fill="none"
					stroke={techBlue}
					strokeWidth="3"
				/>
				<path
					d="M -24 10 v 10 a 24 24 0 0 0 48 0 v -10"
					fill="none"
					stroke={techBlue}
					strokeWidth="3"
					strokeLinecap="round"
				/>
				<path
					d="M 0 44 v 10 M -15 54 h 30"
					fill="none"
					stroke={techBlue}
					strokeWidth="3"
					strokeLinecap="round"
				/>

				{/* Voice Waves */}
				{[1, 2, 3].map((i) => (
					<motion.circle
						key={i}
						r="60"
						fill="none"
						stroke={techBlue}
						strokeWidth="2"
						initial={{ opacity: 0, scale: 1 }}
						animate={{ opacity: [0, 0.5, 0], scale: [1, 1.4] }}
						transition={{
							duration: 2,
							repeat: Number.POSITIVE_INFINITY,
							delay: i * 0.6,
						}}
					/>
				))}
			</g>

			{/* Node 2: AI Processing (Local LLM) */}
			<g transform="translate(550, 338)">
				<text
					x="0"
					y="-70"
					fill="#94a3b8"
					fontSize="16"
					fontFamily="monospace"
					textAnchor="middle"
				>
					Local LLM
				</text>
				<motion.path
					d="M 0 -60 L 52 -30 L 52 30 L 0 60 L -52 30 L -52 -30 Z"
					fill="#1e293b"
					stroke={techBlue}
					strokeWidth="2"
					animate={{ rotate: 360 }}
					transition={{
						duration: 30,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				/>
				{/* Brain/Chip Circuitry */}
				<path
					d="M -20 -20 L 20 -20 L 20 20 L -20 20 Z"
					fill="none"
					stroke={techBlue}
					strokeWidth="2"
				/>
				<path
					d="M 0 -20 L 0 -40 M 0 20 L 0 40 M -20 0 L -40 0 M 20 0 L 40 0"
					stroke={techBlue}
					strokeWidth="2"
				/>
				<circle r="8" fill={techBlue} opacity="0.8">
					<animate
						attributeName="opacity"
						values="0.4;1;0.4"
						dur="2s"
						repeatCount="indefinite"
					/>
				</circle>
			</g>

			{/* Node 3a: Self-Service Success */}
			<g transform="translate(900, 238)">
				<text
					x="0"
					y="-50"
					fill="#94a3b8"
					fontSize="16"
					fontFamily="monospace"
					textAnchor="middle"
				>
					Self-Service
				</text>
				<rect
					x="-40"
					y="-30"
					width="80"
					height="60"
					rx="8"
					fill="#1e293b"
					stroke={successGreen}
					strokeWidth="2"
				/>
				<path
					d="M -15 0 L -5 10 L 15 -10"
					fill="none"
					stroke={successGreen}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>

			{/* Node 3b: Live Agent (WebRTC) */}
			<g transform="translate(900, 438)">
				<text
					x="0"
					y="-60"
					fill="#94a3b8"
					fontSize="16"
					fontFamily="monospace"
					textAnchor="middle"
				>
					Live Agent
				</text>
				<rect
					x="-60"
					y="-45"
					width="120"
					height="90"
					rx="8"
					fill="#1e293b"
					stroke={ocbcRed}
					strokeWidth="2"
				/>
				{/* Agent Avatar */}
				<circle cx="0" cy="-10" r="15" fill={ocbcRed} opacity="0.8" />
				<path
					d="M -20 25 q 20 -10 40 0"
					stroke={ocbcRed}
					strokeWidth="2"
					fill="none"
				/>
				{/* Connection Status */}
				<circle cx="45" cy="-30" r="4" fill={successGreen}>
					<animate
						attributeName="opacity"
						values="1;0.2;1"
						dur="1.5s"
						repeatCount="indefinite"
					/>
				</circle>
			</g>
			{/* Data Packets */}
			{/* Voice to AI */}
			<motion.circle
				r="4"
				fill={techBlue}
				initial={{ cx: 260, cy: 338, opacity: 0 }}
				animate={{ cx: 490, opacity: [0, 1, 1, 0] }}
				transition={{
					duration: 1.5,
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear",
				}}
			/>
			{/* AI to Success */}
			<motion.circle
				r="4"
				fill={successGreen}
				initial={{ offsetDistance: "0%", opacity: 0 }}
				animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
				transition={{
					duration: 1.5,
					repeat: Number.POSITIVE_INFINITY,
					delay: 0.75,
					ease: "linear",
				}}
				style={{ offsetPath: "path('M 620 338 C 700 338, 700 238, 820 238')" }}
			/>
			{/* AI to Agent */}
			<motion.circle
				r="4"
				fill={ocbcRed}
				initial={{ offsetDistance: "0%", opacity: 0 }}
				animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
				transition={{
					duration: 1.5,
					repeat: Number.POSITIVE_INFINITY,
					delay: 2.25, // Alternate with success packet
					ease: "linear",
				}}
				style={{ offsetPath: "path('M 620 338 C 700 338, 700 438, 820 438')" }}
			/>
		</motion.svg>
	);
}
