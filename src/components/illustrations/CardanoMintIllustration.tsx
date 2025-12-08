import { motion } from "motion/react";
import type { ComponentProps } from "react";

const ambientPaths = [
	"M80 340 Q 320 180 620 280 T 1120 280",
	"M100 460 Q 360 620 720 440 T 1080 440",
	"M60 560 Q 300 480 520 540 T 1080 540",
];

const logLines = [
	{ y: 150, width: 320, delay: 0.2 },
	{ y: 178, width: 280, delay: 0.28 },
	{ y: 206, width: 340, delay: 0.34 },
	{ y: 234, width: 260, delay: 0.4 },
	{ y: 262, width: 310, delay: 0.46 },
	{ y: 290, width: 290, delay: 0.52 },
];

const pipelineChips = [
	{ label: "Koios", color: "#38bdf8" },
	{ label: "cardano-cli", color: "#f97316" },
	{ label: "SQLite", color: "#a855f7" },
];

const mintedCards = [
	{ offset: -40, color: "#38bdf8", accent: "#0ea5e9", delay: 0.2 },
	{ offset: 0, color: "#c084fc", accent: "#a855f7", delay: 0.5 },
	{ offset: 40, color: "#f97316", accent: "#fb923c", delay: 0.8 },
];

const statBadges = [
	{ label: "Mints", value: "482", color: "#38bdf8" },
	{ label: "Pending", value: "33", color: "#facc15" },
	{ label: "Refunded", value: "6", color: "#f97316" },
];

const mintQueue = [
	{ address: "addr...k9z", amount: "58 ₳", status: "Minted", tone: "#34d399" },
	{
		address: "addr...u2v",
		amount: "116 ₳",
		status: "Pending",
		tone: "#facc15",
	},
	{ address: "addr...4pj", amount: "58 ₳", status: "Minted", tone: "#34d399" },
	{ address: "addr...x8m", amount: "58 ₳", status: "Refund", tone: "#fb7185" },
];

export type CardanoMintIllustrationProps = ComponentProps<typeof motion.svg>;

