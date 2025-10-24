import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

// Sample data - replace with your actual education and experience
const education = [
	{
		id: 1,
		degree: "Diploma in Digital Design & Development",
		institution: "Republic Polytechnic",
		location: "Singapore, Singapore",
		period: "Apr 2024 - Present",
		description:
			"A program that equips students with design thinking and technical skills, offering specializations in User Experience, Games & Gamification, or Visual Communication.",
		achievements: [
			"Director's Roll of Honour AY2024 Semester 1 & 2",
			"Director's Roll of Honour AY2025 Semester 1",
			"Participated in SCDF-Dell Hackathon 'Lifesavers' Innovation Challenge 2025",
			"Participated in DSTA Brainhack CODE_EXP 2025",
			"Participated in Mission X by Youth Corps Singapore",
			"Participated in University of Glasgow Hackathon 2025",
		],
	},
	{
		id: 2,
		degree: "Higher Nitec in IT applications Development",
		institution: "Institute of Technical Education",
		location: "Singapore, Singapore",
		period: "Apr 2022 - May 2024",
		description:
			"A program that trains students to design, develop, and support e-business and smart device applications.",
		achievements: [
			"President cum Captain of ITE Central Pool",
			"Represented ITE Central Pool at multiple inter-school competitions",
		],
	},
	{
		id: 3,
		degree: "Nitec in Infocomm Technology",
		institution: "Institute of Technical Education",
		location: "Singapore, Singapore",
		period: "Jan 2020 - Feb 2022",
		description:
			"A program that trains students to deploy, maintain, and troubleshoot computing devices, networks, servers, and applications in hybrid infrastructure environments.",
		achievements: [
			"Joint ITE-Oracle Certificate in Essentials of Java Programming",
			"Member of ITE Central Pool",
		],
	},
];

const experience = [
	{
		id: 1,
		title: "Digital Content Developer Intern",
		company: "Singrow",
		location: "Singapore, Singapore",
		period: "Apr 2023 - Aug 2023",
		description:
			"Developed and maintained the company website and internal tools to enhance digital presence and operational efficiency.",
		technologies: ["Next.js", "React", "ERPNext", "Wix"],
		achievements: [
			"Designed and Developed Company Website",
			"Kept Website Updated with Latest Content",
			"Developed Internal Tools using ERPNext",
		],
	},
	{
		id: 2,
		title: "Desktop Support Engineer Intern",
		company: "NCS Group",
		location: "Singapore, Singapore",
		period: "Jan 2021 - Jul 2021",
		description: "Provided IT support and maintenance for corporate clients.",
		technologies: ["MS Excel"],
		achievements: [
			"Handle in and out processing of IT equipment",
			"Troubleshoot hardware and software issues",
			"Performed tech refresh for hundreds of company laptops",
		],
	},
];

interface TimelineItemProps {
	item: any;
	index: number;
	type: "education" | "experience";
}

function TimelineItem({ item, index, type }: TimelineItemProps) {
	const isEducation = type === "education";
	const Icon = isEducation ? GraduationCap : Briefcase;

	return (
		<motion.div
			initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="relative"
		>
			<div className="flex items-center gap-4 mb-4">
				{/* Timeline dot */}
				<div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg">
					<Icon className="w-6 h-6" />
				</div>

				{/* Mobile icon */}
				<div className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
					<Icon className="w-5 h-5" />
				</div>

				{/* Period badge */}
				<Badge variant="secondary" className="flex items-center gap-1">
					<Calendar className="w-3 h-3" />
					{item.period}
				</Badge>
			</div>

			<Card className="ml-0 md:ml-16 hover:shadow-lg transition-shadow duration-300">
				<CardHeader>
					<CardTitle className="text-xl md:text-2xl">
						{isEducation ? item.degree : item.title}
					</CardTitle>
					<CardDescription className="text-base flex flex-col gap-1">
						<span className="font-semibold text-foreground">
							{isEducation ? item.institution : item.company}
						</span>
						<span className="text-sm">{item.location}</span>
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-4">
					<p className="text-muted-foreground">{item.description}</p>

					{/* Technologies (for experience) */}
					{!isEducation && item.technologies && (
						<div className="flex flex-wrap gap-2">
							{item.technologies.map((tech: string) => (
								<Badge key={tech} variant="outline" className="text-xs">
									{tech}
								</Badge>
							))}
						</div>
					)}

					{/* Achievements */}
					{item.achievements && item.achievements.length > 0 && (
						<div className="space-y-2">
							<p className="text-sm font-semibold">
								{isEducation ? "Achievements:" : "Key Contributions:"}
							</p>
							<ul className="space-y-1">
								{item.achievements.map((achievement: string, idx: number) => (
									<li
										key={idx}
										className="text-sm text-muted-foreground flex items-start gap-2"
									>
										<span className="text-primary mt-1">•</span>
										<span>{achievement}</span>
									</li>
								))}
							</ul>
						</div>
					)}
				</CardContent>
			</Card>
		</motion.div>
	);
}

export function Timeline() {
	return (
		<div className="max-w-5xl mx-auto space-y-16">
			{/* Section Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-center space-y-4"
			>
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
					Education & Experience
				</h2>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
					My journey through education and professional development
				</p>
			</motion.div>

			{/* Experience Section */}
			<div className="space-y-8">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="flex items-center gap-3"
				>
					<Briefcase className="w-6 h-6 text-primary" />
					<h3 className="text-2xl md:text-3xl font-bold">
						Professional Experience
					</h3>
				</motion.div>

				<div className="relative space-y-8">
					{/* Vertical line */}
					<div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

					{experience.map((item, index) => (
						<TimelineItem
							key={item.id}
							item={item}
							index={index}
							type="experience"
						/>
					))}
				</div>
			</div>

			{/* Education Section */}
			<div className="space-y-8">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="flex items-center gap-3"
				>
					<GraduationCap className="w-6 h-6 text-primary" />
					<h3 className="text-2xl md:text-3xl font-bold">Education</h3>
				</motion.div>

				<div className="relative space-y-8">
					{/* Vertical line */}
					<div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

					{education.map((item, index) => (
						<TimelineItem
							key={item.id}
							item={item}
							index={index}
							type="education"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
