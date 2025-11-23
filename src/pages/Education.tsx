import { education } from "@/data/education";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from "lucide-react";

function formatDate(dateStr?: string) { 
  if (!dateStr) return "En cours"; 
  const [year, month] = dateStr.split("-"); 
  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];
  return `${monthNames[parseInt(month) - 1]} ${year}`; 
}

export default function EducationPage() {
  return (
    <motion.section 
      className="max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Mon Parcours Académique</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mon parcours éducatif et mes certifications qui ont façonné mes compétences et ma passion pour les technologies émergentes.
        </p>
      </div>

      <div className="relative">
        {/* Ligne de temps */}
        <div className="absolute left-4 md:left-1/2 h-full w-1 bg-blue-100 -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school + edu.start}
              className={`relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6`}>
                {/* Carte de formation */}
                <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-200 flex-1 ${
                  index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {edu.degree}
                        {edu.field && <span className="text-blue-600"> - {edu.field}</span>}
                      </h3>
                      <div className="flex items-center text-blue-600 font-medium mt-1">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        {edu.school}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mb-4 gap-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(edu.start)} - {formatDate(edu.end)}
                    </div>
                    {edu.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    )}
                    {edu.gpa && (
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                        <span className="font-medium text-gray-700">GPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>
                  
                  {edu.courses && edu.courses.length > 0 && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Cours suivis :</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.slice(0, 5).map((course, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs bg-white text-gray-700 border border-gray-200 rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                        {edu.courses.length > 5 && (
                          <span className="text-xs text-gray-500 self-center">
                            +{edu.courses.length - 5} autres
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-2 mt-4">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
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
                  {formatDate(edu.start)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Compétences acquises</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Mon parcours académique m'a permis d'acquérir des compétences solides en développement, en analyse et en gestion de projet.
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