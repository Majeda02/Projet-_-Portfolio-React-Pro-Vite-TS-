import { Outlet, NavLink } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function RootLayout() {

  return (
    <div className="min-h-dvh bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 transition-colors duration-300 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 py-3">
          <NavLink 
            to="/" 
            className="text-xl font-bold flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              MBL
            </div>
          </NavLink>
          <div className="flex items-center gap-2 md:gap-4 text-sm md:text-base">
            <NavLink 
              to="/projects" 
              className="px-3 py-2 rounded-lg font-medium transition-all hover:bg-accent hover:text-primary relative group"
            >
              Projets
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </NavLink>
            <NavLink 
              to="/experience" 
              className="px-3 py-2 rounded-lg font-medium transition-all hover:bg-accent hover:text-primary relative group"
            >
              Parcours
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </NavLink>
            <NavLink 
              to="/education" 
              className="px-3 py-2 rounded-lg font-medium transition-all hover:bg-accent hover:text-primary relative group"
            >
              Formations
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </NavLink>
            <NavLink 
              to="/certifications" 
              className="px-3 py-2 rounded-lg font-medium transition-all hover:bg-accent hover:text-primary relative group"
            >
              Certifications
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </NavLink>
            <NavLink 
              to="/contact" 
              className="px-3 py-2 rounded-lg font-medium transition-all hover:bg-accent hover:text-primary relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </NavLink>
            <div className="flex items-center gap-4 ml-4">
              <a 
                href="https://github.com/Majeda02" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/majeda-ben-laghfiri-ab9895316" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl w-full px-4 md:px-6 py-8 md:py-12">
        <Outlet />
      </main>
      <footer className="border-t border-border/50 mt-16 py-8 text-center text-sm text-muted-foreground bg-card/30 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          {new Date().getFullYear()} • Mon Portfolio - Tous droits réservés
        </div>
      </footer>
    </div>
  );
}