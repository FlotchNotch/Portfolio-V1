"use client"

import { Heart, Code, Coffee } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10">
      <div className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Informations principales */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-white">
              Florian Marie
            </h3>
            
            <p className="text-neutral-400">
              Développeur Full Stack Junior • Rennes, France
            </p>
            
            <p className="text-sm text-neutral-500 max-w-md mx-auto">
              Passionné par le développement web, j'aime créer des expériences numériques qui ont du sens.
            </p>
          </div>

          {/* Status badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Actuellement en recherche d'opportunités</span>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <span>© {currentYear} Florian Marie</span>
              </div>
              
              <div className="hidden sm:block w-1 h-1 bg-neutral-500 rounded-full"></div>
              
              <div className="flex items-center gap-1">
                <span>Développé avec</span>
                <Heart size={12} className="text-emerald-400 fill-current animate-pulse" />
                <span>et beaucoup de</span>
                <Coffee size={12} className="text-amber-400" />
              </div>
              
              <div className="hidden sm:block w-1 h-1 bg-neutral-500 rounded-full"></div>
              
              <div className="flex items-center gap-1">
                <Code size={12} className="text-blue-400" />
                <span>Next.js & Tailwind CSS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}