import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import { GraduationCap, Briefcase, Calendar, Award, ExternalLink } from "lucide-react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

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
			"Participated in OCBC Ignite Innovation Challenge 2025",
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

const certificateFiles = [
	"CertificateOfCompletion_Building Modern UIs with React Router v6.pdf",
	"CertificateOfCompletion_Google Analytics 4 GA4 Essential Training.pdf",
	"CertificateOfCompletion_HandsOn Introduction React.pdf",
	"CertificateOfCompletion_ISTQB Foundation Cert Prep.pdf",
	"CertificateOfCompletion_Illustrator 2023 Quick Start.pdf",
	"CertificateOfCompletion_JavaScript Web Form Programming.pdf",
	"CertificateOfCompletion_Learning Jira Cloud Edition 2020 (1).pdf",
	"CertificateOfCompletion_Learning Jira Cloud Edition 2020.pdf",
	"CertificateOfCompletion_Node.js Essential Training.pdf",
	"CertificateOfCompletion_Photoshop 2021 Quick Start.pdf",
	"CertificateOfCompletion_Programming Foundations APIs and Web Services 2019.pdf",
	"CertificateOfCompletion_Programming Foundations Software TestingQA.pdf",
	"CertificateOfCompletion_Software Testing Foundations Bug Writing and Management (1).pdf",
	"CertificateOfCompletion_Software Testing Foundations Bug Writing and Management.pdf",
	"CertificateOfCompletion_Software Testing Foundations Test Planning.pdf",
	"CertificateOfCompletion_Unit Testing and Test Driven Development in Python.pdf",
	"HackerRank-React-Basic.png",
	"HackerRank-React.png",
	"MXP_C39_JUN_2025_Cert.pdf",
	"Project Management Foundations Certificate NASBA.pdf",
	"Project Management Foundations Certificate PMI.pdf",
	"Project Management Foundations Certificate.pdf",
	"Software Testing Foundations Certificate.pdf",
];

const formatCertificateName = (filename: string) => {
	const withoutExt = filename.replace(/\.[^/.]+$/, "");
	return withoutExt
		.replace(/^CertificateOfCompletion_/, "")
		.replace(/_/g, " ")
		.replace(/\s+\(\d+\)$/, "")
		.trim();
};

const inferIssuer = (filename: string) => {
	if (filename.startsWith("HackerRank-")) return "HackerRank";
	if (filename.startsWith("MXP_")) return "Mission X Programme";
	if (
		filename.startsWith("CertificateOfCompletion_") ||
		filename.includes("Foundations Certificate")
	) {
		return "LinkedIn Learning";
	}
	return "Certification Provider";
};

const inferIssued = (filename: string) => {
	const year = filename.match(/(20\d{2})/)?.[1];
	return year ?? "See certificate";
};

const inferCategory = (certificateName: string) => {
	const name = certificateName.toLowerCase();

	if (name.includes("testing") || name.includes("istqb") || name.includes("qa")) {
		return "testing";
	}

	if (name.includes("project management") || name.includes("jira")) {
		return "project-management";
	}

	if (name.includes("illustrator") || name.includes("photoshop")) {
		return "design";
	}

	if (
		name.includes("react") ||
		name.includes("javascript") ||
		name.includes("node") ||
		name.includes("python") ||
		name.includes("api") ||
		name.includes("web services")
	) {
		return "development";
	}

	return "other";
};

const certifications = certificateFiles.map((file, index) => ({
	name: formatCertificateName(file),
	id: index + 1,
	issuer: inferIssuer(file),
	issued: inferIssued(file),
	file,
	format: file.toLowerCase().endsWith(".pdf") ? "PDF" : "Image",
	category: inferCategory(formatCertificateName(file)),
}));

const featuredCertifications = certifications.slice(0, 6);

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
			<div className="flex items-center justify-center md:justify-start gap-4 mb-4">
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
	const certificationTabs = useMemo(
		() => [
			{ value: "featured", label: "Featured", count: featuredCertifications.length },
			{ value: "all", label: "All", count: certifications.length },
			{
				value: "development",
				label: "Development",
				count: certifications.filter((cert) => cert.category === "development").length,
			},
			{
				value: "testing",
				label: "Testing",
				count: certifications.filter((cert) => cert.category === "testing").length,
			},
			{
				value: "design",
				label: "Design",
				count: certifications.filter((cert) => cert.category === "design").length,
			},
			{
				value: "project-management",
				label: "Project Management",
				count: certifications.filter((cert) => cert.category === "project-management")
					.length,
			},
			{
				value: "other",
				label: "Other",
				count: certifications.filter((cert) => cert.category === "other").length,
			},
		],
		[]
	);

	const getCertificationsForTab = (tab: string) => {
		if (tab === "featured") return featuredCertifications;
		if (tab === "all") return certifications;
		return certifications.filter((cert) => cert.category === tab);
	};

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
					className="flex items-center justify-center md:justify-start gap-3"
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
					className="flex items-center justify-center md:justify-start gap-3"
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

			{/* Certifications Section */}
			<div className="space-y-8">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="flex items-center justify-center md:justify-start gap-3"
				>
					<Award className="w-6 h-6 text-primary" />
					<h3 className="text-2xl md:text-3xl font-bold">Certifications</h3>
				</motion.div>

				<Tabs defaultValue="featured" className="space-y-6">
					<TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
						{certificationTabs.map((tab) => (
							<TabsTrigger
								key={tab.value}
								value={tab.value}
								className={cn(
									"group flex-none h-auto rounded-full px-4 py-2 text-sm font-medium transition-all border flex items-center gap-2",
									"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-md",
									"data-[state=inactive]:bg-background data-[state=inactive]:text-muted-foreground data-[state=inactive]:border-border data-[state=inactive]:hover:border-primary/50 data-[state=inactive]:hover:text-foreground data-[state=inactive]:hover:bg-accent"
								)}
							>
								{tab.label}
								<span className="text-xs px-1.5 py-0.5 rounded-full bg-muted group-data-[state=active]:bg-primary-foreground/20">
									{tab.count}
								</span>
							</TabsTrigger>
						))}
					</TabsList>

					{certificationTabs.map((tab) => {
						const filtered = getCertificationsForTab(tab.value);

						return (
							<TabsContent key={tab.value} value={tab.value}>
								<div className="grid gap-4 md:grid-cols-2">
									{filtered.map((cert, index) => (
										<motion.div
											key={`${tab.value}-${cert.id}`}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true, amount: 0.3 }}
											transition={{ duration: 0.5, delay: index * 0.08 }}
										>
											<Card className="h-full hover:shadow-lg transition-shadow duration-300">
												<CardHeader className="space-y-3">
													<CardTitle className="text-lg md:text-xl">{cert.name}</CardTitle>
													<CardDescription className="text-base font-medium text-foreground">
														{cert.issuer}
													</CardDescription>
													<div className="flex flex-wrap gap-2">
														<Badge variant="secondary">Issued {cert.issued}</Badge>
														<Badge variant="outline">{cert.format}</Badge>
													</div>
												</CardHeader>
												<CardContent className="space-y-4">
													<a
														href={`/certificates/${encodeURIComponent(cert.file)}`}
														target="_blank"
														rel="noopener noreferrer"
														className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
													>
														View credential
														<ExternalLink className="w-3.5 h-3.5" />
													</a>
												</CardContent>
											</Card>
										</motion.div>
									))}
								</div>
							</TabsContent>
						);
					})}
				</Tabs>
			</div>
		</div>
	);
}
