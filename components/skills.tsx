export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React"},
        { name: "Next.js"},
        { name: "JavaScript"},
        { name: "TypeScript"},
        { name: "Tailwind CSS"},
        { name: "HTML/CSS"},
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "REST APIs" },
        { name: "Authentication" },
      ],
    },
    {
      title: "Outils & Mobile",
      skills: [
        { name: "React Native" },
        { name: "Git" },
        { name: "VS Code" },
        { name: "Figma" },
        { name: "Trello" },
        { name: "Miro" },
        { name: "Thunderclient" },
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="max-w-6xl">
          <div className="text-sm text-neutral-400 font-medium mb-4 tracking-wider">COMPÉTENCES</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-display mb-8 sm:mb-12 leading-tight">Technologies maîtrisées</h2>
          <p className="text-neutral-400 mb-12 sm:mb-16 max-w-2xl text-base sm:text-lg text-body">
            Stack technique acquise pendant ma formation et mes projets personnels.
          </p>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="card p-8 lg:p-10" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold mb-8 text-serif tracking-wide">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="skill-tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-8 lg:p-10">
            <h3 className="text-xl font-semibold mb-6 text-serif tracking-wide">En apprentissage</h3>
            <div className="flex flex-wrap gap-3">
              <span className="skill-tag secondary">Angular</span>
              <span className="skill-tag secondary">PHP</span>
              <span className="skill-tag secondary">Docker</span>
              <span className="skill-tag secondary">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
