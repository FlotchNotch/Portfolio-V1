"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

export default function HeroSection() {
  const isMobile = useIsMobile();

  const socialLinks = [
    { icon: Github, href: "https://github.com/FlotchNotch", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/florian-marie-0602a76a/", label: "LinkedIn" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="section-container">
        <div className="pt-16 sm:pt-8">
          {/* Layout mobile : texte centré + logo en bas */}
          {isMobile ? (
            <div className="text-center space-y-12">
              {/* Status pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 sm:mb-12"
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white/70 font-light text-sm">
                    Disponible pour de nouveaux projets
                  </span>
                </div>
              </motion.div>

              {/* Texte principal */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-6"
              >
                <h1 className="font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[-0.05em] leading-[0.8]">
                  Hi. I'm{" "}
                  <motion.span 
                    className="bg-gradient-to-r from-teal-400 via-violet-500 to-violet-600 bg-clip-text text-transparent inline-block bg-[length:200%_100%]"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      backgroundImage: "linear-gradient(90deg, #2dd4bf, #8b5cf6, #7c3aed, #2dd4bf)",
                    }}
                  >
                    Florian
                  </motion.span>
                  .
                </h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="space-y-4"
                >
                  <h2 className="font-light text-white/80 tracking-[-0.02em] text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    Développeur Fullstack Junior.
                  </h2>
                  
                  <div className="text-white/60 font-light leading-relaxed max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-sm sm:text-base md:text-lg lg:text-xl">
                    Je code des trucs sympas avec React, Next.js et Node.js.
                  </div>
                </motion.div>
              </motion.div>

              {/* Logo mobile - avec halo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center"
              >
                <div className="relative group">
                  {/* Halo animé derrière */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-400/30 via-violet-500/40 to-violet-600/30 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.3,
                      opacity: 0.8,
                    }}
                  />
                  
                  {/* Logo */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 z-10">
                    <Image
                      src="/FlotchLogo.png"
                      alt="Florian Marie Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex justify-center gap-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-white/10 rounded-full hover:border-purple-500/30 transition-all duration-500 focus:outline-none focus:ring-0 p-3"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: "0 10px 25px rgba(147, 51, 234, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  >
                    <link.icon className="text-white/60 group-hover:text-purple-400 transition-colors duration-300 w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          ) : (
            /* Layout desktop : texte à gauche, logo à droite */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh]">
              {/* Texte à gauche */}
              <div className="text-center lg:text-left space-y-8 flex flex-col justify-center">
                {/* Status pill */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white/70 font-light text-base">
                      Disponible pour de nouveaux projets
                    </span>
                  </div>
                </motion.div>

                {/* Texte principal - avec gradient animé */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="space-y-8"
                >
                  <h1 className="font-medium text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[-0.05em] leading-[0.8]">
                    Hi. I'm{" "}
                    <motion.span 
                      className="bg-gradient-to-r from-teal-400 via-violet-500 to-violet-600 bg-clip-text text-transparent inline-block bg-[length:200%_100%]"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        backgroundImage: "linear-gradient(90deg, #2dd4bf, #8b5cf6, #7c3aed, #2dd4bf)",
                      }}
                    >
                      Florian
                    </motion.span>
                    .
                  </h1>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="space-y-6 lg:space-y-8"
                  >
                    <h2 className="font-light text-white/80 tracking-[-0.02em] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      Développeur Fullstack Junior.
                    </h2>
                    
                    <div className="text-white/60 font-light leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl">
                      Je code des trucs sympas avec React, Next.js et Node.js.
                    </div>
                  </motion.div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex justify-center lg:justify-start gap-6 lg:gap-8"
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border border-white/10 rounded-full hover:border-purple-500/30 transition-all duration-500 focus:outline-none focus:ring-0 p-4 lg:p-5"
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        boxShadow: "0 10px 25px rgba(147, 51, 234, 0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    >
                      <link.icon className="text-white/60 group-hover:text-purple-400 transition-colors duration-300 w-6 h-6 lg:w-7 lg:h-7" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Logo à droite - agrandi et mieux centré */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex justify-center lg:justify-end items-center min-h-[60vh]"
              >
                <div className="relative group">
                  {/* Halo principal */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-violet-500/30 to-violet-600/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.2, 0.5, 0.2],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Halo secondaire */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-l from-violet-400/15 via-teal-500/25 to-violet-500/15 rounded-full blur-xl"
                    animate={{
                      scale: [1.1, 1.3, 1.1],
                      opacity: [0.1, 0.4, 0.1],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                  
                  {/* Logo avec hover */}
                  <motion.div
                    className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] z-10"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 2
                    }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => {
                      // Animation hover pour les halos
                    }}
                  >
                    <Image
                      src="/FlotchLogo.png"
                      alt="Florian Marie Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                    
                    {/* Halo hover spécial */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-violet-500/0 to-violet-600/0 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle, rgba(45,212,191,0.4) 0%, rgba(139,92,246,0.6) 50%, rgba(124,58,237,0.4) 100%)",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className={`absolute left-1/2 transform -translate-x-1/2 ${
          isMobile ? "bottom-6" : "bottom-8 lg:bottom-10"
        }`}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`border border-white/20 rounded-full hover:border-purple-500/50 cursor-pointer focus:outline-none focus:ring-0 ${
            isMobile ? "p-2" : "p-3"
          }`}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowDown className={`text-white/40 ${
            isMobile ? "w-4 h-4" : "w-5 h-5 lg:w-6 lg:h-6"
          }`} />
        </motion.div>
      </motion.div>
    </section>
  );
}