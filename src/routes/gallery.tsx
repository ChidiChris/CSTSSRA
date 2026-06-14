import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { GALLERY } from "@/lib/site-data";
import { X, Plus } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — CSTSS" },
      { name: "description", content: "Photographs of cadet life, parades, laboratories, sports and graduation at CSTSS." },
    ],
  }),
  component: GalleryPage,
});

const CATS = ["All", ...Array.from(new Set(GALLERY.map((g) => g.category)))];
const PAGE = 8;

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const [visible, setVisible] = useState(PAGE);

  const items = useMemo(
    () => GALLERY.filter((g) => cat === "All" || g.category === cat),
    [cat],
  );

  useEffect(() => { setVisible(PAGE); setOpen(null); }, [cat]);

  const shown = items.slice(0, visible);
  const canLoadMore = visible < items.length;

  return (
    <>
      <PageHeader eyebrow="Life at CSTSS" title="Photo Gallery" description="A glimpse into parade, classroom, laboratory and boarding life." />
      <section className="container-x py-12">
        <div className="flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`rounded-sm border px-3 py-1.5 text-sm ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Responsive masonry via CSS columns */}
        <div className="mt-8 columns-2 gap-3 sm:columns-2 md:columns-3 lg:columns-4">
          {shown.map((g, idx) => (
            <button
              key={`${g.title}-${idx}`}
              onClick={() => setOpen(idx)}
              className="group relative mb-3 block w-full overflow-hidden rounded-sm break-inside-avoid text-left"
            >
              <img
                src={g.image}
                alt={g.title}
                loading="lazy"
                className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-[10px] uppercase tracking-wider text-gold">{g.category}</div>
                <div className="text-sm font-semibold text-primary-foreground">{g.title}</div>
              </div>
            </button>
          ))}
        </div>

        {canLoadMore && (
          <div className="mt-10 flex justify-center">
            <button onClick={() => setVisible((v) => v + PAGE)} className="inline-flex items-center gap-2 rounded-sm border border-gold bg-card px-6 py-3 text-sm font-semibold text-primary hover:bg-gold hover:text-gold-foreground transition-colors">
              <Plus className="h-4 w-4" /> View More Pictures
            </button>
          </div>
        )}
        {!canLoadMore && items.length > PAGE && (
          <div className="mt-10 text-center text-xs uppercase tracking-wider text-muted-foreground">End of gallery</div>
        )}
      </section>

      {open !== null && shown[open] && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-50 grid place-items-center bg-primary/95 p-4 md:p-8">
          <button onClick={() => setOpen(null)} className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-background/20 text-primary-foreground hover:bg-background/30" aria-label="Close"><X className="h-5 w-5" /></button>
          <div onClick={(e) => e.stopPropagation()} className="grid w-full max-w-6xl gap-6 md:grid-cols-5 bg-card rounded-sm overflow-hidden">
            <div className="md:col-span-3 bg-primary">
              <img src={shown[open].image} alt={shown[open].title} className="w-full h-auto object-contain max-h-[80vh]" />
            </div>
            <div className="md:col-span-2 p-6 md:p-8 flex flex-col">
              <div className="text-xs uppercase tracking-[0.22em] text-gold">{shown[open].category}</div>
              <h3 className="mt-2 font-display text-2xl font-semibold">{shown[open].title}</h3>
              <div className="gold-rule mt-4" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{shown[open].description}</p>
              <div className="mt-auto pt-6 text-xs text-muted-foreground">
                Image {open + 1} of {shown.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
