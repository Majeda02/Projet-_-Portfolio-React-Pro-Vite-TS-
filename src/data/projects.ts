export type Project = {
  title: string; period?: string; tags: string[];
  summary: string; link?: string; repo?: string; image?: string;
};

export const projects: Project[] = [
  {
    title: "BudENS",
    period: "2024",
    tags: ["SQL","UML","Laravel","Chart.js","Breeze","Spatie","HTML/CSS/Tailwindcs","Livewire","DOMPDF","Full Calendar"],
    summary: "Application Web pour la  gestion de budget : cas d’ENS Marrakech .",
    repo: "https://github.com/ynaitmalek/Gestion-budget-ENS"
  },
  {
    title: "CONFERENCE",
    period: "2024",
    tags: ["SQL","Laravel","Chart.js","HTML/CSS/Bootstrap"],
    summary: "Application Web pour Gestion des conférences et séminaires .",
    repo: "https://github.com/Majeda02/Projet_Gestion_Conference"
  },
  {
    title: "Hôtel",
    period: "2025",
    tags: ["Thymeleaf","Spring Boot","Spring Data JPA ","HTML/CSS/Bootstrap 5","Java"],
    summary: "Application Web pour La gestion hôtelière .",
    repo: "https://github.com/Majeda02/TP-2-Mini-projet_Thymeleaf"
  },
       {
    title: "Première manipulation avec Unity | Mini projet VR ",
    period: "2025",
    tags: ["VR","C#","Unity "],
    summary: "Conception d'un scénarios | Thème : Physique (astronomie) : Réordonner 3 planètes de la plus proche à la plus éloignée du « soleil » (zones 1/2/3).",
    repo: "https://github.com/Majeda02/Premi-re-manipulation-avec-Unity"
  },
      {
    title: "Simulation simple Circuit | Mini projet VR ",
    period: "2025",
    tags: ["VR","C#","Unity "],
    summary: "Conception d'une scène Unity interactive à visée didactique.",
    repo: "https://github.com/Majeda02/Conception-d-une-sc-ne-Unity-interactive-vis-e-didactique"
  },
     {
    title: " Mini-application éducative en RA | Mini projet AR ",
    period: "2025",
    tags: ["AR","C#","Unity ","Vuforia "],
    summary: "Conception d' une mini-application éducative en RA | Thème : Culture / monuments : affichage de monuments  avec description.",
    repo: "https://github.com/Majeda02/Lab3_-Introduction-AR-avec-Unity-Vuforia"
  },
     {
    title: " Projet Portfolio React Pro (Vite + TS) ",
    period: "2025",
    tags: ["React","Vite","Tailwindcs ","TypeScript","React Router"],
    summary: "Création d'un portfolio avec React ,Vite + TS et Tailwindcs.",
    repo: "https://github.com/Majeda02/Projet-_-Portfolio-React-Pro-Vite-TS-"
  },
   {
    title: "Mini Projet ",
    period: "2023",
    tags: ["HTML","CSS","JavaSript "],
    summary: "Application Web pour La gestion du partage de ressources éducatives .",
    repo: ""
  },
];