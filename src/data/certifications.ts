export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;        // "YYYY-MM"
  expiryDate?: string;      // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  verificationUrl?: string; // Lien pour vérifier la certification
  skills?: string[];
  tags?: string[];
  image?: string;           // "/certs/aws-saa.webp"
  imageAlt?: string;        // "Badge AWS SAA"
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAEdu toubkalit",
    issueDate: "2025-09",
    skills: ["JDK, Les notions de base","JDBC , Modélisation en POO"],
    tags: ["Cloud","DevOps"],
    image: "/assets/JAVA1.png",
    imageAlt: "Certificat Java",
    status: "active",
    verificationUrl: "https://mliaedu.toubkalit.com/verify-certificate/6-48fd079f-753a-4611-a851-ac760b0bd555-912463"
  },
  {
    title: "Hibernate & JPA",
    issuer: "MLIAEdu toubkalit",
    issueDate: "2025-10",
    skills: ["Java 17+, Maven, H2/MySQL, JUnit/Testcontainers"],
    tags: ["Kubernetes","DevOps"],
    image: "/assets/Hibernate.png",
    imageAlt: "Certificat Hibernate",
    status: "active",
    verificationUrl: "https://mliaedu.toubkalit.com/verify-certificate/28-48fd079f-753a-4611-a851-ac760b0bd555-068381"
  },
  {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAEdu toubkalit",
    issueDate: "2025-11",
    skills: ["State & Hooks , Composants React , Routing, API & Intégration"],
    tags: ["Kubernetes","DevOps"],
    image: "/assets/React.png",
    imageAlt: "Certificat React",
    status: "active",
    verificationUrl: "https://mliaedu.toubkalit.com/verify-certificate/26-48fd079f-753a-4611-a851-ac760b0bd555-840974"
  }
];