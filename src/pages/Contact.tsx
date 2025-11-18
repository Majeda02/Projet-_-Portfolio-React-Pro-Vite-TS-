import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 space-y-10">

      <Helmet>
        <title>Contact – {profile.name}</title>
        <meta name="description" content="Contact BEN-LAGHFIRI Majeda" />
      </Helmet>

      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        Contact
      </h1>

      <p className="text-center text-muted-foreground max-w-2xl mx-auto">
        Vous pouvez me contacter directement via les informations ci-dessous.
      </p>

      {/* Carte des informations */}
      <div className="p-8 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-lg space-y-6">

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Informations personnelles</h2>
          <p><strong>Nom :</strong> {profile.name}</p>
          <p><strong>Rôle :</strong> {profile.role}</p>
          <p><strong>Adresse :</strong> {profile.location}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>
            <strong>Email :</strong>{" "}
            <a 
              href={`mailto:${profile.email}`} 
              className="text-primary hover:underline"
            >
              {profile.email}
            </a>
          </p>
           <p className="flex items-center gap-2">
            <strong className="text-foreground">Téléphone :</strong> 
            <span className="text-muted-foreground">{profile.Phone}</span>
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Réseaux</h2>

          {profile.socials.map((s) => (
            <p key={s.label}>
              <strong>{s.label} :</strong>{" "}
              <a 
                href={s.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Voir le profil
              </a>
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}
