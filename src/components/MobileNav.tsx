import * as React from "react";
import { Menu, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
	{ href: "#about", label: "About" },
	{ href: "#projects", label: "Projects" },
];

const socials = [
	{
		href: "https://github.com/teaonrocks",
		label: "GitHub",
		icon: Github,
	},
	{
		href: "https://www.linkedin.com/in/archer-chua-4007401a2/",
		label: "LinkedIn",
		icon: Linkedin,
	},
	{
		href: "https://twitter.com/teaonrocks",
		label: "Twitter",
		icon: Twitter,
	},
	{
		href: "email",
		label: "Email",
		icon: Mail,
		email: "arxherchua@gmail.com",
	},
];

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	const handleNavClick = (href: string) => {
		setOpen(false);
		// Smooth scroll to section
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-[300px] sm:w-[400px]">
				<SheetHeader>
					<SheetTitle>Navigation</SheetTitle>
				</SheetHeader>
				<nav className="flex flex-col gap-4 p-4">
					{navItems.map((item) => (
						<motion.a
							key={item.href}
							href={item.href}
							onClick={(e) => {
								e.preventDefault();
								handleNavClick(item.href);
							}}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="text-lg font-medium hover:text-primary transition-colors py-2"
						>
							{item.label}
						</motion.a>
					))}

					{/* Socials Section */}
					<div className="border-t pt-4 mt-2">
						<p className="text-sm font-semibold text-muted-foreground mb-3">
							Socials
						</p>
						<div className="flex flex-col gap-3">
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
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors py-2 text-left"
										>
											<Icon className="w-5 h-5" />
											{social.label}
										</motion.button>
									);
								}

								return (
									<motion.a
										key={social.href}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors py-2"
									>
										<Icon className="w-5 h-5" />
										{social.label}
									</motion.a>
								);
							})}
						</div>
					</div>
				</nav>
			</SheetContent>
		</Sheet>
	);
}
