import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full">

      <Helmet>
        <title>{profile.name} BEN-LAGHFIRI Majeda</title>
        <meta name="description" content="Portfolio : IA, SIG, DevSecOps, Android." />
      </Helmet>

      {/* Colonne de gauche */}
      <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            {profile.name}
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-primary">{profile.role}</p>
        </div>
        
        <div className="space-y-4 text-lg leading-relaxed">
          <p className="text-muted-foreground">{profile.description}</p>
          <p className="text-muted-foreground">{profile.skills}</p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link 
            to="/projects" 
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Voir les projets
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center rounded-lg border-2 border-border bg-background px-6 py-3 font-medium transition-all hover:bg-accent hover:border-primary hover:shadow-md active:scale-95"
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 pt-2" aria-label="badges de parcours">
          <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            Master TEE
          </span>
          <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            ENS Marrakech
          </span>
        </div>

        {/* Section Contact */}
        <div className="mt-8 p-6 rounded-xl border bg-card/50 backdrop-blur-sm space-y-3 text-sm">
          <p className="flex items-center gap-2">
            <strong className="text-foreground">Email :</strong> 
            <a 
              href={`mailto:${profile.email}`} 
              className="text-primary hover:underline transition-colors"
            >
              {profile.email}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <strong className="text-foreground">Téléphone :</strong> 
            <span className="text-muted-foreground">{profile.Phone}</span>
          </p>
          <p className="flex items-center gap-2">
            <strong className="text-foreground">Adresse :</strong> 
            <span className="text-muted-foreground">{profile.location}</span>
          </p>
          <div className="pt-2 space-y-2">
            {profile.socials.map((s) => (
              <p key={s.label} className="flex items-center gap-2">
                <strong className="text-foreground">{s.label} :</strong>{" "}
                <a 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline transition-colors"
                >
                  Voir le profil
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Colonne de droite — Image grande */}
      <div className="relative aspect-square rounded-3xl border-2 border-border/50 overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10 animate-in fade-in slide-in-from-right duration-700">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 z-10" />
        <img
          src={profile.avatar}
          alt={`${profile.name} illustration`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

    </section>
  );
}
