export default function About() {
  return (
    <section 
      id="about" 
      className="section"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="text-xs text-neutral-400 font-medium mb-4 tracking-wider uppercase">À PROPOS</div>
              <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-display mb-8 sm:mb-12 leading-tight">
                De la pharmacie au développement web
              </h2>

              <div className="space-y-6 text-body">
                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                  Après 13 ans en tant que préparateur en pharmacie, j'ai décidé de me reconvertir dans le développement web.
                  Cette transition m'a permis de découvrir ma passion pour la création d'applications web.
                </p>

                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                  Diplômé de <span className="text-emerald-400 font-medium">La Capsule</span> en juin 2025, je me spécialise dans l'écosystème React/Next.js.
                  J'apprécie particulièrement l'aspect problem-solving du développement full stack et la satisfaction de voir ses idées prendre vie.
                </p>

                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                  Mon expérience en pharmacie m'a appris la rigueur, l'attention aux détails et le travail en équipe -
                  des qualités que j'applique maintenant dans mes projets de développement.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <article className="card p-8 lg:p-10" itemScope itemType="https://schema.org/EducationalOccupationalProgram">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-serif tracking-wide">Parcours professionnel</h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-emerald-500/30 pl-4" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true"></div>
                      <span className="text-xs text-emerald-400 font-medium tracking-wider uppercase">RÉCENT</span>
                    </div>
                    <h4 className="font-semibold text-white mb-1 text-base" itemProp="credentialCategory">
                      Formation Développeur Fullstack Web et Mobile
                    </h4>
                    <p className="text-xs text-neutral-400">
                      <time dateTime="2025-03">Mars 2025</time> - <time dateTime="2025-06">Juin 2025</time> • 
                      <span itemProp="recognizedBy"> La Capsule</span>
                    </p>
                  </div>

                  <div className="border-l-2 border-neutral-600 pl-4" itemScope itemType="https://schema.org/WorkExperience">
                    <span className="text-xs text-neutral-500 font-medium tracking-wider uppercase">
                      <time dateTime="2012">2012</time>-<time dateTime="2025">2025</time>
                    </span>
                    <h4 className="font-semibold text-neutral-300 mb-1 text-base" itemProp="jobTitle">
                      Préparateur en Pharmacie
                    </h4>
                    <p className="text-xs text-neutral-400" itemProp="description">13 ans d'expérience professionnelle</p>
                  </div>
                </div>
              </article>

              <article className="card p-8 lg:p-10 mt-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-serif tracking-wide">Centres d'intérêt</h3>

                <div className="flex flex-wrap gap-3" role="list">
                  <span className="skill-tag secondary" role="listitem">Technologie</span>
                  <span className="skill-tag secondary" role="listitem">Gaming</span>
                  <span className="skill-tag secondary" role="listitem">Open Source</span>
                  <span className="skill-tag secondary" role="listitem">Veille Technologique</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
