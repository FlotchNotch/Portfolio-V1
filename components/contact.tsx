"use client"

import { Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Contenu principal */}
          <div className="text-center lg:text-left">
            <div className="text-sm text-neutral-400 font-medium mb-4 tracking-wider">CONTACT</div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-display mb-6 leading-tight">
              Travaillons ensemble
            </h2>
            
            <p className="text-neutral-400 text-base sm:text-lg mb-10 leading-relaxed">
              Je recherche un poste en CDI ou CDD comme développeur front-end ou full stack. Une opportunité dans votre équipe ? Discutons-en !
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-neutral-300">
                <MapPin size={18} className="text-emerald-400" />
                <span>Rennes, France</span>
              </div>
            </div>
          
            {/* CTA principal */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="mailto:florianmarie.webdev@gmail.com"
                className="btn btn-primary group"
              >
                <Mail size={16} className="group-hover:rotate-12 transition-transform" />
                <span>Envoyer un message</span>
              </a>
            </div>
          </div>

          {/* Card avec liens sociaux */}
          <div className="order-1 lg:order-2">
            <div className="card text-center">
              <h3 className="text-xl font-semibold text-white mb-6">
                Retrouvez-moi aussi sur
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/florian-marie-bzh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-ghost group w-full flex items-center justify-center gap-3"
                >
                  <svg className="text-blue-400 group-hover:scale-110 transition-transform w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                  <span className="text-xs text-neutral-400 ml-auto">Professionnel</span>
                </a>
                
                <a 
                  href="https://github.com/FlotchNotch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-ghost group w-full flex items-center justify-center gap-3"
                >
                  <svg className="group-hover:scale-110 transition-transform w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                  <span className="text-xs text-neutral-400 ml-auto">Projets</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}