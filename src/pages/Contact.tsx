import { useState } from 'react';
import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Linkedin, Github, Send, User, MessageSquare, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Veuillez entrer une adresse email valide');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/benlaghfirimajeda@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nouveau message de ${formData.name} depuis le portfolio`,
          _template: 'table',
          _captcha: 'false'
        })
      });
      
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        toast.success('Message envoyé avec succès !', {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#10B981',
            color: '#fff',
            padding: '16px 24px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            fontSize: '15px',
            fontWeight: 500,
            maxWidth: '90%',
            textAlign: 'center',
          },
          icon: <CheckCircle className="text-white" size={20} />,
        });
      } else {
        throw new Error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contact - {profile.name}</title>
        <meta name="description" content="Contactez-moi pour discuter de vos projets ou opportunités de collaboration." />
      </Helmet>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Me contacter</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
        <p className="text-gray-600 max-w-2xl mx-auto">
          Vous avez une question ou souhaitez discuter d'un projet ? N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Informations de contact */}
        <motion.div 
          className="space-y-8 p-6 bg-white rounded-2xl shadow-md"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-gray-900">Coordonnées</h3>
            <p className="text-gray-500">Disponible pour des opportunités et collaborations</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <a 
                  href={`mailto:${profile.email}`} 
                  className="text-blue-600 hover:underline"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Téléphone</h4>
                <a 
                  href={`tel:${profile.Phone}`} 
                  className="text-blue-600 hover:underline"
                >
                  {profile.Phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Localisation</h4>
                <p className="text-gray-600">{profile.location}</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="font-semibold text-gray-900 mb-3">Suivez-moi</h4>
            <div className="flex gap-3">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  aria-label={social.label}
                >
                  {social.label.toLowerCase().includes('github') ? (
                    <Github className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Formulaire de contact */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-md"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-moi un message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Votre nom"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="Votre message..."
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg active:scale-[0.98]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
