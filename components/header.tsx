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
      
      setIsScrolled(currentScrollY > 20)
      
      if (currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMenuOpen(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
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

      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`
            fixed top-4 right-4 z-[60] p-3 rounded-full transition-all duration-500 ease-out group
            ${isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-16 opacity-0 scale-90'}
            ${isScrolled || isMenuOpen
              ? 'bg-black/60 backdrop-blur-xl border border-white/30'
              : 'bg-black/20 backdrop-blur-md border border-white/15'
            }
            ${isMenuOpen ? 'scale-110 bg-emerald-500/20 border-emerald-500/30' : 'hover:scale-105'}
          `}
        >
          <div className="relative w-5 h-5 flex flex-col justify-center">
            <span className={`
              block w-5 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center
              ${isMenuOpen 
                ? 'rotate-45 translate-y-0.5 bg-emerald-400' 
                : 'mb-1'
              }
            `}></span>
            
            <span className={`
              block w-5 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center
              ${isMenuOpen 
                ? 'opacity-0 scale-0' 
                : 'mb-1'
              }
            `}></span>
            
            <span className={`
              block w-5 h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center
              ${isMenuOpen 
                ? '-rotate-45 -translate-y-0.5 bg-emerald-400' 
                : ''
              }
            `}></span>
          </div>
        </button>

        <div className={`
          fixed inset-0 z-50 transition-all duration-700 ease-out
          ${isMenuOpen && isVisible
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
          }
        `}>
          <div 
            className={`
              absolute inset-0 bg-black/60 transition-all duration-500
              ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
            `}
            onClick={() => setIsMenuOpen(false)}
          />
          
          <div className={`
            absolute top-0 left-0 right-0 h-[300px] sm:h-[350px]
            bg-gradient-to-b from-black/95 via-black/90 to-black/70 
            border-b border-white/20
            transition-all duration-700 ease-out overflow-hidden
            ${isMenuOpen 
              ? 'translate-y-0' 
              : '-translate-y-full'
            }
          `}>
            
            <div className="h-full flex flex-col px-4 sm:px-6 py-6 max-w-md mx-auto">
              
              <div className="h-12"></div>
              
              <nav className="flex-1 flex flex-col justify-center space-y-3">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon
                  const isActive = activeSection === item.id
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        group flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-medium 
                        transition-all duration-500 text-base relative overflow-hidden w-full
                        ${isActive
                          ? 'btn btn-primary'
                          : 'btn btn-secondary'
                        }
                      `}
                      style={{ 
                        transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                        opacity: isMenuOpen ? 1 : 0,
                        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 80 + 200}ms`
                      }}
                    >
                      <IconComponent 
                        size={20} 
                        className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0" 
                      />
                      
                      <span className="flex-1 text-left text-sm sm:text-base">
                        {item.label}
                      </span>
                      
                      {isActive && (
                        <div className="relative flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping opacity-75"></div>
                        </div>
                      )}
                      
                      {!isActive && (
                        <div className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 text-sm">
                          →
                        </div>
                      )}
                    </button>
                  )
                })}
              </nav>
              
              <div className={`
                pt-4 border-t border-white/10 text-center
                transition-all duration-500 delay-600
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}>
                <p className="text-xs text-neutral-400">
                  <span className="text-emerald-400">Florian Marie</span> • Développeur Full Stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}