"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const projects = [
  {
    name: "Troc'Food",
    description:
      "Application mobile React Native pour lutter contre le gaspillage alimentaire en connectant les utilisateurs.",
    category: "Mobile App",
    stack: ["React Native", "Node.js", "MongoDB"],
    url: "https://github.com/FlotchNotch/trocfood",
    demo: "https://example.com",
    gradient: "from-purple-500/20 via-purple-600/10 to-violet-500/10",
    cardGradient: "from-emerald-900/30 via-teal-800/20 to-cyan-900/20",
    hoverOverlay: "from-emerald-500/5 to-cyan-500/5",
  },
  {
    name: "Portfolio",
    description:
      "Site personnel moderne avec animations fluides et design responsive, développé avec les dernières technologies.",
    category: "Web App",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    url: "https://github.com/FlotchNotch/portfolio",
    demo: "https://florianmarie.dev",
    cardGradient: "from-purple-900/30 via-purple-800/20 to-violet-900/20",
    hoverOverlay: "from-purple-500/5 to-violet-500/5",
  },
];

export default function ProjectsSection() {
	const isMobile = useIsMobile()

	return (
		<section className="section-padding" id="work">
			<div className="section-container">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
					viewport={{ once: true, margin: "-100px" }}
					className="spacing-lg"
				>
					<h2
						className={`font-extralight text-white spacing-sm tracking-[-0.04em] leading-[0.9] ${
							isMobile ? "heading-lg" : "heading-xl"
						}`}
					>
						Work
					</h2>
					<div className="w-16 sm:w-20 lg:w-32 h-[1px] bg-gradient-to-r from-purple-500 to-transparent spacing-sm"></div>
					<p
						className={`text-white/60 font-light max-w-2xl ${
							isMobile ? "text-sm sm:text-base" : "text-lg lg:text-xl"
						}`}
					>
						Projets qui allient créativité, fonctionnalité et innovation.
					</p>
				</motion.div>

				<div
					className={`gap-4 sm:gap-6 lg:gap-8 ${
						isMobile ? "space-y-6" : "grid grid-cols-1 md:grid-cols-2"
					}`}
				>
					{projects.map((project, index) => (
						<motion.div
							key={project.name}
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: index * 0.1,
								ease: [0.25, 0.1, 0.25, 1],
							}}
							viewport={{ once: true, margin: "-50px" }}
							className="group relative"
						>
							{/* Glow effect avec gradient spécifique */}
							<div
								className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl sm:rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 blur-sm`}
							></div>

							{/* Card principale avec gradient spécifique */}
							<div
								className={`relative bg-gradient-to-br ${project.cardGradient} backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 group-hover:border-white/20 transition-all duration-700 overflow-hidden`}
							>
								{/* Overlay au hover avec gradient spécifique */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${project.hoverOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
								></div>

								<div className="relative z-10">
									{/* Category + Date */}
									<div className="flex items-start justify-between mb-6 sm:mb-8">
										<span
											className={`text-white/60 font-light tracking-wide uppercase ${
												isMobile ? "text-xs" : "text-sm"
											}`}
										>
											{project.category}
										</span>

										<p
											className={`text-white/60 font-light ${
												isMobile ? "text-xs" : "text-sm"
											}`}
										>
											2025
										</p>
									</div>

									{/* Grande lettre */}
									<div className="mb-6 sm:mb-8">
										<div
											className={`font-extralight text-white/20 select-none tracking-tight ${
												isMobile
													? "text-6xl sm:text-8xl"
													: "text-8xl lg:text-9xl"
											}`}
										>
											{project.name.charAt(0)}
										</div>
									</div>

									{/* Content */}
									<div className="space-y-4 sm:space-y-6">
										<h3
											className={`font-medium text-white tracking-tight group-hover:text-purple-300 transition-colors duration-500 ${
												isMobile
													? "heading-sm"
													: "text-2xl lg:text-3xl"
											}`}
										>
											{project.name}
										</h3>

										<p
											className={`text-white/70 font-light leading-relaxed ${
												isMobile
													? "text-sm sm:text-base"
													: "text-base lg:text-lg"
											}`}
										>
											{project.description}
										</p>

										{/* Stack */}
										<div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
											{project.stack.map((tech) => (
												<span
													key={tech}
													className={`font-light text-white/60 bg-white/10 border border-white/20 rounded-full px-3 py-1 ${
														isMobile ? "text-xs" : "text-sm"
													}`}
												>
													{tech}
												</span>
											))}
										</div>

										{/* Links */}
										<div className="flex items-center gap-4 pt-2 sm:pt-4">
											<motion.a
												href={project.url}
												target="_blank"
												rel="noopener noreferrer"
												className={`flex items-center gap-2 font-light text-white/70 hover:text-white transition-colors duration-300 ${
													isMobile ? "text-sm" : "text-sm"
												}`}
												whileHover={{ x: 2 }}
											>
												<Github size={isMobile ? 14 : 16} strokeWidth={1} />
												Code
											</motion.a>
											<motion.a
												href={project.demo}
												target="_blank"
												rel="noopener noreferrer"
												className={`flex items-center gap-2 font-light text-white/70 hover:text-purple-400 transition-colors duration-300 ${
													isMobile ? "text-sm" : "text-sm"
												}`}
												whileHover={{ x: 2 }}
											>
												<ExternalLink size={isMobile ? 14 : 16} strokeWidth={1} />
												Demo
											</motion.a>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
