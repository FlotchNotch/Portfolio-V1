"use client"

import { useState, useEffect } from "react"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { id: "hero", label: "Accueil", icon: Home },
    { id: "about", label: "À propos", icon: User },
    { id: "skills", label: "Compétences", icon: Code },
    { id: "projects", label: "Projets", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Détection du scroll
      setIsScrolled(currentScrollY > 20)
      
      // Logique de visibilité du header
      if (currentScrollY < 50) {
        // Toujours visible en haut de page
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas - cacher
        setIsVisible(false)
        setIsMenuOpen(false) // Fermer le menu mobile si ouvert
      } else if (currentScrollY < lastScrollY) {
        // Scroll vers le haut - montrer
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)

      // Détection de section active
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = currentScrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Header Desktop avec animation */}
      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out hidden md:block
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${isScrolled ? 'py-3' : 'py-4'}
      `}>
        <div className="container">
          <div className="flex justify-center">
            <nav className={`
              transition-all duration-500 ease-out
              ${isVisible ? 'scale-100' : 'scale-95'}
            `}>
              <div className={`
                transition-all duration-300 rounded-full px-3 py-2
                ${isScrolled
                  ? 'bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/10'
                  : 'bg-black/20 backdrop-blur-md border border-white/10'
                }
              `}>
                <div className="flex items-center gap-2">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon
                    const isActive = activeSection === item.id
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                          relative flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base
                          ${isActive
                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                            : 'text-neutral-400 hover:text-white hover:bg-white/10'
                          }
                        `}
                        style={{
                          transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
                        }}
                      >
                        <IconComponent size={18} />
                        <span className="hidden lg:inline">
                          {item.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Header Mobile avec animation */}
      <div className="md:hidden">
        {/* Bouton Menu avec animation */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`
            fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-500 ease-out group
            ${isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-16 opacity-0 scale-90'}
            ${isScrolled || isMenuOpen
              ? 'bg-black/40 backdrop-blur-xl border border-white/30'
              : 'bg-black/20 backdrop-blur-md border border-white/15'
            }
            ${isMenuOpen ? 'scale-110' : 'hover:scale-105'}
          `}
        >
          <div className="relative w-5 h-5 flex flex-col justify-center">
            {/* Barre 1 */}
            <span className={`
              block w-5 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center
              ${isMenuOpen 
                ? 'rotate-45 translate-y-0.5 bg-emerald-400' 
                : 'mb-1'
              }
            `}></span>
            
            {/* Barre 2 */}
            <span className={`
              block w-5 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center
              ${isMenuOpen 
                ? 'opacity-0 scale-0' 
                : 'mb-1'
              }
            `}></span>
            
            {/* Barre 3 */}
            <span className={`
              block w-5 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center
              ${isMenuOpen 
                ? '-rotate-45 -translate-y-0.5 bg-emerald-400' 
                : ''
              }
            `}></span>
          </div>
        </button>

        {/* Menu Déroulant avec animation améliorée */}
        <div className={`
          fixed top-20 right-4 z-40 transition-all duration-500 ease-out
          ${isMenuOpen && isVisible
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-8 scale-95 pointer-events-none'
          }
        `}>
          <div className="bg-black/40 backdrop-blur-xl border border-white/30 rounded-3xl p-3 shadow-2xl min-w-[200px] transform">
            <nav className="space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon
                const isActive = activeSection === item.id
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-medium transition-all duration-300 text-sm sm:text-base
                      ${isActive
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'text-neutral-300 hover:text-white hover:bg-white/10'
                      }
                    `}
                    style={{ 
                      animationDelay: `${index * 80}ms`,
                      transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)',
                      transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 80}ms`
                    }}
                  >
                    <IconComponent size={18} className="flex-shrink-0" />
                    <span>{item.label}</span>
                    
                    {/* Point actif avec animation */}
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Overlay avec animation */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-all duration-300 opacity-100"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </>
  )
}