import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Github, 
  Linkedin, 
  Monitor, 
  Server, 
  Database, 
  Globe, 
  Settings, 
  Smartphone,
  GraduationCap,
  BookOpen
} from "lucide-react";
import { profile } from "@/data/profile";

// Définition des types pour les compétences
type SkillGroup = {
  category: string;
  icon: string;
  items: string[];
};

// Composant pour gérer dynamiquement les icônes
const getIconComponent = (iconName: string) => {
  const icons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'Monitor': Monitor,
    'Server': Server,
    'Database': Database,
    'Globe': Globe,
    'Settings': Settings,
    'Smartphone': Smartphone
  };
  
  const Icon = icons[iconName];
  return Icon ? <Icon className="w-5 h-5" /> : null;
};

export default function Home() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full space-y-12"
    >
      <Helmet>
        <title>MBL - Portfolio</title>
        <meta name="description" content="Portfolio : IA, SIG, DevSecOps, Android." />
      </Helmet>

      {/* Photo de profil en haut */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-48 h-48 md:w-56 md:h-56">
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <motion.img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Contenu principal */}
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {profile.name.split(' ')[0]} <span className="text-blue-600">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl text-gray-600">{profile.role}</p>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {profile.description}
          </p>
        </div>
        
        {/* Section Compétences */}
        <div className="space-y-8 pt-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Mes Compétences</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.skills.map((skillGroup: SkillGroup) => (
              <div 
                key={skillGroup.category}
                className="p-5 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                    {getIconComponent(skillGroup.icon)}
                  </div>
                  <h4 className="font-semibold text-gray-900">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Link 
            to="/projects" 
            className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-8 py-3 font-medium transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 shadow-md"
          >
            Voir mes projets
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 bg-white px-8 py-3 font-medium transition-all hover:bg-blue-50 active:scale-95"
          >
            Me contacter
          </Link>
        </div>

        {/* Badges de parcours */}
        <div className="flex flex-wrap justify-center gap-3 pt-6">
          <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors">
            <GraduationCap className="w-4 h-4" />
            <span>Master TEE</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors">
            <BookOpen className="w-4 h-4" />
            <span>ENS Marrakech</span>
          </div>
        </div>

        {/* Section Réseaux sociaux */}
        <div className="flex justify-center gap-4 pt-8">
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
                <Github className="w-6 h-6 text-gray-700" />
              ) : (
                <Linkedin className="w-6 h-6 text-blue-600" />
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
