import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { STAFF, type Staff } from "@/lib/site-data";
import { Search, X, Mail } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Staff Directory — CSTSS" },
      { name: "description", content: "Meet the academic, administrative, and leadership staff of the Command Science and Technical Secondary School." },
    ],
  }),
  component: StaffPage,
});

const CATEGORIES = ["All", "Commandant", "Vice Principal Admin", "Vice Principal Academic", "HODs", "Teaching Staff", "Administrative Staff"] as const;

function StaffPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [q, setQ] = useState("");
  const [selectedDesktop, setSelectedDesktop] = useState<Staff | null>(STAFF[0]);
  const [modalSelected, setModalSelected] = useState<Staff | null>(null);

  const filtered = useMemo(() => {
    return STAFF.filter((s) => (cat === "All" || s.category === cat) && (s.name.toLowerCase().includes(q.toLowerCase()) || s.position.toLowerCase().includes(q.toLowerCase())));
  }, [cat, q]);

  const handleClick = (s: Staff) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setModalSelected(s);
    } else {
      setSelectedDesktop(s);
    }
  };

  useEffect(() => {
    if (!modalSelected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModalSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalSelected]);

  return (
    <>
      <PageHeader eyebrow="Our People" title="Staff Directory" description="Click any profile to view full details. Filter by category or search by name." />

      <section className="container-x py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`rounded-sm border px-3 py-1.5 text-sm transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search staff…"
              className="w-full rounded-sm border border-border bg-card py-2 pl-9 pr-3 text-sm outline-none focus:border-primary" />
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3">
            {filtered.map((s) => (
              <button key={s.id} onClick={() => handleClick(s)}
                className={`group overflow-hidden rounded-sm border bg-card text-left transition-all ${selectedDesktop?.id === s.id ? "border-gold shadow-md" : "border-border hover:border-gold hover:shadow-md"}`}>
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={s.photo} alt={s.name} loading="lazy" width={400} height={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="font-semibold leading-tight text-sm sm:text-base">{s.name}</div>
                  <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-gold">{s.position}</div>
                </div>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full rounded-sm border border-dashed border-border p-8 text-center text-sm text-muted-foreground">No staff match your search.</div>
            )}
          </div>

          <aside className="hidden lg:block lg:col-span-2 lg:sticky lg:top-20 self-start">
            {selectedDesktop && <DesktopDetails s={selectedDesktop} onClose={() => setSelectedDesktop(null)} />}
          </aside>
        </div>
      </section>

      {modalSelected && <StaffModal s={modalSelected} onClose={() => setModalSelected(null)} />}
    </>
  );
}

function DesktopDetails({ s, onClose }: { s: Staff; onClose: () => void }) {
  return (
    <div key={s.id} className="rounded-sm border border-border bg-card overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="relative">
        <img src={s.photo} alt={s.name} width={800} height={600} className="w-full aspect-[4/3] object-cover" />
        <button onClick={onClose} className="absolute top-3 right-3 p-1.5 rounded-sm bg-background/80 backdrop-blur" aria-label="Close"><X className="h-4 w-4" /></button>
      </div>
      <div className="p-5 space-y-3">
        <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{s.category}</div>
        <h3 className="font-display text-xl font-semibold">{s.name}</h3>
        <div className="text-sm text-muted-foreground">{s.position}</div>
        <div className="gold-rule" />
        <div className="space-y-2 text-sm">
          {s.department && <Row label="Department" value={s.department} />}
          <Row label="Qualification" value={s.qualification} />
          <Row label="Years of Service" value={`${s.years} years`} />
          {s.email && (
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Email</div>
              <a href={`mailto:${s.email}`} className="mt-0.5 inline-flex items-center gap-2 hover:text-gold break-all">
                <Mail className="h-3.5 w-3.5 text-gold shrink-0" />{s.email}
              </a>
            </div>
          )}
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Responsibilities</div>
            <ul className="mt-1.5 space-y-1">
              {s.responsibilities.map((r) => (
                <li key={r} className="flex gap-2"><span className="text-gold">▸</span>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Social Media</div>
            <SocialLinks socials={s.socials} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StaffModal({ s, onClose }: { s: Staff; onClose: () => void }) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 grid place-items-center bg-primary/95 p-3 sm:p-6 animate-in fade-in duration-200 lg:hidden">
      <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-background/20 text-primary-foreground hover:bg-background/30">
        <X className="h-5 w-5" />
      </button>
      <div onClick={(e) => e.stopPropagation()} className="grid w-full max-w-5xl grid-cols-1 bg-card rounded-sm overflow-hidden max-h-[92vh] overflow-y-auto">
        <div className="bg-muted">
          <img src={s.photo} alt={s.name} className="h-full w-full object-cover max-h-[40vh]" />
        </div>
        <div className="p-4 sm:p-6">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-gold">{s.category}</div>
          <h3 className="mt-2 font-display text-lg sm:text-2xl font-semibold leading-tight">{s.name}</h3>
          <div className="text-xs sm:text-sm text-muted-foreground">{s.position}</div>
          <div className="gold-rule mt-3" />
          <div className="mt-4 space-y-3 text-xs sm:text-sm">
            {s.department && <Row label="Department" value={s.department} />}
            <Row label="Qualification" value={s.qualification} />
            <Row label="Years of Service" value={`${s.years} years`} />
            {s.email && (
              <div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <a href={`mailto:${s.email}`} className="mt-0.5 inline-flex items-center gap-2 hover:text-gold break-all">
                  <Mail className="h-3.5 w-3.5 text-gold shrink-0" />{s.email}
                </a>
              </div>
            )}
            <div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Responsibilities</div>
              <ul className="mt-2 space-y-1.5">
                {s.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2"><span className="text-gold">▸</span>{r}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Social Media</div>
              <div className="mt-2"><SocialLinks socials={s.socials} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-foreground">{value}</div>
    </div>
  );
}
