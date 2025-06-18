"use client"

import { useState, useEffect } from "react"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "hero", label: "Accueil", icon: Home },
    { id: "about", label: "À propos", icon: User },
    { id: "skills", label: "Compétences", icon: Code },
    { id: "projects", label: "Projets", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 150

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
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Header Desktop - Padding augmenté */}
      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block
        ${isScrolled ? 'py-3' : 'py-4'}
      `}>
        <div className="container">
          <div className="flex justify-center">
            <nav>
              <div className={`
                transition-all duration-300 rounded-full px-3 py-2
                ${isScrolled
                  ? 'bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/10'
                  : 'bg-black/20 backdrop-blur-md border border-white/10'
                }
              `}>
                <div className="flex items-center gap-2">
                  {navItems.map((item) => {
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

      {/* Header Mobile */}
      <div className="md:hidden">
        {/* Bouton Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`
            fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 group
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

        {/* Menu Déroulant */}
        <div className={`
          fixed top-20 right-4 z-40 transition-all duration-400 ease-out
          ${isMenuOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
          }
        `}>
          <div className="bg-black/40 backdrop-blur-xl border border-white/30 rounded-3xl p-3 shadow-2xl min-w-[200px]">
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
                      animationDelay: `${index * 60}ms`,
                      transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                      transition: `all 0.3s ease-out ${index * 60}ms`
                    }}
                  >
                    <IconComponent size={18} className="flex-shrink-0" />
                    <span>{item.label}</span>
                    
                    {/* Point actif */}
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full"></div>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </>
  )
}