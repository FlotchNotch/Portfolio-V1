"use client"

import { useState } from "react"
import { Mail, MapPin, Send, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Vérifier que tous les champs sont remplis
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 5000)
      return
    }

    // Créer le lien mailto avec les données du formulaire
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Bonjour Florian,\n\n` +
      `${formData.message}\n\n` +
      `---\n` +
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}`
    )
    
    // Ouvrir le client email
    window.location.href = `mailto:florian.marie92@gmail.com?subject=${subject}&body=${body}`
    
    // Réinitialiser le formulaire après envoi
    setFormData({ name: '', email: '', subject: '', message: '' })
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

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 bg-neutral-500/20 rounded-lg">
                  <MapPin size={20} className="text-neutral-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Localisation</p>
                  <p className="text-neutral-400">Rennes, France</p>
                </div>
              </div>
            </div>

            {/* Info sur le formulaire */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-emerald-300">Comment ça marche ?</p>
                  <p className="text-xs text-emerald-400/80 mt-1">
                    Le formulaire ouvre votre client email avec le message pré-rempli. 
                    Simple et efficace !
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-6">Envoyez-moi un message</h3>
            
            {/* Alert */}
            {showAlert && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
                <AlertCircle size={18} className="text-red-400" />
                <p className="text-sm text-red-300">Veuillez remplir tous les champs obligatoires</p>
              </div>
            )}
            
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
                Ouvrir dans mon client email
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Alternative directe */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-neutral-500 text-center mb-4">
                Ou contactez-moi directement :
              </p>
              <a 
                href="mailto:florian.marie92@gmail.com"
                className="btn btn-secondary w-full group"
              >
                Écrire un email
                <Mail size={18} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}