"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container text-center relative z-10">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          Ouvert aux opportunités
        </div>

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-2xl shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-300 bg-white/10 backdrop-blur-sm border border-white/20">
              <Image
                src="/flotchlogo.png"
                alt="Florian Marie Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain p-4"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          Florian Marie
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-neutral-300 mb-4 font-light">
          Développeur Full Stack Junior
        </p>

        {/* Description */}
        <p className="text-body text-lg sm:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Je développe des applications web avec React et Next.js. 
          En apprentissage constant, j'aime créer des projets qui marchent bien.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#projects" 
            className="btn btn-primary group"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Mes projets
            <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          
          <a 
            href="#contact"
            className="btn btn-secondary group"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Me contacter
            <Mail size={18} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
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

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-400/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </section>
  )
}
