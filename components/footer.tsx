"use client"

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  const navItems = [
    { label: "Accueil", id: "hero" },
    { label: "À propos", id: "about" },
    { label: "Compétences", id: "skills" },
    { label: "Projets", id: "projects" },
    { label: "Contact", id: "contact" }
  ]

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Contenu principal */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* À propos */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Florian Marie</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Développeur Fullstack Junior passionné par la création d'expériences web modernes et performantes.
              </p>
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Basé à Rennes, France</span>
              </div>
            </div>

            {/* Navigation rapide */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-neutral-400 hover:text-emerald-400 transition-colors text-sm py-1"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact & Réseaux */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:florian.marie92@gmail.com"
                  className="flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span>florian.marie92@gmail.com</span>
                </a>
              </div>
              
              {/* Liens sociaux */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/flotchnotch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Github size={16} className="text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                </a>
                
                <a
                  href="https://linkedin.com/in/flotchnotch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin size={16} className="text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                </a>
                
                <a
                  href="mailto:florian.marie92@gmail.com"
                  className="group w-10 h-10 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Mail size={16} className="text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

          {/* Bas de page */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-neutral-500 text-sm">
              © {currentYear} Florian Marie. Tous droits réservés.
            </div>
            
            {/* Bouton retour en haut */}
            <button
              onClick={scrollToTop}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full px-4 py-2 transition-all duration-300 flex items-center gap-2 text-sm text-neutral-400 hover:text-white"
            >
              <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
              <span className="hidden sm:inline">Retour en haut</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}