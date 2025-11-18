import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-8 w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Projets</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <article 
            key={p.title} 
            className="group relative border-2 border-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom w-full"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tags.map(t => (
                  <span 
                    key={t} 
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2 text-sm font-medium">
                {p.link && (
                  <a 
                    className="text-primary hover:underline flex items-center gap-1 transition-all hover:gap-2" 
                    href={p.link} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    Demo →
                  </a>
                )}
                {p.repo && (
                  <a 
                    className="text-primary hover:underline flex items-center gap-1 transition-all hover:gap-2" 
                    href={p.repo} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    Code →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}