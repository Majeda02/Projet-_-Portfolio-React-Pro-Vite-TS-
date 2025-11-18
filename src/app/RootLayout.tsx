import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md shadow-sm">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-4">
          <NavLink 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent hover:from-primary hover:to-primary/70 transition-all duration-300"
          >
            BEN-LAGHFIRI Majeda
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
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl w-full px-4 md:px-6 py-8 md:py-12">
        <Outlet />
      </main>
      <footer className="border-t border-border/50 mt-16 py-8 text-center text-sm text-muted-foreground bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          © {new Date().getFullYear()} • BEN-LAGHFIRI Majeda
        </div>
      </footer>
    </div>
  );
}