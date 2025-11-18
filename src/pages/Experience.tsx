import { experience } from "@/data/experience";

function fmt(s?: string) { 
  if (!s) return "Présent"; 
  const [y, m] = s.split("-"); 
  return `${m}/${y}`; 
}

export default function ExperiencePage() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-12 w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Parcours</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </div>
      <div className="flex justify-center items-start">
        <ol className="relative border-l-2 border-primary/30 space-y-8 w-full max-w-5xl pl-8 md:pl-12">
        {experience.map((e, index) => (
          <li 
            key={e.company + e.start} 
            className="relative pb-8 animate-in fade-in slide-in-from-left"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary border-4 border-background shadow-lg" />
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-1">
                {e.title} 
                <span className="text-base font-semibold text-primary ml-2">@ {e.company}</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1">
                  {fmt(e.start)} — {fmt(e.end)}
                </span>
                {e.location && (
                  <>
                    <span className="text-border">•</span>
                    <span>{e.location}</span>
                  </>
                )}
              </p>
              {e.description?.length ? (
                <ul className="list-none space-y-2 mt-4">
                  {e.description.map(d => (
                    <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5">▸</span>
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
        </ol>
      </div>
    </section>
  );
}
