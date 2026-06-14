import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { DEPARTMENTS } from "@/lib/site-data";
import { Building2 } from "lucide-react";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — CSTSS" },
      { name: "description", content: "Academic and operational departments of the Command Science and Technical Secondary School." },
    ],
  }),
  component: DepartmentsPage,
});

function DepartmentsPage() {
  return (
    <>
      <PageHeader eyebrow="Academic & Operations" title="Departments" description="From science laboratories to technical workshops, every unit at CSTSS contributes to cadet formation." />
      <section className="container-x py-12 grid gap-6 md:grid-cols-2">
        {DEPARTMENTS.map((d) => (
          <article key={d.slug} className="group rounded-sm border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-md">
            <div className="flex items-start gap-4">
              <img src={d.headPhoto} alt={d.head} loading="lazy" className="h-20 w-20 rounded-sm object-cover ring-2 ring-gold/40" />
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5" /> Department
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold">{d.name}</h3>
                <div className="text-sm text-gold">Head: {d.head}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{d.description}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 text-sm">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Functions</div>
                <ul className="mt-2 space-y-1">
                  {d.functions.map((f) => <li key={f} className="flex gap-2"><span className="text-gold">▸</span>{f}</li>)}
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Facilities</div>
                <ul className="mt-2 space-y-1">
                  {d.facilities.map((f) => <li key={f} className="flex gap-2"><span className="text-gold">▸</span>{f}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
