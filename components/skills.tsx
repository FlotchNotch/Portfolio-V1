import { Briefcase, ArrowRight } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Développement Frontend",
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "HTML/CSS" },
      ],
    },
    {
      title: "Développement Backend", 
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
    <section 
      id="skills" 
      className="section"
      aria-labelledby="skills-heading"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      <div className="container">
        <div className="max-w-6xl">
          <div className="text-xs text-neutral-400 font-medium mb-4 tracking-wider uppercase">COMPÉTENCES TECHNIQUES</div>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-display mb-8 sm:mb-12 leading-tight">
            Technologies maîtrisées
          </h2>
          <p className="text-neutral-400 mb-12 sm:mb-16 max-w-2xl text-sm sm:text-base text-body">
            Stack technique full stack acquise pendant ma formation <span className="text-emerald-400 font-medium">La Capsule</span> et mes projets personnels de développement web.
          </p>

          <div className="skills-grid" role="list">
            {skillCategories.map((category, index) => (
              <article 
                key={category.title} 
                className="card p-8 lg:p-10" 
                style={{ animationDelay: `${index * 0.1}s` }}
                itemScope 
                itemType="https://schema.org/ItemList"
                role="listitem"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-8 text-serif tracking-wide" itemProp="name">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3" role="list" itemProp="itemListElement">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill.name} 
                      className="skill-tag"
                      itemScope
                      itemType="https://schema.org/Thing"
                      itemProp="name"
                      role="listitem"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <article className="mt-12 card p-8 lg:p-10" itemScope itemType="https://schema.org/ItemList">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-serif tracking-wide" itemProp="name">
              Technologies en apprentissage
            </h3>
            <div className="flex flex-wrap gap-3" role="list" itemProp="itemListElement">
              <span className="skill-tag secondary" role="listitem">Angular</span>
              <span className="skill-tag secondary" role="listitem">PHP</span>
              <span className="skill-tag secondary" role="listitem">Docker</span>
              <span className="skill-tag secondary" role="listitem">PostgreSQL</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
