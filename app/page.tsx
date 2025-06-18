"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Fond majoritairement noir avec gradient vert subtil */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ 
          zIndex: -1,
          background: `
            radial-gradient(ellipse at top center, rgba(73, 160, 120, 0.1) 0%, rgba(0, 0, 0, 1) 60%),
            radial-gradient(ellipse at bottom center, rgba(73, 160, 120, 0.05) 0%, rgba(0, 0, 0, 1) 70%),
            linear-gradient(180deg, 
              rgba(0, 0, 0, 1) 0%,
              rgba(73, 160, 120, 0.03) 30%,
              rgba(0, 0, 0, 0.98) 70%,
              rgba(0, 0, 0, 1) 100%
            )
          `
        }}
      />

      <Header />
      <main className="main-content relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
