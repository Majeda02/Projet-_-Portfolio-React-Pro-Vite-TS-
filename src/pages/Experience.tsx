import { experience } from "@/data/experience";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

function formatDate(dateStr?: string) { 
  if (!dateStr) return "Présent"; 
  const [year, month] = dateStr.split("-"); 
  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];
  return `${monthNames[parseInt(month) - 1]} ${year}`; 
}

export default function ExperiencePage() {
  return (
    <motion.section 
      className="max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Mon Parcours</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez mon parcours professionnel et mes expériences dans le domaine du développement et des technologies de l'information.
        </p>
      </div>

      <div className="relative">
        {/* Ligne de temps */}
        <div className="absolute left-4 md:left-1/2 h-full w-1 bg-blue-100 -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company + exp.start}
              className={`relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6`}>
                {/* Carte d'expérience */}
                <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-200 flex-1 ${
                  index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 font-medium mt-1">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    {exp.logo ? (
                      <img 
                        src={exp.logo} 
                        alt={exp.company} 
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-6">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(exp.start)} - {formatDate(exp.end)}
                    </div>
                    {exp.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    )}
                  </div>
                  
                  {exp.description.length > 0 && (
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies utilisées :</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech: string, i: number) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Point sur la timeline */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white rounded-full border-4 border-blue-600 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                
                {/* Date */}
                <div className={`hidden md:block w-24 text-sm font-medium text-gray-500 mt-1 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  {formatDate(exp.start)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Compétences acquises</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Au fil de mes expériences, j'ai développé des compétences variées en développement, gestion de projet et travail d'équipe.
        </p>
        <a 
          href="/#skills" 
          className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-8 py-3 font-medium transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 shadow-md"
        >
          Voir mes compétences
        </a>
      </div>
    </motion.section>
  );
}
