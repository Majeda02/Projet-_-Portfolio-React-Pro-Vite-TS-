import { projects } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 w-full"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Mes Projets</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-12" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <motion.article 
            key={p.title}
            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {p.image && (
              <div className="h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {p.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {p.summary}
                {p.description && (
                  <span className="block mt-2 text-gray-500">
                    {p.description.length > 150 
                      ? `${p.description.substring(0, 150)}...` 
                      : p.description}
                  </span>
                )}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 pt-2">
                {p.repo && (
                  <a 
                    href={p.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                    aria-label="Voir le code source"
                  >
                    <Github className="w-4 h-4" />
                    Code source
                  </a>
                )}
                {p.link && (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-600 text-blue-600 bg-white text-sm font-medium hover:bg-blue-50 transition-colors"
                    aria-label="Voir le projet en ligne"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir le projet
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">Vous avez un projet en tête ? N'hésitez pas à me contacter !</p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-8 py-3 font-medium transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 shadow-md"
        >
          Me contacter
        </a>
      </div>
    </motion.section>
  );
}