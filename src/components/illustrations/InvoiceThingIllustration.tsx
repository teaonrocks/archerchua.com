import { motion } from "motion/react";
import type { ComponentProps } from "react";

const invoiceLines = [
	{ y: 140, width: 120, height: 24, delay: 0.5 }, // Title/Logo
	{ y: 200, width: 200, height: 12, delay: 0.6 }, // From details
	{ y: 220, width: 160, height: 12, delay: 0.7 },
	{ y: 260, width: 180, height: 12, delay: 0.8 }, // To details
	{ y: 280, width: 140, height: 12, delay: 0.9 },
];

const lineItems = [
	{ y: 340, width: 280, price: 60, delay: 1.1 },
	{ y: 380, width: 240, price: 60, delay: 1.2 },
	{ y: 420, width: 300, price: 60, delay: 1.3 },
];

const floatingBadges = [
	{ label: "PDF", color: "#ef4444", x: 900, y: 200, delay: 1.8 },
	{ label: "Sent", color: "#3b82f6", x: 900, y: 320, delay: 2.2 },
	{ label: "Paid", color: "#22c55e", x: 900, y: 440, delay: 2.6 },
];

export type InvoiceThingIllustrationProps = ComponentProps<typeof motion.svg>;

export function InvoiceThingIllustration(props: InvoiceThingIllustrationProps) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width="1200"
			height="675"
			viewBox="0 0 1200 675"
			preserveAspectRatio="xMidYMid meet"
			role="img"
			aria-label="InvoiceThing illustration showing invoice generation and tracking"
			{...props}
		>
			<defs>
				<linearGradient id="invoiceBg" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#0f172a" />
					<stop offset="100%" stopColor="#1e293b" />
				</linearGradient>
				<filter id="paperShadow" x="-20%" y="-20%" width="140%" height="140%">
					<feDropShadow
						dx="0"
						dy="4"
						stdDeviation="12"
						floodColor="#000000"
						floodOpacity="0.3"
					/>
				</filter>
			</defs>

			{/* Background */}
			<rect width="1200" height="675" fill="url(#invoiceBg)" rx="32" />

			{/* Decorative Grid */}
			<g stroke="#334155" strokeWidth="1" strokeOpacity="0.3">
				{Array.from({ length: 12 }).map((_, i) => (
					<line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="675" />
				))}
				{Array.from({ length: 7 }).map((_, i) => (
					<line key={`h-${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
				))}
			</g>

			{/* Invoice Paper */}
			<motion.g
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<rect
					x="300"
					y="80"
					width="500"
					height="515"
					rx="8"
					fill="#f8fafc"
					filter="url(#paperShadow)"
				/>

				{/* Header Lines */}
				{invoiceLines.map((line, i) => (
					<motion.rect
						key={`header-${i}`}
						x="340"
						y={line.y}
						width={line.width}
						height={line.height}
						rx="4"
						fill="#cbd5e1"
						initial={{ scaleX: 0, opacity: 0 }}
						animate={{ scaleX: 1, opacity: 1 }}
						transition={{ delay: line.delay, duration: 0.5 }}
						style={{ originX: 0 }}
					/>
				))}

				{/* Line Items */}
				{lineItems.map((item, i) => (
					<g key={`item-${i}`}>
						<motion.rect
							x="340"
							y={item.y}
							width={item.width}
							height="16"
							rx="4"
							fill="#e2e8f0"
							initial={{ scaleX: 0, opacity: 0 }}
							animate={{ scaleX: 1, opacity: 1 }}
							transition={{ delay: item.delay, duration: 0.5 }}
							style={{ originX: 0 }}
						/>
						<motion.rect
							x="700"
							y={item.y}
							width={item.price}
							height="16"
							rx="4"
							fill="#cbd5e1"
							initial={{ scaleX: 0, opacity: 0 }}
							animate={{ scaleX: 1, opacity: 1 }}
							transition={{ delay: item.delay + 0.1, duration: 0.5 }}
							style={{ originX: 1 }}
						/>
					</g>
				))}

				{/* Total Line */}
				<motion.rect
					x="660"
					y="480"
					width="100"
					height="24"
					rx="4"
					fill="#94a3b8"
					initial={{ scaleX: 0, opacity: 0 }}
					animate={{ scaleX: 1, opacity: 1 }}
					transition={{ delay: 1.6, duration: 0.5 }}
					style={{ originX: 1 }}
				/>
			</motion.g>

			{/* Floating Status Badges */}
			{floatingBadges.map((badge, i) => (
				<motion.g
					key={badge.label}
					initial={{ opacity: 0, x: badge.x + 40 }}
					animate={{ opacity: 1, x: badge.x }}
					transition={{ delay: badge.delay, duration: 0.6, type: "spring" }}
				>
					<rect
						x="0"
						y={badge.y}
						width="140"
						height="60"
						rx="30"
						fill={badge.color}
						fillOpacity="0.2"
						stroke={badge.color}
						strokeWidth="2"
					/>
					<text
						x="70"
						y={badge.y + 38}
						textAnchor="middle"
						fill={badge.color}
						fontSize="24"
						fontWeight="bold"
						fontFamily="sans-serif"
					>
						{badge.label}
					</text>
					{/* Connecting Line to Invoice */}
					<motion.path
						d={`M ${badge.x} ${badge.y + 30} L 800 ${badge.y + 30}`}
						stroke={badge.color}
						strokeWidth="2"
						strokeDasharray="4 4"
						initial={{ pathLength: 0, opacity: 0 }}
						animate={{ pathLength: 1, opacity: 0.5 }}
						transition={{ delay: badge.delay + 0.3, duration: 0.5 }}
					/>
				</motion.g>
			))}

			{/* Success Checkmark Overlay */}
			<motion.g
				initial={{ scale: 0, opacity: 0, rotate: -45 }}
				animate={{ scale: 1, opacity: 1, rotate: 0 }}
				transition={{ delay: 3, type: "spring", bounce: 0.5 }}
			>
				<circle cx="550" cy="337.5" r="60" fill="#22c55e" />
				<path
					d="M530 337.5 L545 352.5 L575 322.5"
					stroke="white"
					strokeWidth="8"
					strokeLinecap="round"
					strokeLinejoin="round"
					fill="none"
				/>
			</motion.g>
		</motion.svg>
	);
}
