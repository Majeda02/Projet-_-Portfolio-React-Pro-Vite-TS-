import { education } from "@/data/education";
function fmt(s?: string){ if(!s) return "Présent"; const [y,m]=s.split("-"); return `${m}/${y}`; }

export default function EducationPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-12 w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Formations</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </div>
      <div className="flex justify-center items-start">
        <ol className="relative border-l-2 border-primary/30 space-y-8 w-full max-w-5xl pl-8 md:pl-12">
        {education.map((e, index) => (
          <li 
            key={e.school+e.start} 
            className="relative pb-8 animate-in fade-in slide-in-from-left"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary border-4 border-background shadow-lg" />
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-1">
                {e.degree}{e.field ? ` — ${e.field}` : ""}
                <span className="text-base font-semibold text-primary ml-2">@ {e.school}</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1">
                  {fmt(e.start)} — {fmt(e.end)}
                </span>
                {e.location && (
                  <>
                    <span className="text-border">•</span>
                    <span>{e.location}</span>
                  </>
                )}
                {e.gpa && (
                  <>
                    <span className="text-border">•</span>
                    <span className="font-semibold text-primary">GPA {e.gpa}</span>
                  </>
                )}
              </p>
              {e.courses?.length ? (
                <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">Cours</p>
                  <p className="text-sm text-muted-foreground">{e.courses.slice(0,5).join(", ")}</p>
                </div>
              ) : null}
              {e.highlights?.length ? (
                <ul className="list-none space-y-2 mt-4">
                  {e.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5">▸</span>
                      <span className="leading-relaxed">{h}</span>
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