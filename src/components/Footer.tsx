import { motion } from "motion/react";
import { toast } from "sonner";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
	{
		href: "https://github.com/archerchua",
		label: "GitHub",
		icon: Github,
	},
	{
		href: "https://linkedin.com/in/archerchua",
		label: "LinkedIn",
		icon: Linkedin,
	},
	{
		href: "https://twitter.com/archerchua",
		label: "Twitter",
		icon: Twitter,
	},
	{
		href: "email",
		label: "Email",
		icon: Mail,
		email: "archer@example.com",
	},
];

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
					{/* Left: Name and tagline */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center md:text-left"
					>
						<h3 className="text-xl font-bold mb-2">Archer Chua</h3>
						<p className="text-sm text-muted-foreground">Software Engineer</p>
					</motion.div>

					{/* Center: Social links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="flex justify-center gap-4"
					>
						{socials.map((social) => {
							const Icon = social.icon;
							const isEmail = social.href === "email";

							if (isEmail) {
								return (
									<motion.button
										key={social.label}
										onClick={() => {
											navigator.clipboard.writeText(social.email!);
											toast.success("Email copied to clipboard!");
										}}
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
										className="p-2 rounded-full hover:bg-accent transition-colors"
										aria-label={social.label}
									>
										<Icon className="w-5 h-5" />
									</motion.button>
								);
							}

							return (
								<motion.a
									key={social.href}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
									className="p-2 rounded-full hover:bg-accent transition-colors"
									aria-label={social.label}
								>
									<Icon className="w-5 h-5" />
								</motion.a>
							);
						})}
					</motion.div>

					{/* Right: Copyright */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-center md:text-right"
					>
						<p className="text-sm text-muted-foreground">
							© {currentYear} Archer Chua. All rights reserved.
						</p>
						<p className="text-xs text-muted-foreground mt-1">
							Built with Astro, React, and Motion
						</p>
					</motion.div>
				</div>
			</div>
		</footer>
	);
}