export function CardanoMintIllustration(props: CardanoMintIllustrationProps) {
	const circumference = 2 * Math.PI * 42;
	const consoleWidth = 396;
	const consoleInnerMargin = 42;
	const consoleInnerWidth = consoleWidth - consoleInnerMargin * 2;
	const queueRowPadding = 12;
	const statusChipWidth = 86;
	const statusChipX = consoleInnerWidth - queueRowPadding * 2 - statusChipWidth;
	const statusChipCenter = statusChipX + statusChipWidth / 2;

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
				<linearGradient id="cardanoBg" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#030712" />
					<stop offset="100%" stopColor="#0f1d3b" />
				</linearGradient>
				<linearGradient id="cardanoPanel" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#0b1529" />
					<stop offset="100%" stopColor="#111d34" />
				</linearGradient>
				<linearGradient id="txGlow" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="#38bdf8" />
					<stop offset="100%" stopColor="#a855f7" />
				</linearGradient>
				<filter id="cardGlow" x="-20%" y="-20%" width="140%" height="140%">
					<feDropShadow
						dx="0"
						dy="0"
						stdDeviation="8"
						floodColor="#38bdf8"
						floodOpacity="0.25"
					/>
				</filter>
			</defs>

			<rect width="1200" height="675" fill="url(#cardanoBg)" rx="32" />

			<g stroke="rgba(96,165,250,0.25)" strokeWidth="1.5" fill="none">
				{ambientPaths.map((path, idx) => (
					<motion.path
						key={path}
						d={path}
						strokeDasharray="18 22"
						initial={{ pathLength: 0, opacity: 0 }}
						animate={{ pathLength: 1, opacity: 0.4 }}
						transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
					/>
				))}
			</g>

			<g transform="translate(110 148)">
				<motion.g
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					<rect
						width="520"
						height="380"
						rx="28"
						fill="url(#cardanoPanel)"
						stroke="rgba(148,163,184,0.2)"
					/>
					<rect
						x="0"
						y="0"
						width="520"
						height="74"
						rx="28"
						fill="#0c1527"
						opacity="0.9"
					/>
					<motion.text
						x="32"
						y="46"
						fontFamily="'Inter', sans-serif"
						fontSize="20"
						fill="#e2e8f0"
						initial={{ opacity: 0, x: -12 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.35, duration: 0.5 }}
					>
						ADA Mint Watcher
					</motion.text>
					<motion.circle
						cx="470"
						cy="38"
						r="8"
						fill="#22d3ee"
						initial={{ r: 7, opacity: 0.8 }}
						animate={{ r: [7, 10, 7], opacity: [0.7, 1, 0.7] }}
						transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
					/>

					<g transform="translate(32 96)" className="mix-blend-screen">
						{pipelineChips.map((chip, idx) => (
							<motion.g
								key={chip.label}
								transform={`translate(${idx * 132} 0)`}
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
							>
								<rect
									width="120"
									height="32"
									rx="12"
									fill="rgba(15,23,42,0.8)"
									stroke="rgba(148,163,184,0.3)"
								/>
								<circle cx="18" cy="16" r="6" fill={chip.color} />
								<text
									x="34"
									y="20"
									fontFamily="'Inter', sans-serif"
									fontSize="12"
									fill="#e2e8f0"
								>
									{chip.label}
								</text>
							</motion.g>
						))}
					</g>

					{logLines.map((line) => (
						<motion.rect
							key={line.y}
							x="32"
							y={line.y}
							height="16"
							rx="6"
							fill="rgba(226,232,240,0.8)"
							initial={{ width: 0, opacity: 0 }}
							animate={{ width: line.width, opacity: 0.85 }}
							transition={{ duration: 0.6, delay: line.delay }}
						/>
					))}

					<motion.rect
						x="32"
						y="326"
						width="188"
						height="34"
						rx="12"
						fill="#0c2537"
						stroke="rgba(56,189,248,0.3)"
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.55 }}
					/>
					<motion.text
						x="48"
						y="348"
						fontFamily="'Inter', sans-serif"
						fontSize="13"
						fill="#bae6fd"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.65 }}
					>
						Whitelisted wallets · 148
					</motion.text>
				</motion.g>
			</g>

			<motion.path
				d="M610 288 C 720 288 770 233 840 233"
				stroke="rgba(59,130,246,0.35)"
				strokeWidth="4"
				strokeDasharray="14 18"
				fill="none"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={{ pathLength: 1, opacity: 0.6 }}
				transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
			/>

			<g transform="translate(700 148)">
				<motion.g
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<rect
						width={consoleWidth}
						height="400"
						rx="32"
						fill="rgba(8,20,40,0.9)"
						stroke="rgba(59,130,246,0.25)"
					/>
					<motion.text
						x={consoleWidth / 2}
						y="54"
						textAnchor="middle"
						fontFamily="'Inter', sans-serif"
						fontSize="18"
						fill="#e2e8f0"
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5 }}
					>
						Policy 77d0… Minting
					</motion.text>
					<path
						d={`M${consoleInnerMargin} 82 H${
							consoleWidth - consoleInnerMargin
						}`}
						stroke="rgba(59,130,246,0.4)"
						strokeDasharray="6 8"
					/>

					<g transform={`translate(${consoleInnerMargin} 108)`}>
						{statBadges.map((badge, idx) => (
							<g key={badge.label} transform={`translate(${idx * 104} 0)`}>
								<rect
									width="100"
									height="46"
									rx="14"
									fill="rgba(13,30,52,0.9)"
									stroke="rgba(148,163,184,0.2)"
								/>
								<text
									x="16"
									y="20"
									fontFamily="'Inter', sans-serif"
									fontSize="11"
									fill="#94a3b8"
								>
									{badge.label}
								</text>
								<text
									x="16"
									y="36"
									fontFamily="'Inter', sans-serif"
									fontSize="18"
									fill={badge.color}
									fontWeight="600"
								>
									{badge.value}
								</text>
							</g>
						))}
					</g>

					<g transform={`translate(${consoleInnerMargin} 176)`}>
						<rect
							width={consoleInnerWidth}
							height="192"
							rx="22"
							fill="rgba(6,15,32,0.85)"
							stroke="rgba(59,130,246,0.15)"
						/>
						{mintQueue.map((row, idx) => (
							<g
								key={row.address}
								transform={`translate(${queueRowPadding} ${34 + idx * 44})`}
							>
								<text
									x="0"
									y="0"
									fontFamily="'Inter', sans-serif"
									fontSize="12"
									fill="#e2e8f0"
								>
									{row.address}
								</text>
								<text
									x="0"
									y="16"
									fontFamily="'Inter', sans-serif"
									fontSize="12"
									fill="#94a3b8"
								>
									{row.amount}
								</text>
								<rect
									x={statusChipX}
									y="-12"
									width={statusChipWidth}
									height="28"
									rx="12"
									fill="rgba(15,23,42,0.95)"
									stroke={row.tone}
									strokeWidth="1.5"
								/>
								<text
									x={statusChipCenter}
									y="6"
									fontFamily="'Inter', sans-serif"
									fontSize="11"
									fill={row.tone}
									textAnchor="middle"
								>
									{row.status}
								</text>
							</g>
						))}
					</g>
				</motion.g>
			</g>
		</motion.svg>
	);
}
