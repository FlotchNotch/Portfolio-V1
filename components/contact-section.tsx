"use client"

import { motion } from "framer-motion"
import { Mail, ArrowUpRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function ContactSection() {
  const isMobile = useIsMobile()

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="spacing-lg"
        >
          <h2 className={`font-extralight text-white spacing-sm tracking-[-0.04em] leading-[0.9] ${
            isMobile ? "heading-lg" : "heading-xl"
          }`}>
            Contact
          </h2>
          <div className="w-16 sm:w-20 lg:w-32 h-[1px] bg-gradient-to-r from-purple-500 to-transparent"></div>
        </motion.div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="spacing-md"
          >
            <h3 className={`font-light text-white spacing-sm tracking-[-0.02em] ${
              isMobile ? "heading-sm" : "heading-md"
            }`}>
              Travaillons ensemble
            </h3>
            <p className={`text-white/60 font-light leading-relaxed mx-auto ${
              isMobile 
                ? "text-sm sm:text-base max-w-xs px-4" 
                : "text-lg lg:text-xl max-w-2xl"
            }`}>
              Prêt à transformer vos idées en applications web modernes.
            </p>
          </motion.div>

          <motion.a
            href="mailto:florian.marie92@gmail.com"
            className={`inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-full transition-all duration-300 group focus:outline-none focus:ring-0 ${
              isMobile ? "text-sm sm:text-base" : "text-lg lg:text-xl"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className={`${isMobile ? "w-4 h-4 sm:w-5 sm:h-5" : "w-6 h-6"}`} strokeWidth={1} />
            <span className="font-light text-white group-hover:text-purple-400 transition-colors duration-300">
              {isMobile ? "Envoyer un email" : "florian.marie92@gmail.com"}
            </span>
            <ArrowUpRight
              size={isMobile ? 16 : 20}
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              strokeWidth={1}
            />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 lg:mt-16"
          >
            <p className={`text-white/30 font-light ${
              isMobile ? "text-xs" : "text-sm"
            }`}>
              {isMobile ? (
                <div className="text-center">
                  <div>Remote ou Rennes</div>
                  <div className="mt-1">Réponse sous 24h</div>
                </div>
              ) : (
                "Remote ou Rennes • Réponse sous 24h"
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}