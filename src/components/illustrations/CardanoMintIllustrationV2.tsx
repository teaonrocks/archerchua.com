import { motion } from "motion/react";
import type { ComponentProps } from "react";

const cardanoBlue = "#0033AD";
const cardanoTeal = "#00D2B2"; // Approximate Cardano teal
const pythonBlue = "#3776AB";
const pythonYellow = "#FFD343";

const codeLines = [
	{ width: 70, color: "#60a5fa" },
	{ width: 90, color: "#94a3b8" },
	{ width: 80, color: "#60a5fa" },
	{ width: 60, color: "#94a3b8" },
	{ width: 85, color: "#60a5fa" },
];

export type CardanoMintIllustrationV2Props = ComponentProps<typeof motion.svg>;

export function CardanoMintIllustrationV2(
	props: CardanoMintIllustrationV2Props
) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width="1200"
			height="675"
			viewBox="0 0 1200 675"
			preserveAspectRatio="xMidYMid meet"
			role="img"
			aria-label="Cardano minting automation illustration"
			{...props}
		>
			<defs>
				<linearGradient id="cardanoV2Bg" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#0f172a" />
					<stop offset="100%" stopColor="#1e293b" />
				</linearGradient>
				<linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor={cardanoBlue} stopOpacity="0" />
					<stop offset="50%" stopColor={cardanoTeal} stopOpacity="0.5" />
					<stop offset="100%" stopColor={cardanoBlue} stopOpacity="0" />
				</linearGradient>
				<filter id="glowV2" x="-20%" y="-20%" width="140%" height="140%">
					<feGaussianBlur stdDeviation="4" result="blur" />
					<feComposite in="SourceGraphic" in2="blur" operator="over" />
				</filter>
				<clipPath id="screenClip">
					<circle cx="0" cy="0" r="60" />
				</clipPath>
			</defs>

			{/* Background */}
			<rect width="1200" height="675" fill="url(#cardanoV2Bg)" rx="32" />

			{/* Grid Pattern */}
			<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
				<path
					d="M 40 0 L 0 0 0 40"
					fill="none"
					stroke="rgba(255,255,255,0.03)"
					strokeWidth="1"
				/>
			</pattern>
			<rect width="1200" height="675" fill="url(#grid)" rx="32" />

			{/* Central Processing Unit (The Script) */}
			<g transform="translate(600, 338)">
				{/* Outer Ring */}
				<motion.circle
					r="80"
					fill="none"
					stroke={cardanoTeal}
					strokeWidth="2"
					strokeDasharray="10 10"
					animate={{ rotate: 360 }}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				/>
				{/* Code Lines inside */}
				<g clipPath="url(#screenClip)">
					<g transform="translate(-40, -30)">
						{codeLines.map((line, i) => (
							<motion.rect
								key={i}
								x="0"
								y={i * 14}
								width={line.width}
								height="6"
								rx="3"
								fill={line.color}
								initial={{ opacity: 0.3 }}
								animate={{ opacity: [0.3, 1, 0.3] }}
								transition={{
									duration: 2,
									repeat: Number.POSITIVE_INFINITY,
									delay: i * 0.2,
								}}
							/>
						))}
					</g>
				</g>
			</g>

			{/* Input Stream (Transactions) */}
			<g transform="translate(200, 338)">
				<text
					x="0"
					y="-60"
					fill="#94a3b8"
					fontSize="16"
					fontFamily="monospace"
					textAnchor="middle"
				>
					Incoming TXs
				</text>
				{[0, 1, 2].map((i) => (
					<motion.g
						key={i}
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 300, opacity: [0, 1, 1, 0] }}
						transition={{
							duration: 3,
							repeat: Number.POSITIVE_INFINITY,
							delay: i * 1,
							ease: "linear",
						}}
					>
						<rect
							x="-40"
							y="-20"
							width="80"
							height="40"
							rx="8"
							fill="#1e293b"
							stroke={cardanoBlue}
							strokeWidth="2"
						/>
						<text
							x="0"
							y="5"
							fill="#fff"
							fontSize="14"
							textAnchor="middle"
							fontFamily="monospace"
						>
							₳ 50
						</text>
					</motion.g>
				))}
			</g>

			{/* Output Stream (NFTs) */}
			<g transform="translate(1000, 338)">
				<text
					x="0"
					y="-60"
					fill="#94a3b8"
					fontSize="16"
					fontFamily="monospace"
					textAnchor="middle"
				>
					Minted NFTs
				</text>
				{[0, 1, 2].map((i) => (
					<motion.g
						key={i}
						initial={{ x: -300, opacity: 0 }}
						animate={{ x: 100, opacity: [0, 1, 1, 0] }}
						transition={{
							duration: 3,
							repeat: Number.POSITIVE_INFINITY,
							delay: i * 1 + 1.5, // Offset to match input arrival
							ease: "linear",
						}}
					>
						<rect
							x="-30"
							y="-40"
							width="60"
							height="80"
							rx="4"
							fill="#1e293b"
							stroke={cardanoTeal}
							strokeWidth="2"
						/>
						<circle cx="0" cy="-10" r="15" fill={cardanoTeal} opacity="0.5" />
						<rect
							x="-20"
							y="15"
							width="40"
							height="4"
							rx="2"
							fill="#fff"
							opacity="0.3"
						/>
						<rect
							x="-20"
							y="25"
							width="25"
							height="4"
							rx="2"
							fill="#fff"
							opacity="0.3"
						/>
					</motion.g>
				))}
			</g>

			{/* Connecting Lines */}
			<path
				d="M 300 338 L 520 338"
				stroke={cardanoBlue}
				strokeWidth="2"
				strokeDasharray="4 4"
				opacity="0.5"
			/>
			<path
				d="M 680 338 L 900 338"
				stroke={cardanoTeal}
				strokeWidth="2"
				strokeDasharray="4 4"
				opacity="0.5"
			/>
		</motion.svg>
	);
}
