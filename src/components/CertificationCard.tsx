import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function mmYYYY(s: string){ const [y,m]=s.split("-"); return `${m}/${y}`; }

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired = c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "group relative border-2 border-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        isExpired && "opacity-75"
      )}
      aria-label={`Certification ${c.title}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 space-y-4">
        {c.image && (
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-background p-4">
            <img
              src={c.image}
              alt={c.imageAlt ?? c.title}
              className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="space-y-2">
          <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">
            {c.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium">{c.issuer}</span> • {mmYYYY(c.issueDate)}
            {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
            {c.credentialId ? (
              <span className="block mt-1 text-xs font-mono text-primary/70">
                ID: {c.credentialId}
              </span>
            ) : null}
          </p>
        </div>

        {c.skills?.length ? (
          <div className="pt-2">
            <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">Compétences</p>
            <div className="flex flex-wrap gap-2">
              {c.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-3 pt-2 text-sm">
          {c.credentialUrl && (
            <a 
              className="text-primary hover:underline font-medium flex items-center gap-1 transition-all hover:gap-2" 
              href={c.credentialUrl} 
              target="_blank" 
              rel="noreferrer"
              aria-label={`Voir le certificat ${c.title}`}
            >
              Voir le certificat →
            </a>
          )}
          <div className="flex gap-2 ml-auto">
            {isExpired && (
              <span className="inline-flex items-center rounded-full bg-amber-500/10 text-amber-600 px-2.5 py-1 text-xs font-medium border border-amber-500/20">
                Expirée
              </span>
            )}
            {c.status === "revoked" && (
              <span className="inline-flex items-center rounded-full bg-red-500/10 text-red-600 px-2.5 py-1 text-xs font-medium border border-red-500/20">
                Révoquée
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}