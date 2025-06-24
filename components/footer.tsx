"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Layout responsive */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Informations principales */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-1">
                Florian Marie
              </h3>
              <p className="text-sm text-neutral-400">
                Développeur Full Stack Junior • Rennes
              </p>
            </div>

            {/* Copyright et crédits */}
            <div className="text-center md:text-right">
              <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-neutral-500">
                <span>© {currentYear} Florian Marie</span>
                
                <div className="hidden sm:block w-1 h-1 bg-neutral-500 rounded-full"></div>
                
                <div className="flex items-center gap-1">
                  <span>Fait avec</span>
                  <Heart size={12} className="text-emerald-400 fill-current" />
                  <span>& Next.js</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}