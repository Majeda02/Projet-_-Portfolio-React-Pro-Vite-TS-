// src/data/experience.ts

export type Experience = {
  title: string;
  company: string;
  location?: string;
  start: string;
  end?: string;
  description?: string[];
};

export const experience: Experience[] = [
  {
    title: " Stage de fin d’étude | Service financier",
    company: "Ecole Normale Supérieure | Marrakech  ",
    location: "Marrakech",
    start: "2024-02",
    end: "2024-06",
    description: [
      "Conception et développement d'une application web dédiée à la gestion des vacataires et des budgets.",
      "Création et optimisation d'une base de données permettant une gestion efficace des ressources et l'analyse statistique des activités.",
      "Automatisation du calcul des indemnités et gestion des documents de paiement en conformité avec la réglementation en vigueur.",
      "Implémentation d'un calendrier interactif pour le suivi des séances et des jours fériés"
    ]
  },
  {
    title: "Action educative",
    company: "Lycée Abdelah Ibrahim ",
    location: "Marrakech",
    start: "2023-11",
    end: "2024-07",
    description: [
      "Enregistrement des absences et suivi administratif via le service MASSAR",
      "Gestion des notes et mise à jour des informations académiques sur MASSAR",
      "Organisation et gestion des fichiers et dossiers des élèves, assurant un suivi rigoureux",
      "Accompagnement et soutien des élèves en mathématiques pour améliorer leur compréhension et leurs résultats"
    ]
   },
  {
    title: "Action Educative",
    company: "Lycée Salah Eddine El Ayoubi  ",
    location: "Marrakech",
    start: "2023-11",
    end: "2024-07",
    description: [
      "Enregistrement des absences et suivi administratif via le service MASSAR",
      "Gestion des notes et mise à jour des informations académiques sur MASSAR"
      
    ]
  }
];
