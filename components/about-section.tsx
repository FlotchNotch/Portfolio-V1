"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AboutSection() {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16 lg:mb-24"
        >
          <h2
            className={`font-thin text-white mb-4 sm:mb-6 lg:mb-8 tracking-[-0.04em] leading-[0.9] ${
              isMobile
                ? "text-4xl sm:text-5xl"
                : "text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            }`}
          >
            About
          </h2>
          <div className="w-16 sm:w-20 lg:w-32 h-[1px] bg-gradient-to-r from-purple-500 to-transparent"></div>
        </motion.div>

        <div
          className={`${
            isMobile
              ? "space-y-8 sm:space-y-12"
              : "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <p
              className={`text-white/90 leading-relaxed font-light tracking-[-0.01em] ${
                isMobile
                  ? "text-lg sm:text-xl"
                  : "text-xl md:text-2xl lg:text-3xl"
              }`}
            >
              Salut ! Moi c'est{" "}
              <span className="text-white font-normal">Florian</span>, développeur
              web junior en reconversion professionnelle.
            </p>

            <p
              className={`text-white/60 leading-relaxed font-light ${
                isMobile
                  ? "text-sm sm:text-base"
                  : "text-lg lg:text-xl"
              }`}
            >
              Après 13 ans en tant que préparateur en pharmacie, j'ai choisi de me reconvertir dans le
              développement web. En 2025, j'ai suivi une formation intensive de 10
              semaines à La Capsule pour maîtriser le développement fullstack
              JavaScript.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              className="pt-4 sm:pt-6 lg:pt-8"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full opacity-60"></div>
                <p
                  className={`text-white/70 font-light tracking-wide ${
                    isMobile
                      ? "text-sm sm:text-base"
                      : "text-base lg:text-lg"
                  }`}
                >
                  Prêt à transformer vos idées en applications web modernes
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 sm:space-y-8 lg:space-y-12"
          >
            {[
              {
                number: "13",
                label: "Années d'expérience\nen préparation pharmaceutique",
              },
              {
                number: "10",
                label: "Semaines de formation\nintensive",
              },
              {
                number: "2025",
                label: "Année de\nreconversion",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  x: isMobile ? 0 : 30,
                  y: isMobile ? 20 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group border-l border-white/10 pl-4 sm:pl-6 lg:pl-8 hover:border-purple-500/50 transition-colors duration-700"
              >
                <div
                  className={`font-thin text-white mb-2 sm:mb-3 lg:mb-4 tracking-[-0.02em] group-hover:text-purple-400 transition-colors duration-500 ${
                    isMobile
                      ? "text-2xl sm:text-3xl"
                      : "text-4xl md:text-5xl lg:text-6xl"
                  }`}
                >
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm text-white/50 font-light tracking-widest uppercase leading-relaxed whitespace-pre-line">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
