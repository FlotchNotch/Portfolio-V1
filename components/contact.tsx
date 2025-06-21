"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Créer le lien mailto avec les données du formulaire
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:florian.marie92@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
            Travaillons Ensemble
          </h2>
          <p className="text-body text-xl text-neutral-400 max-w-2xl mx-auto">
            Une idée de projet ? Une opportunité ? 
            N'hésitez pas à me contacter pour discuter de vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Restons en contact</h3>
              <p className="text-neutral-400 mb-8">
                Je suis toujours ouvert aux nouvelles opportunités et aux projets intéressants. 
                Contactez-moi et voyons ce que nous pouvons créer ensemble.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a 
                href="mailto:florian.marie92@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-3 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                  <Mail size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-neutral-400">florian.marie92@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/florian-marie-0602a76a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Linkedin size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-white">LinkedIn</p>
                  <p className="text-neutral-400">Florian Marie</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 bg-neutral-500/20 rounded-lg">
                  <MapPin size={20} className="text-neutral-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Localisation</p>
                  <p className="text-neutral-400">France</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-neutral-500 mb-4">Suivez-moi sur</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/FlotchNotch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link group"
                  aria-label="GitHub"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/florian-marie-0602a76a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Votre message..."
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full group"
              >
                Envoyer le message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
