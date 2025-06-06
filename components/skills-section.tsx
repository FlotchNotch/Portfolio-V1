"use client"

import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const skills = [
    {
        category: "Frontend",
        technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind",
        ],
        description:
            "Création d'interfaces utilisateur modernes et responsives",
    },
    {
        category: "Backend",
        technologies: ["Node.js", "Express", "MongoDB", "API REST", "JWT"],
        description:
            "Développement d'architectures serveur robustes et sécurisées",
    },
    {
        category: "Mobile",
        technologies: ["React Native", "Expo", "iOS", "Android"],
        description: "Applications mobiles cross-platform performantes",
    },
    {
        category: "Tools",
        technologies: ["Git", "GitHub", "Figma", "VS Code", "Postman"],
        description:
            "Workflow de développement moderne et collaboratif",
    },
]

export default function SkillsSection() {
    const isMobile = useIsMobile()

    return (
        <section id="skills" className="section-padding">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="spacing-lg"
                >
                    <h2 className={`font-extralight text-white spacing-sm tracking-[-0.04em] leading-[0.9] ${
                        isMobile ? "heading-lg" : "heading-xl"
                    }`}>
                        Skills
                    </h2>
                    <div className="w-16 sm:w-20 lg:w-32 h-[1px] bg-gradient-to-r from-purple-500 to-transparent spacing-sm"></div>
                    <p className={`text-white/60 font-light max-w-2xl ${
                        isMobile 
                            ? "text-sm sm:text-base" 
                            : "text-lg lg:text-xl"
                    }`}>
                        Technologies et outils que je maîtrise pour créer des
                        expériences web exceptionnelles.
                    </p>
                </motion.div>

                <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group border-l border-white/10 pl-4 sm:pl-6 lg:pl-8 hover:border-purple-500/50 transition-colors duration-700"
                        >
                            <div className={`gap-4 sm:gap-6 lg:gap-8 items-start ${
                                isMobile 
                                    ? "space-y-4" 
                                    : "grid grid-cols-1 lg:grid-cols-3"
                            }`}>
                                <div className="space-y-3 sm:space-y-4">
                                    <h3 className={`font-light text-white tracking-[-0.02em] group-hover:text-purple-400 transition-colors duration-500 ${
                                        isMobile ? "heading-sm" : "heading-md"
                                    }`}>
                                        {skill.category}
                                    </h3>
                                    <p className={`text-white/60 font-light leading-relaxed ${
                                        isMobile 
                                            ? "text-sm sm:text-base" 
                                            : "text-base lg:text-lg"
                                    }`}>
                                        {skill.description}
                                    </p>
                                </div>

                                <div className={isMobile ? "" : "lg:col-span-2"}>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {skill.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: index * 0.1 + techIndex * 0.05,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                }}
                                                viewport={{ once: true }}
                                                className={`font-light text-white/70 bg-white/5 border border-white/10 rounded-full hover:border-purple-500/30 hover:text-white transition-all duration-300 cursor-default ${
                                                    isMobile 
                                                        ? "px-3 py-1 text-xs" 
                                                        : "px-4 py-2 text-sm"
                                                }`}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Formation Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mt-16 sm:mt-20 lg:mt-24"
                >
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-600/10 to-teal-500/10 rounded-2xl sm:rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 blur-sm"></div>
                        <div className="relative bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-teal-900/20 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 group-hover:border-white/20 transition-all duration-700 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-6 sm:mb-8">
                                    <span className={`text-white/60 font-light tracking-wide uppercase ${
                                        isMobile ? "text-xs" : "text-sm"
                                    }`}>
                                        FORMATION
                                    </span>
                                    
                                    <p className={`text-white/60 font-light ${
                                        isMobile ? "text-xs" : "text-sm"
                                    }`}>
                                        Mars — Juin 2025
                                    </p>
                                </div>

                                <div className="mb-6 sm:mb-8">
                                    <div className={`font-extralight text-white/20 select-none tracking-tight ${
                                        isMobile 
                                            ? "text-6xl sm:text-8xl" 
                                            : "text-8xl lg:text-9xl"
                                    }`}>
                                        L
                                    </div>
                                </div>

                                <div className="space-y-4 sm:space-y-6">
                                    <h3 className={`font-medium text-white tracking-tight group-hover:text-purple-300 transition-colors duration-500 ${
                                        isMobile ? "heading-sm" : "text-2xl lg:text-3xl"
                                    }`}>
                                        La Capsule
                                    </h3>
                                    
                                    <p className={`text-white/70 font-light leading-relaxed ${
                                        isMobile 
                                            ? "text-sm sm:text-base" 
                                            : "text-base lg:text-lg"
                                    }`}>
                                        Formation intensive de développement web fullstack JavaScript, 
                                        10 semaines d'apprentissage intensif des technologies modernes.
                                    </p>

                                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                                        {["JavaScript", "React", "Node.js"].map((tech) => (
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
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
