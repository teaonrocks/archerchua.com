import { motion } from "motion/react";
import { toast } from "sonner";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const navItems = [
	{ href: "#about", label: "About" },
	{ href: "#projects", label: "Projects" },
];

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

export function AnimatedNav() {
	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="hidden md:flex items-center gap-6 ml-4">
			{navItems.map((item) => (
				<motion.a
					key={item.href}
					href={item.href}
					onClick={(e) => handleClick(e, item.href)}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="text-sm font-medium hover:text-primary transition-colors"
				>
					{item.label}
				</motion.a>
			))}

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="text-sm font-medium hover:text-primary transition-colors"
					>
						Socials
					</motion.button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-48">
					{socials.map((social) => {
						const Icon = social.icon;
						const isEmail = social.href === "email";

						if (isEmail) {
							return (
								<DropdownMenuItem
									key={social.label}
									onClick={() => {
										navigator.clipboard.writeText(social.email!);
										toast.success("Email copied to clipboard!");
									}}
									className="flex items-center gap-2 cursor-pointer"
								>
									<Icon className="w-4 h-4" />
									{social.label}
								</DropdownMenuItem>
							);
						}

						return (
							<DropdownMenuItem key={social.href} asChild>
								<a
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 cursor-pointer"
								>
									<Icon className="w-4 h-4" />
									{social.label}
								</a>
							</DropdownMenuItem>
						);
					})}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
