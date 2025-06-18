"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("Form submitted:", formData)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", message: "" })
      alert("Message envoyé !")
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:florian.marie92@gmail.com",
      label: "florian.marie92@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/flotchnotch",
      label: "github.com/flotchnotch",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/flotchnotch",
      label: "linkedin.com/in/flotchnotch",
    },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-4xl">
          <div className="text-sm text-neutral-400 font-medium mb-4 tracking-wider">CONTACT</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-display mb-6 sm:mb-8 leading-tight">Travaillons ensemble</h2>
          <p className="text-neutral-400 mb-12 sm:mb-16 max-w-2xl text-base sm:text-lg text-body">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-serif tracking-wide">Envoyez-moi un message</h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 sm:mb-3 text-neutral-300">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Votre nom"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 sm:mb-3 text-neutral-300">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 sm:mb-3 text-neutral-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input form-textarea"
                      placeholder="Votre message..."
                      required
                    />
                  </div>

                  {/* Bouton formulaire - Harmonisé */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative overflow-hidden w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <span>Envoyer le message</span>
                      </>
                    )}

                    {/* Effet de brillance */}
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6 sm:space-y-8">
              <div className="card">
                <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-serif tracking-wide">Informations</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4 text-sm">
                    <MapPin size={18} className="text-neutral-400 flex-shrink-0" />
                    <span>Rennes, France</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 text-sm">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <span>Disponible pour un poste</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-serif tracking-wide">Réseaux</h3>
                <div className="space-y-3 sm:space-y-4">
                  {/* Liens sociaux dans la sidebar - Harmonisés */}
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 flex items-center gap-3 sm:gap-4 px-4 py-3 sm:px-6 sm:py-4 backdrop-blur-sm"
                      >
                        <IconComponent size={18} className="text-neutral-400 group-hover:text-emerald-400 flex-shrink-0 transition-colors" />
                        <div className="min-w-0">
                          <div className="font-medium text-sm sm:text-base">{link.name}</div>
                          <div className="text-xs sm:text-sm text-neutral-500 truncate">{link.label}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
