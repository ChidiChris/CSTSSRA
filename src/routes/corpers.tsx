import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { CORPERS, type Corper } from "@/lib/site-data";
import { Search, X, Phone, Users } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/corpers")({
  head: () => ({
    meta: [
      { title: "NYSC Corpers — CSTSS" },
      { name: "description", content: "Meet the NYSC corps members currently serving at CSTSS." },
    ],
  }),
  component: CorpersPage,
});

function CorpersPage() {
  const [q, setQ] = useState("");
  const [selectedDesktop, setSelectedDesktop] = useState<Corper | null>(CORPERS[0]);
  const [modalSelected, setModalSelected] = useState<Corper | null>(null);
  const filtered = useMemo(() => CORPERS.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()) || c.course.toLowerCase().includes(q.toLowerCase()) || c.stateCode.toLowerCase().includes(q.toLowerCase())), [q]);

  const handleClick = (c: Corper) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setModalSelected(c);
    } else {
      setSelectedDesktop(c);
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
      <PageHeader eyebrow="National Service" title="NYSC Corps Members" description="Graduates from across Nigeria serving their nation as part of the CSTSS team." />
      <section className="container-x py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex items-center gap-3 rounded-sm border border-gold/40 bg-card px-4 py-3">
            <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary text-primary-foreground">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Currently Serving</div>
              <div className="font-display text-xl font-semibold">
                <span className="text-gold">{CORPERS.length}</span> Corps Members
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search corpers…"
              className="w-full rounded-sm border border-border bg-card py-2 pl-9 pr-3 text-sm outline-none focus:border-primary" />
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3">
            {filtered.map((c) => (
              <button key={c.id} onClick={() => handleClick(c)}
                className={`group overflow-hidden rounded-sm border bg-card text-left transition-all ${selectedDesktop?.id === c.id ? "border-gold shadow-md" : "border-border hover:border-gold hover:shadow-md"}`}>
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={c.photo} alt={c.name} loading="lazy" width={400} height={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="font-semibold leading-tight text-sm sm:text-base">{c.name}</div>
                  <div className="mt-1 text-[10px] sm:text-xs text-muted-foreground">{c.stateCode}</div>
                  <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-gold">{c.department}</div>
                </div>
              </button>
            ))}
          </div>

          <aside className="hidden lg:block lg:col-span-2 lg:sticky lg:top-20 self-start">
            {selectedDesktop && <DesktopDetails c={selectedDesktop} onClose={() => setSelectedDesktop(null)} />}
          </aside>
        </div>
      </section>

      {modalSelected && <CorperModal c={modalSelected} onClose={() => setModalSelected(null)} />}
    </>
  );
}

function DesktopDetails({ c, onClose }: { c: Corper; onClose: () => void }) {
  return (
    <div key={c.id} className="rounded-sm border border-border bg-card overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="relative">
        <img src={c.photo} alt={c.name} width={800} height={600} className="w-full aspect-[4/3] object-cover" />
        <button onClick={onClose} className="absolute top-3 right-3 p-1.5 rounded-sm bg-background/80 backdrop-blur" aria-label="Close"><X className="h-4 w-4" /></button>
      </div>
      <div className="p-5 space-y-3">
        <div className="text-[10px] uppercase tracking-[0.22em] text-gold">NYSC Corper</div>
        <h3 className="font-display text-xl font-semibold">{c.name}</h3>
        <div className="text-sm text-muted-foreground">{c.stateCode}</div>
        <div className="gold-rule" />
        <div className="space-y-2 text-sm">
          <Row label="Course of Study" value={c.course} />
          <Row label="Institution" value={c.institution} />
          <Row label="Assigned Department" value={c.department} />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Phone</div>
            <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="mt-0.5 inline-flex items-center gap-2 hover:text-gold">
              <Phone className="h-3.5 w-3.5 text-gold" /> {c.phone}
            </a>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Skills & Interests</div>
            <div className="mt-1.5 flex flex-wrap gap-2">
              {c.skills.map((s) => (
                <span key={s} className="rounded-sm bg-muted px-2 py-1 text-xs">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Social Media</div>
            <SocialLinks socials={c.socials} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CorperModal({ c, onClose }: { c: Corper; onClose: () => void }) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 grid place-items-center bg-primary/95 p-3 sm:p-6 animate-in fade-in duration-200 lg:hidden">
      <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-background/20 text-primary-foreground hover:bg-background/30">
        <X className="h-5 w-5" />
      </button>
      <div onClick={(e) => e.stopPropagation()} className="grid w-full max-w-5xl grid-cols-1 bg-card rounded-sm overflow-hidden max-h-[92vh] overflow-y-auto">
        <div className="bg-muted">
          <img src={c.photo} alt={c.name} className="h-full w-full object-cover max-h-[40vh]" />
        </div>
        <div className="p-4 sm:p-6">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-gold">NYSC Corper</div>
          <h3 className="mt-2 font-display text-lg sm:text-2xl font-semibold leading-tight">{c.name}</h3>
          <div className="text-xs sm:text-sm text-muted-foreground">{c.stateCode}</div>
          <div className="gold-rule mt-3" />
          <div className="mt-4 space-y-3 text-xs sm:text-sm">
            <Row label="Course of Study" value={c.course} />
            <Row label="Institution" value={c.institution} />
            <Row label="Assigned Department" value={c.department} />
            <div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
              <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="mt-0.5 inline-flex items-center gap-2 hover:text-gold">
                <Phone className="h-3.5 w-3.5 text-gold" /> {c.phone}
              </a>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Social Media</div>
              <div className="mt-2"><SocialLinks socials={c.socials} /></div>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Skills & Interests</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <span key={s} className="rounded-sm bg-muted px-2 py-1 text-xs">{s}</span>
                ))}
              </div>
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
      <div className="mt-0.5">{value}</div>
    </div>
  );
}