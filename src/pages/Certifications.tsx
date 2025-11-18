import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      certifications
        .filter(c =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-8 w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Certifications</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
        <div className="flex items-center justify-center">
          <input
            placeholder="Filtrer (ex: JPA, Java)"
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            className="border-2 border-border rounded-xl px-4 py-3 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
            aria-label="Filtrer les certifications"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((c, index) => (
          <div 
            key={c.title + c.issueDate}
            className="animate-in fade-in slide-in-from-bottom w-full"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CertificationCard c={c} />
          </div>
        ))}
      </div>
    </section>
  );
}