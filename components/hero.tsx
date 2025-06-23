"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          <div className="order-1 text-center lg:text-left w-full">
            <div className="flex justify-center lg:justify-start mb-8 lg:mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Ouvert aux opportunités
              </div>
            </div>

            <div className="flex justify-center lg:hidden mb-8">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 -m-12">
                  <div 
                    className="w-full h-full rounded-full blur-2xl transition-all duration-1000 ease-out"
                    style={{
                      background: `radial-gradient(circle, rgba(21, 32, 28, 0.15) 0%, rgba(21, 32, 28, 0.1) 30%, rgba(21, 32, 28, 0.05) 100%)`,
                      animation: 'gentle-pulse 4s ease-in-out infinite'
                    }}
                  ></div>
                </div>

                <div className="relative w-40 h-40 sm:w-52 sm:h-52 group-hover:scale-105 transition-transform duration-700 ease-out">
                  <Image
                    src="/flotchlogo.png"
                    alt="Florian Marie Logo"
                    width={208}
                    height={208}
                    className="w-full h-full object-contain drop-shadow-xl"
                    priority
                  />
                </div>

                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full animate-ping" style={{ animationDuration: '3s', backgroundColor: 'rgba(21, 32, 28, 0.6)' }}></div>
                  <div className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s', backgroundColor: 'rgba(21, 32, 28, 0.5)' }}></div>
                </div>
              </div>
            </div>

            <h1 className="text-display text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-black mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent leading-tight">
              Florian Marie
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 mb-8 font-light">
              Développeur Full Stack Junior
            </p>

            <p className="text-body text-base sm:text-lg text-neutral-400 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Je développe des applications web avec React et Next.js. En apprentissage constant, j'aime créer des projets qui marchent bien.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary group w-full sm:w-auto min-w-[180px]"
              >
                Mes projets
                <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary group w-full sm:w-auto min-w-[180px]"
              >
                Me contacter
                <Mail size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
            </div>

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

          <div className="order-2 hidden lg:flex justify-center lg:justify-end">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 -m-16">
                <div 
                  className="w-full h-full rounded-full blur-3xl group-hover:scale-110 transition-all duration-1000 ease-out"
                  style={{
                    background: `radial-gradient(circle, rgba(21, 32, 28, 0.2) 0%, rgba(21, 32, 28, 0.12) 30%, rgba(21, 32, 28, 0.06) 100%)`,
                    animation: 'gentle-pulse 4s ease-in-out infinite'
                  }}
                ></div>
              </div>
              
              <div className="absolute inset-0 -m-8">
                <div 
                  className="w-full h-full rounded-full blur-2xl transition-all duration-700 ease-out"
                  style={{
                    background: `radial-gradient(circle, rgba(21, 32, 28, 0.1) 0%, transparent 70%)`,
                    animation: 'gentle-pulse 6s ease-in-out infinite 1s'
                  }}
                ></div>
              </div>

              <div className="relative w-96 h-96 xl:w-[28rem] xl:h-[28rem] group-hover:scale-105 transition-transform duration-700 ease-out">
                <Image
                  src="/flotchlogo.png"
                  alt="Florian Marie Logo"
                  width={448}
                  height={448}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-ping" style={{ animationDuration: '3s', backgroundColor: 'rgba(21, 32, 28, 0.6)' }}></div>
                <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s', backgroundColor: 'rgba(21, 32, 28, 0.5)' }}></div>
                <div className="absolute bottom-1/4 left-3/4 w-2 h-2 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s', backgroundColor: 'rgba(21, 32, 28, 0.6)' }}></div>
                <div className="absolute top-1/2 right-1/6 w-1 h-1 rounded-full animate-ping" style={{ animationDuration: '6s', animationDelay: '3s', backgroundColor: 'rgba(21, 32, 28, 0.4)' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-32 h-32 lg:w-48 lg:h-48 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(21, 32, 28, 0.04)', animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 lg:w-40 lg:h-40 rounded-full blur-2xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(21, 32, 28, 0.03)', animationDuration: '10s' }}></div>
      </div>

      <style jsx>{`
        @keyframes gentle-pulse {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.03);
          }
        }
      `}</style>
    </section>
  )
}