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
            fixed top-4 right-4 z-[60] p-3 rounded-full transition-all duration-300 ease-out
            ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}
            ${isMenuOpen
              ? 'bg-emerald-500/20 border-emerald-500/30'
              : 'bg-black/40 border-white/20 hover:bg-black/60'
            }
            border backdrop-blur-xl
          `}
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            <span className={`
              absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-out
              ${isMenuOpen ? 'rotate-45 bg-emerald-400' : '-translate-y-1.5'}
            `}></span>
            <span className={`
              absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-out
              ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}
            `}></span>
            <span className={`
              absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-out
              ${isMenuOpen ? '-rotate-45 bg-emerald-400' : 'translate-y-1.5'}
            `}></span>
          </div>
        </button>

        <div className={`
          fixed inset-0 z-50 transition-all duration-500 ease-out
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}>
          
          <div className={`
            absolute top-4 left-4 right-4 transition-transform duration-500 ease-out
            ${isMenuOpen 
              ? 'translate-y-0' 
              : '-translate-y-full'
            }
          `}>
            
            <div className="card p-6">
              
              <nav>
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon
                    const isActive = activeSection === item.id
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                          btn w-full flex items-center gap-3 text-left
                          ${isActive ? 'btn-primary' : 'btn-secondary'}
                        `}
                        style={{
                          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                          opacity: isMenuOpen ? 1 : 0,
                          transitionDelay: isMenuOpen ? `${index * 60 + 200}ms` : '0ms'
                        }}
                      >
                        <IconComponent 
                          size={18} 
                          className="transition-transform group-hover:scale-110 flex-shrink-0" 
                        />
                        
                        <span className="flex-1">
                          {item.label}
                        </span>
                        
                        {isActive && (
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse flex-shrink-0"></div>
                        )}
                      </button>
                    )
                  })}
                </div>
              </nav>
              
              <div className={`
                pt-4 mt-4 border-t border-white/10 text-center
                transition-all duration-500 delay-500
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}>
                <p className="text-xs text-neutral-400">
                  <span className="text-emerald-400">Florian Marie</span> • Développeur Full Stack Junior
                </p>
              </div>
              
            </div>
          </div>
          
          {isMenuOpen && (
            <div 
              className="absolute inset-0 -z-10"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  )
}