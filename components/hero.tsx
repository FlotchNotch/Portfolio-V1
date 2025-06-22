"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container relative z-10">
        {/* Contenu principal : Texte à gauche + Logo à droite */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Texte à gauche */}
          <div className="text-center lg:text-left">
            {/* Status indicator aligné avec le texte */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Ouvert aux opportunités
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Florian Marie
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-neutral-300 mb-6 font-light">
              Développeur Full Stack Junior
            </p>

            {/* Description */}
            <p className="text-body text-lg sm:text-xl text-neutral-400 mb-12 leading-relaxed">
              Je développe des applications web avec React et Next.js. 
              En apprentissage constant, j'aime créer des projets qui marchent bien.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary group"
              >
                Mes projets
                <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary group"
              >
                Me contacter
                <Mail size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a 
                href="https://github.com/FlotchNotch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link group"
                aria-label="GitHub"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/florian-marie-0602a76a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              
              <a 
                href="mailto:florian.marie92@gmail.com" 
                className="social-link group"
                aria-label="Email"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Logo à droite avec halo doux */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group cursor-pointer">
              {/* Halo principal doux */}
              <div className="absolute inset-0 -m-12">
                <div 
                  className="w-full h-full bg-gradient-to-br from-emerald-400/15 via-emerald-500/10 to-emerald-600/5 rounded-full blur-3xl group-hover:scale-110 transition-all duration-1000 ease-out"
                  style={{
                    animation: 'gentle-pulse 4s ease-in-out infinite'
                  }}
                ></div>
              </div>
              
              {/* Halo secondaire très doux */}
              <div className="absolute inset-0 -m-6">
                <div 
                  className="w-full h-full bg-emerald-400/8 rounded-full blur-2xl group-hover:bg-emerald-400/15 transition-all duration-700 ease-out"
                  style={{
                    animation: 'gentle-pulse 6s ease-in-out infinite 1s'
                  }}
                ></div>
              </div>

              {/* Logo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group-hover:scale-105 transition-transform duration-700 ease-out">
                <Image
                  src="/flotchlogo.png"
                  alt="Florian Marie Logo"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Particules très douces au hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald-300/60 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-emerald-500/60 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-400/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* CSS custom pour animation douce */}
      <style jsx>{`
        @keyframes gentle-pulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  )
}