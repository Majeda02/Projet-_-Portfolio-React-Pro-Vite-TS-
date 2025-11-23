import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ZoomIn, Award as AwardIcon, Calendar, Hash } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  verificationUrl?: string;
  image?: string;
  imageAlt?: string;
  status: 'active' | 'expired' | 'revoked' | string;
  skills?: string[];
};

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split("-");
  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                     "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const [showImageModal, setShowImageModal] = useState(false);
  const isExpired = c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);
  const isActive = c.status === 'active' && !isExpired;

  return (
    <div className="h-full">
      <motion.article
        className="h-full flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
        whileHover={{ y: -5 }}
        aria-label={`Certification ${c.title}`}
      >
        {/* En-tête avec image */}
        {c.image && (
          <div className="relative h-48 bg-gray-50 overflow-hidden group">
            <img
              src={c.image}
              alt={c.imageAlt || c.title}
              className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowImageModal(true);
              }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Agrandir l'image"
            >
              <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        )}

        {/* Contenu de la carte */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Badge de statut */}
          <div className="flex justify-between items-start mb-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              isExpired 
                ? 'bg-red-100 text-red-800' 
                : isActive 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
            }`}>
              {isExpired ? 'Expiré' : isActive ? 'Actif' : 'Inactif'}
            </span>
            
            {isActive && c.verificationUrl && (
              <motion.a
                href={c.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                whileHover={{ x: 2 }}
                aria-label="Vérifier cette certification"
              >
                Vérifier
                <ExternalLink className="ml-1 w-4 h-4" />
              </motion.a>
            )}
          </div>

          {/* Titre et émetteur */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{c.title}</h3>
          <p className="text-gray-600 font-medium mb-4 flex items-center">
            <AwardIcon className="w-4 h-4 mr-2 text-blue-500" />
            {c.issuer}
          </p>

          {/* Dates */}
          <div className="space-y-2 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-blue-500" />
              <span>Délivrée le: {formatDate(c.issueDate)}</span>
            </div>
            {c.expiryDate && (
              <div className="flex items-center">
                <Calendar className={`w-4 h-4 mr-2 ${isExpired ? 'text-red-500' : 'text-amber-500'}`} />
                <span className={isExpired ? 'text-red-500' : ''}>
                  {isExpired ? 'A expiré le: ' : 'Expire le: '} 
                  {formatDate(c.expiryDate)}
                </span>
              </div>
            )}
            {c.credentialId && (
              <div className="flex items-center">
                <Hash className="w-4 h-4 mr-2 text-blue-500" />
                <span className="font-mono text-sm bg-gray-100 px-2 py-0.5 rounded">
                  {c.credentialId}
                </span>
              </div>
            )}
          </div>

          {/* Compétences */}
          {c.skills && c.skills.length > 0 && (
            <div className="mt-auto pt-4 border-t border-gray-100">
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Compétences validées
              </h4>
              <div className="flex flex-wrap gap-2">
                {c.skills.slice(0, 3).map((skill, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
                {c.skills.length > 3 && (
                  <span className="text-xs text-gray-500 self-center">
                    +{c.skills.length - 3} autres
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Pied de carte avec liens */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
          <div className="flex justify-between items-center">
            {c.credentialUrl && (
              <motion.a
                href={c.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                aria-label="Voir les détails de la certification"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Voir le certificat
              </motion.a>
            )}
            
            {isExpired && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                Expiré
              </span>
            )}
            
            {c.status === "revoked" && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Révoqué
              </span>
            )}
          </div>
        </div>
      </motion.article>

      {/* Modal d'agrandissement d'image */}
      <AnimatePresence>
        {showImageModal && c.image && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImageModal(false)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <motion.button 
                className="absolute -top-10 right-0 text-white hover:text-blue-500 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowImageModal(false);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Fermer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>
              
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={c.image}
                  alt={c.imageAlt || c.title}
                  className="w-full max-h-[80vh] object-contain"
                />
                
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <h3 className="font-bold text-lg">{c.title}</h3>
                  <p className="text-sm text-gray-600">
                    {c.issuer} • Délivré le {formatDate(c.issueDate)}
                    {c.expiryDate && ` • Expire le ${formatDate(c.expiryDate)}`}
                  </p>
                  
                  {c.verificationUrl && (
                    <motion.a 
                      href={c.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm text-blue-600 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Vérifier ce certificat en ligne
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}