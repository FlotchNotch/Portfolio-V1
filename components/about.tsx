export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="text-sm text-neutral-400 font-medium mb-4 tracking-wider">À PROPOS</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-display mb-8 sm:mb-12 leading-tight">
                De la pharmacie au code
              </h2>

              <div className="space-y-6 text-body">
                <p className="text-neutral-400 leading-relaxed text-base">
                  Après 13 ans en tant que préparateur en pharmacie, j'ai décidé de me reconvertir dans le développement web.
                  Cette transition m'a permis de découvrir ma passion pour la création d'applications.
                </p>

                <p className="text-neutral-400 leading-relaxed text-base">
                  Diplômé de La Capsule en juin 2025, je me spécialise dans l'écosystème React/Next.js.
                  J'apprécie particulièrement l'aspect problem-solving du développement et la satisfaction de voir ses idées prendre vie.
                </p>

                <p className="text-neutral-400 leading-relaxed text-base">
                  Mon expérience en pharmacie m'a appris la rigueur, l'attention aux détails et le travail en équipe -
                  des qualités que j'applique maintenant dans mes projets de développement.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="card p-8 lg:p-10">
                <h3 className="text-xl font-semibold mb-6 text-serif tracking-wide">Parcours</h3>

                <div className="space-y-6">
                  <div className="border-l-2 border-emerald-500/30 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-emerald-400 font-medium tracking-wider">RÉCENT</span>
                    </div>
                    <h4 className="font-semibold text-white mb-1 text-base">Développeur Fullstack Web et Mobile</h4>
                    <p className="text-sm text-neutral-400">Mars 2025 - Juin 2025 • La Capsule</p>
                  </div>

                  <div className="border-l-2 border-neutral-600 pl-4">
                    <span className="text-sm text-neutral-500 font-medium tracking-wider">2012-2025</span>
                    <h4 className="font-semibold text-neutral-300 mb-1 text-base">Préparateur en Pharmacie</h4>
                    <p className="text-sm text-neutral-400">13 ans d'expérience</p>
                  </div>
                </div>
              </div>

              <div className="card p-8 lg:p-10 mt-6">
                <h3 className="text-xl font-semibold mb-6 text-serif tracking-wide">Centres d'intérêt</h3>

                <div className="flex flex-wrap gap-3">
                  <span className="skill-tag secondary">Technologie</span>
                  <span className="skill-tag secondary">Gaming</span>
                  <span className="skill-tag secondary">Open Source</span>
                  <span className="skill-tag secondary">Veille Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
