import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personnel",
      description:
        "Site portfolio moderne développé avec Next.js 15 et TypeScript. Design responsive avec animations fluides et interface utilisateur soignée.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/votre-username/portfolio",
      demo: "https://votre-portfolio.vercel.app",
      status: "En cours",
    },
    {
      title: "Troc'Food",
      description:
        "Application mobile React Native pour réduire le gaspillage alimentaire en permettant aux utilisateurs de partager leurs surplus.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      demo: "#",
      status: "Terminé",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Terminé":
        return "text-green-400"
      case "En cours":
        return "text-emerald-400"
      case "Planifié":
        return "text-neutral-400"
      default:
        return "text-neutral-400"
    }
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="max-w-5xl">
          <div className="text-sm text-neutral-400 font-medium mb-4 tracking-wider">PROJETS</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-display mb-8 sm:mb-12 leading-tight">
            Réalisations récentes
          </h2>
          <p className="text-neutral-400 mb-12 sm:mb-16 max-w-2xl text-base sm:text-lg text-body">
            Projets développés pendant ma formation et en autonomie pour perfectionner mes compétences.
          </p>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 auto-rows-fr">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="card group flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <h3 className="text-xl font-semibold text-serif transition-colors duration-300 group-hover:text-emerald-400 flex-1 pr-4">
                    {project.title}
                  </h3>
                  <span
                    className={`text-sm font-medium tracking-wider flex-shrink-0 ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-neutral-400 leading-relaxed mb-6 sm:mb-8 text-base text-body flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost group"
                  >
                    <Github size={18} className="group-hover:rotate-12 transition-transform" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary group"
                  >
                    <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/flotchnotch"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary group"
            >
              <Github size={18} className="group-hover:rotate-12 transition-transform" />
              <span>Voir tous mes projets sur GitHub</span>
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}