import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { MILITARY, type Military } from "@/lib/site-data";
import { Shield, X } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/military")({
  head: () => ({
    meta: [
      { title: "Military Personnel — CSTSS" },
      { name: "description", content: "Serving military personnel of the Command Science and Technical Secondary School." },
    ],
  }),
  component: MilitaryPage,
});

function PersonCard({ m, active, onClick }: { m: Military; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className={`group overflow-hidden rounded-sm border bg-card text-left transition-all ${active ? "border-gold shadow-md" : "border-border hover:border-primary"}`}>
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img src={m.photo} alt={m.name} loading="lazy" decoding="async" width={400} height={500} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-3 md:p-4">
        <div className="text-[10px] uppercase tracking-wider text-gold">{m.rank}</div>
        <div className="mt-1 text-sm md:text-base font-semibold leading-tight">{m.name}</div>
        <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{m.appointment}</div>
      </div>
    </button>
  );
}

function MilitaryPage() {
  const [selectedDesktop, setSelectedDesktop] = useState<Military | null>(MILITARY[0]);
  const [modalSelected, setModalSelected] = useState<Military | null>(null);

  const handleClick = (m: Military) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setModalSelected(m);
    } else {
      setSelectedDesktop(m);
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
      <PageHeader eyebrow="Order of Command" title="Military Personnel" description="The serving officers and NCOs who form the military backbone of CSTSS." />

      <section className="container-x py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 grid gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
            {MILITARY.map((m) => (
              <PersonCard key={m.id} m={m} active={selectedDesktop?.id === m.id} onClick={() => handleClick(m)} />
            ))}
          </div>

          <aside className="hidden lg:block lg:col-span-2 lg:sticky lg:top-20 self-start">
            {selectedDesktop && (
              <div key={selectedDesktop.id} className="rounded-sm border border-border bg-card overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="relative">
                  <img src={selectedDesktop.photo} alt={selectedDesktop.name} width={800} height={600} className="w-full aspect-[4/3] object-cover" />
                  <button onClick={() => setSelectedDesktop(null)} className="absolute top-3 right-3 p-1.5 rounded-sm bg-background/80 backdrop-blur" aria-label="Close"><X className="h-4 w-4" /></button>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-gold">
                    <Shield className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-wider">{selectedDesktop.rank}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{selectedDesktop.name}</h3>
                  <div className="text-sm text-muted-foreground">{selectedDesktop.appointment} · {selectedDesktop.unit}</div>
                  <div className="gold-rule" />
                  <p className="text-sm text-muted-foreground">{selectedDesktop.profile}</p>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Social Media</div>
                    <SocialLinks socials={selectedDesktop.socials} />
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {modalSelected && <MilitaryModal m={modalSelected} onClose={() => setModalSelected(null)} />}
    </>
  );
}

function MilitaryModal({ m, onClose }: { m: Military; onClose: () => void }) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 grid place-items-center bg-primary/95 p-3 sm:p-6 animate-in fade-in duration-200 lg:hidden">
      <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-background/20 text-primary-foreground hover:bg-background/30">
        <X className="h-5 w-5" />
      </button>
      <div onClick={(e) => e.stopPropagation()} className="grid w-full max-w-5xl grid-cols-1 bg-card rounded-sm overflow-hidden max-h-[92vh] overflow-y-auto">
        <div className="bg-muted">
          <img src={m.photo} alt={m.name} className="h-full w-full object-cover max-h-[40vh]" />
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center gap-2 text-gold">
            <Shield className="h-4 w-4" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em]">{m.rank}</span>
          </div>
          <h3 className="mt-2 font-display text-lg sm:text-2xl font-semibold leading-tight">{m.name}</h3>
          <div className="text-xs sm:text-sm text-muted-foreground">{m.appointment} · {m.unit}</div>
          <div className="gold-rule mt-3" />
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground">{m.profile}</p>
          <div className="mt-4">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-2">Social Media</div>
            <SocialLinks socials={m.socials} />
          </div>
        </div>
      </div>
    </div>
  );
}
