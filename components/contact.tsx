"use client"

import { Mail, MapPin, Github, Linkedin, Copy } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  
  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('florianmarie.webdev@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.log('Copie échouée')
    }
  }

  return (
    <section 
      id="contact" 
      className="section"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="container">
        <div className="max-w-6xl">
          
          <div className="text-xs text-neutral-400 font-medium mb-4 tracking-wider uppercase">CONTACT PROFESSIONNEL</div>
          
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-display mb-8 sm:mb-12 leading-tight">
            Travaillons ensemble
          </h2>
          
          <p className="text-neutral-400 mb-12 sm:mb-16 max-w-2xl text-sm sm:text-base text-body">
            Je recherche un poste en CDI ou CDD comme développeur front-end ou full stack à Rennes. 
            Une opportunité dans votre équipe ? Discutons-en !
          </p>

          {/* Cards de contact */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Card informations */}
            <article className="card p-8 lg:p-10" itemScope itemType="https://schema.org/ContactPoint">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 text-serif tracking-wide">
                Informations de contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-neutral-300">
                  <Mail size={18} className="text-emerald-400" aria-hidden="true" />
                  <a 
                    href="mailto:florianmarie.webdev@gmail.com" 
                    className="font-medium text-sm hover:text-emerald-400 transition-colors"
                    itemProp="email"
                  >
                    florianmarie.webdev@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-neutral-300" itemScope itemType="https://schema.org/Place">
                  <MapPin size={18} className="text-emerald-400" aria-hidden="true" />
                  <span className="text-sm" itemProp="address">Rennes, Bretagne, France</span>
                </div>
              </div>
            </article>

            {/* Card actions */}
            <article className="card p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 text-serif tracking-wide">
                Actions rapides
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:florianmarie.webdev@gmail.com?subject=Opportunité%20développeur%20full%20stack"
                  className="btn btn-primary group w-full"
                  aria-label="Envoyer un email à Florian Marie pour une opportunité de poste développeur"
                >
                  <Mail size={16} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
                  <span>Envoyer un email</span>
                </a>
                
                <button
                  onClick={handleEmailCopy}
                  className="btn btn-secondary group w-full"
                  aria-label="Copier l'adresse email de Florian Marie dans le presse-papier"
                >
                  <Copy size={16} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>{copied ? 'Email copié !' : 'Copier l\'email'}</span>
                </button>
              </div>
            </article>
          </div>

          {/* Card réseaux sociaux */}
          <article className="card p-8 lg:p-10" itemScope itemType="https://schema.org/Person">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-serif tracking-wide">
              Réseaux professionnels
            </h3>
            
            <p className="text-neutral-400 text-sm mb-6">
              Suivez mon parcours et mes projets de développement sur mes réseaux professionnels
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="https://www.linkedin.com/in/florian-marie-bzh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary group"
                aria-label="Profil LinkedIn de Florian Marie développeur full stack"
                itemProp="sameAs"
              >
                <Linkedin size={16} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="text-sm">LinkedIn</span>
              </a>
              

              <a 
                href="https://github.com/FlotchNotch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary group"
                aria-label="Profil GitHub de Florian Marie avec projets de développement"
                itemProp="sameAs"
              >
                <Github size={16} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}