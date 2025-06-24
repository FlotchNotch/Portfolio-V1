"use client"

import { ArrowDown, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="section min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-24"
      aria-label="Section d'accueil - Florian Marie Développeur Full Stack"
    >
      <div className="container relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
          
          <div className="order-2 lg:order-1 text-center lg:text-left w-full">
            {/* Titre avec effet gradient animé */}
            <h1 className="relative text-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black mb-6 leading-[0.85]">
              <span className="block bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent animate-gradient-x bg-300%">
                Florian
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent animate-gradient-x bg-300%" style={{ animationDelay: '0.5s' }}>
                Marie
              </span>
            </h1>

            {/* Subtitle avec données structurées */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-semibold mb-4">
              <span itemProp="jobTitle">Développeur Full Stack Junior</span>
            </p>

            <div className="flex justify-center lg:justify-start items-center gap-2 mb-8" itemScope itemType="https://schema.org/Place">
              <MapPin size={16} className="text-emerald-400" aria-hidden="true" />
              <span className="text-emerald-300 text-sm font-medium" itemProp="address">Rennes, France</span>
            </div>

            {/* Description avec mots-clés SEO */}
            <p className="text-sm sm:text-base text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Je crée des applications web et mobile avec <span className="text-emerald-400 font-medium">React</span>, <span className="text-emerald-400 font-medium">Next.js</span> et <span className="text-emerald-400 font-medium">React Native</span>. 
              Développeur junior passionné en <span className="text-emerald-400 font-medium">apprentissage constant</span>, je développe mes compétences à travers chaque projet de développement.
            </p>

            {/* CTA avec radius harmonisés */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary group w-full sm:w-auto"
                aria-label="Voir les projets de développement web de Florian Marie"
              >
                <span>Découvrir mes projets</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" aria-hidden="true" />
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary group w-full sm:w-auto"
                aria-label="Contacter Florian Marie développeur full stack"
              >
                <Mail size={16} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
                <span>Me contacter</span>
              </button>
            </div>
          </div>

          {/* Logo avec alt optimisé et effet halo */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem] group cursor-pointer">
              
              {/* Halo pulsant en arrière-plan */}
              <div className="absolute inset-0 bg-gradient-radial from-emerald-500/20 via-emerald-400/10 to-transparent rounded-full animate-pulse-soft blur-xl scale-110 group-hover:from-emerald-400/30 group-hover:via-emerald-300/15 transition-all duration-700"></div>
              <div className="absolute inset-0 bg-gradient-radial from-emerald-400/15 via-emerald-300/8 to-transparent rounded-full animate-pulse-soft-delayed blur-2xl scale-125 group-hover:from-emerald-300/25 group-hover:via-emerald-200/12 transition-all duration-700"></div>
              
              {/* Logo */}
              <div className="relative z-10 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/flotchlogo.png"
                  alt="Logo Florian Marie - Développeur Full Stack Junior spécialisé React Next.js"
                  width={416}
                  height={416}
                  className="w-full h-full object-contain drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-500"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 416px"
                />
              </div>
              
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-soft {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1.1);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.15);
          }
        }
        
        @keyframes pulse-soft-delayed {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1.25);
          }
          50% { 
            opacity: 0.4;
            transform: scale(1.3);
          }
        }
        
        .animate-gradient-x { 
          animation: gradient-x 3s ease infinite; 
        }
        .bg-300% { 
          background-size: 300% 300%; 
        }
        .animate-pulse-soft {
          animation: pulse-soft 4s ease-in-out infinite;
        }
        .animate-pulse-soft-delayed {
          animation: pulse-soft-delayed 4s ease-in-out infinite 1s;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}