"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Footer() {
  const isMobile = useIsMobile()

  const elsewhereLinks = [
    { label: "Github", href: "https://github.com/FlotchNotch" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/florian-marie-0602a76a/" },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 sm:py-16 lg:py-20 border-t border-white/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className={`${
            isMobile 
              ? "space-y-6 text-center" 
              : "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-end"
          }`}
        >
          {/* Copyright simple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <p className={`text-white/40 font-light tracking-wide ${
              isMobile ? "text-sm" : "text-sm"
            }`}>
              © {currentYear} Florian Marie • Rennes, France
            </p>
          </motion.div>

          {/* Liens elsewhere uniquement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className={isMobile ? "" : "justify-self-end"}
          >
            <div className={`${
              isMobile 
                ? "flex flex-wrap justify-center gap-x-6 gap-y-2" 
                : "flex flex-wrap gap-x-6 gap-y-2 justify-end"
            }`}>
              {elsewhereLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 text-sm focus:outline-none focus:ring-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: isMobile ? 0 : 2 }}
                >
                  <span className="font-light">{link.label}</span>
                  <ExternalLink 
                    size={12} 
                    strokeWidth={1}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
