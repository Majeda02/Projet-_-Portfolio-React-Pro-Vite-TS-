import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { motion } from "framer-motion";
import { Search, Award } from "lucide-react";

export default function CertificationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCertifications = useMemo(() => {
    return certifications
      .filter(cert => {
        const searchContent = [
          cert.title,
          cert.issuer,
          ...(cert.tags || []),
          ...(cert.skills || []),
          cert.credentialId || ''
        ].join(" ").toLowerCase();
        
        return searchContent.includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => b.issueDate.localeCompare(a.issueDate));
  }, [searchTerm]);

  return (
    <motion.section 
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <motion.h2 
          className="text-4xl font-bold text-gray-900 mb-3"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mes Certifications
        </motion.h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Mes certifications et accréditations qui attestent de mes compétences et de mon engagement envers l'apprentissage continu.
        </motion.p>
        
        <motion.div 
          className="relative max-w-md mx-auto"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une certification..."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            aria-label="Rechercher une certification"
          />
        </motion.div>
      </div>

      {filteredCertifications.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
        >
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.title + cert.issueDate}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="w-full"
            >
              <CertificationCard c={cert} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
            <Award className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Aucune certification trouvée</h3>
          <p className="text-gray-500">Essayez de modifier vos critères de recherche.</p>
        </motion.div>
      )}

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Envie d'en savoir plus ?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Découvrez mes projets et expériences qui démontrent la mise en pratique de ces compétences.
        </p>
        <a 
          href="/projects" 
          className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-8 py-3 font-medium transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 shadow-md"
        >
          Voir mes projets
        </a>
      </motion.div>
    </motion.section>
  );
}