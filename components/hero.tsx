"use client"

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* Contenu texte - Colonne gauche */}
          <div className="max-w-3xl">
            
            {/* Badge */}
            <div className="animate-fade-in mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full text-sm text-neutral-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Développeur Fullstack Junior
              </div>
            </div>

            {/* Titre principal */}
            <div className="animate-slide-up mb-8" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-4">
                <span className="block text-display">Florian</span>
                <span className="block text-display bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  Marie
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="animate-slide-up mb-12" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed max-w-2xl">
                Passionné par le développement web moderne, je crée des expériences digitales 
                <span className="text-emerald-400 font-medium"> élégantes et performantes</span>.
              </p>
            </div>

            {/* Boutons d'action - Harmonisés avec les autres CTA */}
            <div className="animate-slide-up flex flex-col sm:flex-row gap-3 mb-16" style={{ animationDelay: "0.3s" }}>
              <button 
                onClick={scrollToProjects} 
                className="group relative overflow-hidden bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 text-sm sm:text-base"
              >
                <span>Découvrir mes projets</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <a 
                href="/cv.pdf" 
                className="group bg-white/5 hover:bg-white/10 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 backdrop-blur-sm text-sm sm:text-base"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download size={18} />
                <span>Télécharger mon CV</span>
              </a>
            </div>

            {/* Liens sociaux et localisation */}
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                
                {/* Liens sociaux - Harmonisés */}
                <div className="flex gap-3">
                  <a
                    href="https://github.com/flotchnotch"
                    className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/flotchnotch"
                    className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} className="text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                  </a>
                  
                  <a
                    href="mailto:florian.marie92@gmail.com"
                    className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                  >
                    <Mail size={18} className="text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                  </a>
                </div>

                {/* Séparateur */}
                <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                {/* Localisation */}
                <div className="flex items-center gap-2 text-neutral-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm font-mono">Basé à Rennes, France</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Logo - Colonne droite */}
          <div className="animate-slide-up lg:flex justify-center items-center hidden" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <Image
                src="/flotchlogo.png"
                alt="Flotch Logo"
                width={450}
                height={450}
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-105"
                priority
              />
              
              {/* Effet de glow subtil */}
              <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-3xl scale-90 opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
