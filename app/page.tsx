"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Silk from "@/components/silk"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Fond base noir */}
      <div className="fixed inset-0 bg-black" style={{ zIndex: -3 }} />

      {/* Gradient de base animé avec vert très foncé élégant */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -2,
          background: `
            radial-gradient(ellipse 120% 80% at 50% 0%, rgba(24, 42, 35, 0.06) 0%, transparent 70%),
            radial-gradient(ellipse 100% 60% at 0% 100%, rgba(30, 41, 59, 0.05) 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 100% 50%, rgba(24, 42, 35, 0.04) 0%, transparent 50%)
          `,
          animation: "smoothGradientFlow 16s ease-in-out infinite",
        }}
      />

      {/* Effet Silk fluide optimisé */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <Silk
          speed={5.5}
          scale={1}
          color="#181e1c"
          noiseIntensity={1.2}
          rotation={0}
        />
      </div>

      <Header />
      <main className="main-content relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes smoothGradientFlow {
          0% {
            background: radial-gradient(
                ellipse 120% 80% at 50% 0%,
                rgba(24, 42, 35, 0.06) 0%,
                transparent 70%
              ),
              radial-gradient(
                ellipse 100% 60% at 0% 100%,
                rgba(30, 41, 59, 0.05) 0%,
                transparent 60%
              ),
              radial-gradient(
                ellipse 80% 50% at 100% 50%,
                rgba(24, 42, 35, 0.04) 0%,
                transparent 50%
              );
          }
          25% {
            background: radial-gradient(
                ellipse 110% 70% at 30% 0%,
                rgba(30, 41, 59, 0.06) 0%,
                transparent 65%
              ),
              radial-gradient(
                ellipse 90% 80% at 100% 80%,
                rgba(24, 42, 35, 0.07) 0%,
                transparent 55%
              ),
              radial-gradient(
                ellipse 70% 60% at 0% 30%,
                rgba(51, 65, 85, 0.04) 0%,
                transparent 45%
              );
          }
          50% {
            background: radial-gradient(
                ellipse 130% 90% at 70% 0%,
                rgba(24, 42, 35, 0.05) 0%,
                transparent 75%
              ),
              radial-gradient(
                ellipse 80% 50% at 0% 50%,
                rgba(30, 41, 59, 0.06) 0%,
                transparent 50%
              ),
              radial-gradient(
                ellipse 90% 70% at 100% 80%,
                rgba(24, 42, 35, 0.05) 0%,
                transparent 60%
              );
          }
          75% {
            background: radial-gradient(
                ellipse 100% 60% at 20% 0%,
                rgba(51, 65, 85, 0.05) 0%,
                transparent 60%
              ),
              radial-gradient(
                ellipse 110% 70% at 80% 100%,
                rgba(24, 42, 35, 0.06) 0%,
                transparent 65%
              ),
              radial-gradient(
                ellipse 60% 40% at 50% 20%,
                rgba(30, 41, 59, 0.05) 0%,
                transparent 40%
              );
          }
          100% {
            background: radial-gradient(
                ellipse 120% 80% at 50% 0%,
                rgba(24, 42, 35, 0.06) 0%,
                transparent 70%
              ),
              radial-gradient(
                ellipse 100% 60% at 0% 100%,
                rgba(30, 41, 59, 0.05) 0%,
                transparent 60%
              ),
              radial-gradient(
                ellipse 80% 50% at 100% 50%,
                rgba(24, 42, 35, 0.04) 0%,
                transparent 50%
              );
          }
        }
      `}</style>
    </div>
  );
}
