"use client"

import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="section min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      <div className="container relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          
          <div className="order-1 text-center lg:text-left w-full">
            {/* Badge de statut simplifié */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <Sparkles size={14} />
                <span>En apprentissage constant</span>
              </div>
            </div>

            {/* Logo mobile */}
            <div className="flex justify-center lg:hidden mb-8">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                <Image
                  src="/flotchlogo.png"
                  alt="Florian Marie Logo"
                  width={192}
                  height={192}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Titre avec effet gradient animé */}
            <h1 className="relative text-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black mb-6 leading-[0.9]">
              <span className="block bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent animate-gradient-x bg-300%">
                Florian
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent animate-gradient-x bg-300%" style={{ animationDelay: '0.5s' }}>
                Marie
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-semibold mb-4">
              Développeur Full Stack Junior
            </p>

            <div className="flex justify-center lg:justify-start items-center gap-2 mb-12">
              <MapPin size={16} className="text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Rennes, France</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-400 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Je crée des applications web avec <span className="text-emerald-400 font-medium">React</span> et <span className="text-emerald-400 font-medium">Next.js</span>. 
              Toujours curieux d'apprendre, je développe mes compétences à travers chaque projet.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary group w-full sm:w-auto"
              >
                <span>Découvrir mes projets</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary group w-full sm:w-auto"
              >
                <Mail size={16} className="group-hover:rotate-12 transition-transform" />
                <span>Me contacter</span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a 
                href="https://github.com/FlotchNotch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/florian-marie-bzh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href="mailto:florianmarie.webdev@gmail.com" 
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Logo desktop */}
          <div className="order-2 hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-96 h-96 xl:w-[26rem] xl:h-[26rem]">
              <Image
                src="/flotchlogo.png"
                alt="Florian Marie Logo"
                width={416}
                height={416}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x { 
          animation: gradient-x 3s ease infinite; 
        }
        .bg-300% { 
          background-size: 300% 300%; 
        }
      `}</style>
    </section>
  )
}