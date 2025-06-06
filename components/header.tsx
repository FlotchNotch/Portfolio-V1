"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const navItems = [
    { href: "#about", label: "À propos", hasSlash: true },
    { href: "#skills", label: "Compétences", hasSlash: true },
    { href: "#work", label: "Projets", hasSlash: true },
    { href: "#contact", label: "Contact", hasSlash: false },
  ]

  const closeMenu = () => setIsMenuOpen(false)

  // Version mobile
  if (isMobile) {
    return (
      <>
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed top-4 left-4 right-4 z-50"
        >
          <div className="flex items-center justify-between px-6 py-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
            <Link href="/" className="text-lg font-medium text-white/80 tracking-tight focus:outline-none">
              FM
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-0"
            >
              {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </motion.header>

        {/* Menu mobile dropdown */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            y: isMenuOpen ? 0 : -10 
          }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-4 right-4 z-40 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg"
          style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
        >
          <nav className="p-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="block px-4 py-3 text-sm font-light tracking-wide text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 focus:outline-none focus:ring-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      </>
    )
  }

  // Version desktop
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      <nav className="flex items-center gap-1 px-6 py-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
        {navItems.map((item, index) => (
          <div key={item.label} className="flex items-center">
            <Link
              href={item.href}
              className="px-4 py-2 text-sm font-light tracking-wide text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 focus:outline-none focus:ring-0"
            >
              {item.label}
            </Link>
            {item.hasSlash && <span className="text-white/30 mx-1 text-sm font-extralight">/</span>}
          </div>
        ))}
      </nav>
    </motion.header>
  )
}
