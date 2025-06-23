"use client"

import { Heart, Code2, Sparkles } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium backdrop-blur-sm mb-6">
              <Sparkles size={16} className="animate-pulse" />
              Merci de votre visite
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-display">
              Florian Marie
            </h3>
            
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Développeur Full Stack passionné par la création d'applications web modernes et performantes.
            </p>
          </div>

          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-neutral-900 px-6">
                <Code2 size={20} className="text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-sm text-neutral-500 mb-1 font-medium tracking-wider">STACK</div>
              <p className="text-neutral-300 font-medium">Next.js • React • TypeScript</p>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-neutral-500 mb-1 font-medium tracking-wider">DESIGN</div>
              <p className="text-neutral-300 font-medium">Tailwind CSS • Responsive</p>
            </div>
            
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="text-sm text-neutral-500 mb-1 font-medium tracking-wider">LOCALISATION</div>
              <p className="text-neutral-300 font-medium">Rennes, France</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-neutral-400 text-sm flex items-center justify-center gap-2">
              © {currentYear} • Développé avec 
              <Heart size={14} className="text-emerald-400 fill-current animate-pulse" /> 
              et beaucoup de ☕
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-xs text-neutral-500">
              <span>Conçu et développé par Florian Marie</span>
              <span className="hidden sm:inline">•</span>
              <span>Tous droits réservés</span>
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
    </footer>
  )
}