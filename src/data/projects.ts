export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  description?: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "BudENS",
    period: "2024",
    tags: ["SQL","UML","Laravel","Chart.js","Breeze","Spatie","HTML/CSS/Tailwindcs","Livewire","DOMPDF","Full Calendar"],
    summary: "Application Web pour la gestion de budget : cas d'ENS Marrakech",
    description: "Développement d'une application web complète pour la gestion budgétaire de l'ENS Marrakech. L'application permet de suivre les dépenses et les recettes, générer des rapports détaillés et visualiser les données financières via des tableaux de bord interactifs. J'ai principalement travaillé sur l'implémentation des fonctionnalités de génération de rapports PDF et l'intégration des graphiques avec Chart.js.",
    repo: "https://github.com/ynaitmalek/Gestion-budget-ENS"
  },
  {
    title: "CONFERENCE",
    period: "2024",
    tags: ["SQL","Laravel","Chart.js","HTML/CSS/Bootstrap"],
    summary: "Application Web pour Gestion des conférences et séminaires .",
    description: "Conception et développement d'une application web pour la gestion des conférences et séminaires. L'application permet de gérer les événements, les speakers, les participants et les salles de conférence. J'ai travaillé sur l'implémentation des fonctionnalités de gestion des événements et des speakers.",
    repo: "https://github.com/Majeda02/Projet_Gestion_Conference"
  },
  {
    title: "Hôtel",
    period: "2025",
    tags: ["Thymeleaf","Spring Boot","Spring Data JPA ","HTML/CSS/Bootstrap 5","Java"],
    summary: "Application Web pour La gestion hôtelière",
    description: "Développement d'une application de gestion hôtelière complète avec Spring Boot et Thymeleaf. L'application permet de gérer les réservations, les chambres, les clients et les factures. J'ai implémenté la couche de persistance avec Spring Data JPA et conçu une interface utilisateur réactive avec Bootstrap 5.",
    repo: "https://github.com/Majeda02/TP-2-Mini-projet_Thymeleaf"
  },
       {
    title: "Première manipulation avec Unity | Mini projet VR ",
    period: "2025",
    tags: ["VR","C#","Unity "],
    summary: "Conception d'un scénario VR éducatif sur le système solaire",
    description: "Conception et développement d'une expérience VR éducative permettant d'explorer le système solaire. J'ai développé ce projet avec Unity et C#, en mettant l'accent sur l'interaction utilisateur et l'aspect pédagogique.",
    repo: "https://github.com/Majeda02/Premi-re-manipulation-avec-Unity"
  },
      {
    title: "Simulation de circuit électrique | Mini projet VR",
    period: "2025",
    tags: ["VR","C#","Unity"],
    summary: "Simulation interactive de circuits électriques en réalité virtuelle",
    description: "Développement d'une application VR éducative permettant de voir  des circuits électriques simples. Les utilisateurs peuvent connecter des composants  et observer le comportement du circuit en temps réel. J'ai utilisé Unity et le langage C# pour créer une interface intuitive et réaliste.",
    repo: "https://github.com/Majeda02/Conception-d-une-sc-ne-Unity-interactive-vis-e-didactique"
  },
     {
    title: "Monuments en Réalité Augmentée",
    period: "2025",
    tags: ["AR","C#","Unity","Vuforia"],
    summary: "Application éducative en réalité augmentée pour explorer les monuments historiques",
    description: "Développement d'une application mobile de réalité augmentée permettant d'afficher des  monuments historiques en superposant des informations éducatives sur le monde réel. L'application utilise Vuforia pour la reconnaissance d'images. J'ai conçu l'interface utilisateur et implémenté les interactions avec les Targets, ainsi que le système d'affichage des informations contextuelles.",
    repo: "https://github.com/Majeda02/Lab3_-Introduction-AR-avec-Unity-Vuforia"
  },
     {
    title: "Portfolio Professionnel React",
    period: "2025",
    tags: ["React","Vite","Tailwind CSS","TypeScript","React Router"],
    summary: "Portfolio moderne et réactif développé avec les dernières technologies web",
    description: "Conception et développement d'un portfolio personnel moderne utilisant React, TypeScript et Vite pour des performances optimales. L'interface est construite avec Tailwind CSS pour un design responsive et élégant. Le portfolio présente mes compétences, projets et expériences professionnelles de manière claire et attrayante. J'ai implémenté des animations fluides, un mode sombre/clair, et une expérience utilisateur optimisée pour tous les appareils.",
    repo: "https://github.com/Majeda02/Projet-_-Portfolio-React-Pro-Vite-TS-"
  },
   {
    title: "Plateforme de Partage de Ressources Éducatives",
    period: "2023",
    tags: ["HTML","CSS","JavaScript"],
    summary: "Application Web pour la gestion du partage de ressources éducatives",
    description: "Conception et développement d'une plateforme web permettant aux enseignants et aux étudiants de partager des ressources éducatives. L'application inclut un système de catégorisation des ressources, une fonction de recherche avancée et un espace utilisateur personnalisé. J'ai développé l'interface utilisateur avec HTML5, CSS3 et JavaScript pur, en mettant l'accent sur l'ergonomie et l'accessibilité. Le projet m'a permis d'acquérir des compétences solides en développement front-end et en expérience utilisateur.",
    repo: ""
  },
];