"use client"

import { Mail, MapPin, Clock, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-6xl">
          
          <div className="text-left mb-16 lg:mb-20">
            <div className="text-sm text-neutral-400 font-medium mb-4 tracking-wider">CONTACT</div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-display mb-8 sm:mb-12 leading-tight">
              Travaillons ensemble
            </h2>
            
            <p className="text-neutral-400 mb-12 sm:mb-16 max-w-2xl text-base sm:text-lg text-body">
              Une opportunité d'emploi ? Un projet qui vous tient à cœur ? Parlons-en !
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            <div className="space-y-8">
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-serif tracking-wide">
                  Actuellement disponible
                </h3>
                <p className="text-neutral-400 leading-relaxed text-base text-body">
                  Je suis en recherche active d'opportunités en tant que développeur Full Stack junior. 
                  Ouvert pour un CDI ou un stage.
                </p>
              </div>

              <div className="space-y-6">
                <div className="card p-6 hover:border-emerald-500/30 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                      <Mail size={20} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400 mb-1 font-medium tracking-wider">EMAIL</p>
                      <a
                        href="mailto:florian.marie92@gmail.com"
                        className="text-white hover:text-emerald-400 transition-colors font-medium text-base"
                      >
                        florian.marie92@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-neutral-500/20 rounded-lg">
                      <MapPin size={20} className="text-neutral-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400 mb-1 font-medium tracking-wider">LOCALISATION</p>
                      <p className="text-white font-medium text-base">Rennes, France</p>
                    </div>
                  </div>
                </div>

                <div className="card p-6 bg-emerald-500/5 border-emerald-500/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/20 rounded-lg">
                      <Clock size={20} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-300/70 mb-1 font-medium tracking-wider">STATUT</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <p className="text-emerald-400 font-medium text-base">Ouvert aux opportunités</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold mb-4 text-serif tracking-wide">
                  Prêt à collaborer ?
                </h3>
                <p className="text-neutral-400 text-base text-body leading-relaxed mb-8">
                  N'hésitez pas à me contacter pour discuter de vos projets ou opportunités. 
                  Je serais ravi d'échanger avec vous !
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:florian.marie92@gmail.com"
                  className="btn btn-primary group w-full flex items-center justify-center gap-3"
                >
                  <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                  <span>Envoyer un message</span>
                </a>

                <div className="text-center space-y-3">
                  <p className="text-sm text-neutral-500">
                    💬 Réponse généralement sous 24h
                  </p>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-neutral-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span>Disponible</span>
                    </div>
                    <span>•</span>
                    <span>Basé à Rennes</span>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h4 className="text-base font-semibold mb-4 text-white">Autres moyens de me joindre</h4>
                
                <div className="space-y-3">
                  <a 
                    href="https://www.linkedin.com/in/florian-marie-0602a76a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-400 hover:text-emerald-400 transition-colors group"
                  >
                    <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://github.com/FlotchNotch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-400 hover:text-emerald-400 transition-colors group"
                  >
                    <Github size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}