export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-4xl">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="text-sm text-neutral-400 font-medium mb-4 tracking-wider">À PROPOS</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-display mb-8 sm:mb-12 leading-tight">
                De la pharmacie au code
              </h2>

              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-body">
                <p className="text-neutral-300">
                  Après 13 années enrichissantes en tant que préparateur en pharmacie, j'ai décidé de suivre ma passion
                  pour la technologie et le design.
                </p>

                <p className="text-neutral-400">
                  En 2025, j'ai intégré le bootcamp intensif de La Capsule pour me former au développement web
                  full-stack. Cette reconversion m'a permis de découvrir ma véritable vocation : créer des interfaces
                  utilisateur intuitives et esthétiques.
                </p>

                <p className="text-neutral-400">
                  Aujourd'hui, je recherche ma première opportunité en tant que développeur junior pour continuer à
                  apprendre et contribuer à des projets innovants.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 mt-8 lg:mt-0">
              <div className="card floating">
                <div className="text-sm text-neutral-400 font-medium mb-6 tracking-wider">PARCOURS</div>
                <div className="space-y-6">
                  <div className="relative pl-6">
                    <div
                      className="absolute left-0 top-1 w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#49A078" }}
                    ></div>
                    <div className="text-sm text-neutral-400 font-medium">2025</div>
                    <div className="font-semibold text-base sm:text-lg text-serif">Formation La Capsule</div>
                    <div className="text-sm text-neutral-400">Développement Fullstack</div>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1 w-2 h-2 bg-neutral-600 rounded-full"></div>
                    <div className="text-sm text-neutral-400 font-medium">2012-2025</div>
                    <div className="font-semibold text-base sm:text-lg text-serif">Préparateur en Pharmacie</div>
                    <div className="text-sm text-neutral-400">13 ans d'expérience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
