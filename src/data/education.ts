export type Education = {
  school: string; degree: string; field?: string;
  location?: string; start: string; end?: string;
  gpa?: string; courses?: string[]; highlights?: string[];
};

export const education: Education[] = [
    {
    school: "Université Cadi Ayyad",
    degree: "Master",
    field: "Technologies Emergentes",
    location: "Marrakech",
    start: "2024-10",
    
    
  },
    {
    school: "Université Cadi Ayyad",
    degree: "Licence d'Education",
    field: "Informatique",
    location: "Marrakech",
    start: "2021-10",
    end: "2024-07",
    
  },
  {
    school: "Lycée qualifiant RAHALI ELFAROUQ",
    degree: "Baccalauréat",
    field: "Science physique",
    location: " EL ATTAOUIA EL KELAA DES SRAGHNA ",
    start: "2019-09",
    end: "2020-07",
    
    
  }
];