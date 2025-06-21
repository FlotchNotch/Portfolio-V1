"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Florian Marie</h3>
            <p className="text-neutral-400 text-sm">
              Développeur Full Stack passionné par l'innovation
            </p>
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
              <Github size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/florian-marie-0602a76a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            
            <a 
              href="mailto:florian.marie92@gmail.com"
              className="social-link group"
              aria-label="Email"
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-neutral-500 text-sm flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Développé avec 
              <Heart size={14} className="text-emerald-400 fill-current" /> 
              par Florian Marie
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>Tous droits réservés</p>
            <p>Conçu avec Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}