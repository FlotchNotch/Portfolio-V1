import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personnel Next.js",
      description: "Site portfolio moderne développé avec Next.js 15 et TypeScript. Design responsive avec animations fluides et interface utilisateur soignée. Optimisé SEO et performances.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      github: "https://github.com/FlotchNotch/portfolio-V2.git",
      demo: "https://florianmariewebdev.fr",
      status: "Terminé",
      type: "Développement web"
    },
    {
      title: "Miam'Share - Application Mobile",
      description: "Application mobile React Native développée pour l'examen final de La Capsule. Projet éducatif pour réduire le gaspillage alimentaire en permettant aux utilisateurs de partager leurs surplus. Full stack avec backend Node.js.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      demo: "#", 
      status: "Projet d'examen",
      type: "Application mobile"
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Terminé":
        return "text-green-400"
      case "En cours":
        return "text-emerald-400"
      case "Projet d'examen":
        return "text-blue-400"
      case "Planifié":
        return "text-neutral-400"
      default:
        return "text-neutral-400"
    }
  }

  return (
    <section 
      id="projects" 
      className="section"
      aria-labelledby="projects-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container">
        <div className="max-w-6xl">
          <div className="text-xs text-neutral-400 font-medium mb-4 tracking-wider uppercase">PROJETS DE DÉVELOPPEMENT</div>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-display mb-8 sm:mb-12 leading-tight">
            Réalisations récentes
          </h2>
          <p className="text-neutral-400 mb-12 sm:mb-16 max-w-2xl text-sm sm:text-base text-body">
            Projets de développement web réalisés pendant ma formation et en autonomie pour perfectionner mes compétences en React, Next.js et Node.js.
          </p>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 auto-rows-fr" role="list">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="card group flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
                itemScope
                itemType="https://schema.org/CreativeWork"
                role="listitem"
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <h3 
                    className="text-lg sm:text-xl font-semibold text-serif transition-colors duration-300 group-hover:text-emerald-400 flex-1 pr-4"
                    itemProp="name"
                  >
                    {project.title}
                  </h3>

                  <span
                    className={`text-xs font-medium tracking-wider uppercase flex-shrink-0 ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p 
                  className="text-neutral-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base text-body flex-1"
                  itemProp="description"
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8" itemProp="keywords">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary group w-full sm:w-auto"
                      aria-label={`Voir le code source du projet ${project.title} sur GitHub`}
                      itemProp="codeRepository"
                    >
                      <Github size={16} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
                      <span>Code source</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="btn btn-secondary opacity-50 cursor-not-allowed w-full sm:w-auto"
                      aria-label="Code source non disponible pour ce projet d'examen"
                    >
                      <Github size={16} aria-hidden="true" />
                      <span>Code privé</span>
                    </button>
                  )}

                  {project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary group w-full sm:w-auto"
                      aria-label={`Voir la démonstration en ligne du projet ${project.title}`}
                      itemProp="url"
                    >
                      <span>Voir la démo</span>
                      <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="btn btn-primary opacity-50 cursor-not-allowed w-full sm:w-auto"
                      aria-label="Démonstration non disponible pour ce projet d'examen"
                    >
                      <span>Démo indisponible</span>
                      <ExternalLink size={16} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/flotchnotch"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary group"
              aria-label="Voir tous les projets de Florian Marie sur GitHub"
            >
              <Github size={16} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
              <span>Tous mes projets sur GitHub</span>
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}