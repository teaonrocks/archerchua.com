import { motion } from "motion/react";
import type { ComponentProps } from "react";

const backgroundPaths = [
	"M100 300 Q 300 150 500 260 T 900 260",
	"M150 420 Q 350 540 520 430 T 1050 430",
	"M80 520 Q 260 360 430 520 T 1120 520",
];

const voiceBars = [28, 40, 18, 34, 20, 42, 16, 32, 24, 36, 18, 30];
const VOICE_BAR_MAX = 46;
const callControls = [
	{ offset: 0, color: "#22d3ee" },
	{ offset: 56, color: "#f97316" },
	{ offset: 112, color: "#f472b6" },
	{ offset: 168, color: "#ef4444" },
];

export type OcbcVtmIllustrationProps = ComponentProps<typeof motion.svg>;

export function OcbcVtmIllustration(props: OcbcVtmIllustrationProps) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width="1200"
			height="675"
			viewBox="0 0 1200 675"
			preserveAspectRatio="xMidYMid meet"
			role="img"
			aria-label="OCBC Smart Banking kiosk illustration"
			{...props}
		>
			<defs>
				<linearGradient id="ocbcBg" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#0f172a" />
					<stop offset="100%" stopColor="#1d4ed8" />
				</linearGradient>
				<linearGradient id="ocbcCard" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
					<stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
				</linearGradient>
				<filter id="ocbcGlow" x="-20%" y="-20%" width="140%" height="140%">
					<feDropShadow
						dx="0"
						dy="0"
						stdDeviation="6"
						floodColor="#38bdf8"
						floodOpacity="0.25"
					/>
				</filter>
				<clipPath id="liveAgentVideoClip">
					<rect x="32" y="54" width="296" height="178" rx="24" />
				</clipPath>
			</defs>
			<rect width="1200" height="675" fill="url(#ocbcBg)" rx="32" />

			<g stroke="#38bdf8" strokeWidth="2" fill="none">
				{backgroundPaths.map((d, index) => (
					<motion.path
						key={d}
						d={d}
						opacity={0.3}
						strokeDasharray="18 24"
						initial={{ pathLength: 0, opacity: 0 }}
						animate={{ pathLength: 1, opacity: 0.3 }}
						transition={{ duration: 1.2, delay: 0.15 * index, ease: "easeOut" }}
					/>
				))}
			</g>

			<g transform="translate(140 158)">
				<motion.g
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					<rect
						width="480"
						height="360"
						rx="32"
						fill="url(#ocbcCard)"
						stroke="rgba(255,255,255,0.2)"
					/>
					<motion.rect
						x="40"
						y="60"
						width="400"
						height="60"
						rx="12"
						fill="rgba(15,23,42,0.85)"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.35 }}
					/>
					<g transform="translate(80 72)">
						{voiceBars.map((height, index) => (
							<motion.rect
								key={index}
								x={index * 16}
								y={VOICE_BAR_MAX - height}
								width={8}
								height={height}
								rx={4}
								fill="#38bdf8"
								style={{ originY: 1 }}
								initial={{ scaleY: 0.4, opacity: 0 }}
								animate={{ scaleY: [0.4, 1, 0.5], opacity: 1 }}
								transition={{
									duration: 1.2 + index * 0.03,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeInOut",
									delay: 0.4 + index * 0.02,
								}}
							/>
						))}
					</g>
					<motion.rect
						x="40"
						y="150"
						width="280"
						height="40"
						rx="10"
						fill="rgba(59,130,246,0.6)"
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.45 }}
					/>
					<motion.rect
						x="40"
						y="210"
						width="360"
						height="24"
						rx="6"
						fill="rgba(148,163,184,0.8)"
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					/>
					<motion.rect
						x="40"
						y="250"
						width="360"
						height="24"
						rx="6"
						fill="rgba(148,163,184,0.5)"
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.55 }}
					/>
					<motion.rect
						x="40"
						y="290"
						width="200"
						height="24"
						rx="6"
						fill="rgba(203,213,225,0.5)"
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					/>
					<motion.circle
						cx="400"
						cy="90"
						r="18"
						fill="#f97316"
						opacity="0.8"
						animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
						transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
					/>
					<motion.text
						x="40"
						y="40"
						fontFamily="'Inter', sans-serif"
						fontSize="20"
						fill="#e2e8f0"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.25 }}
					>
						OCBC • Kiosk Flow
					</motion.text>
				</motion.g>
			</g>

			<g transform="translate(660 176)">
				<motion.g
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
				>
					<rect
						width="360"
						height="324"
						rx="24"
						fill="rgba(2,6,23,0.65)"
						stroke="rgba(255,255,255,0.12)"
						filter="url(#ocbcGlow)"
					/>
					<motion.text
						x="36"
						y="32"
						fontFamily="'Inter', sans-serif"
						fontSize="16"
						fill="#cbd5f5"
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.45 }}
					>
						Live agent connected
					</motion.text>
					<motion.circle
						cx="324"
						cy="32"
						r="6"
						fill="#22d3ee"
						initial={{ scale: 0.4, opacity: 0 }}
						animate={{ scale: [0.6, 1, 0.6], opacity: [0.4, 1, 0.4] }}
						transition={{
							duration: 2.4,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 0.6,
						}}
					/>
					<motion.rect
						x="32"
						y="54"
						width="296"
						height="178"
						rx="24"
						fill="rgba(13,25,51,0.95)"
						stroke="rgba(56,189,248,0.2)"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					/>
					<g clipPath="url(#liveAgentVideoClip)">
						<motion.circle
							cx="180"
							cy="140"
							r="38"
							fill="#d6d7db"
							opacity="0.98"
							animate={{ scale: [1, 1.008, 1] }}
							transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
						/>

						<circle cx="180" cy="240" r="60" fill="#c2c5cc" />
					</g>
					<rect
						x="52"
						y="252"
						width="256"
						height="48"
						rx="18"
						fill="rgba(4,9,20,0.95)"
						stroke="rgba(255,255,255,0.08)"
					/>
					{callControls.map((control, idx) => (
						<circle
							key={`control-${idx}`}
							cx={96 + control.offset}
							cy={276}
							r={14}
							fill={control.color}
						/>
					))}
				</motion.g>
			</g>
		</motion.svg>
	);
}
