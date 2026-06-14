import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { UtensilsCrossed, ShieldCheck, Clock } from "lucide-react";

export const Route = createFileRoute("/kitchen")({
  head: () => ({
    meta: [
      { title: "Kitchen & Catering — CSTSS" },
      { name: "description", content: "Boarding feeding operations, hygiene standards, and kitchen staff at CSTSS." },
    ],
  }),
  component: KitchenPage,
});

import kitchenEkong from "@/assets/kitchen/ekong.jpg";
import kitchenAbubakar from "@/assets/kitchen/abubakar.jpg";
import kitchenMadu from "@/assets/kitchen/madu.jpg";
import kitchenNnamdi from "@/assets/kitchen/nnamdi.jpg";

const STAFF = [
  { name: "Mrs. R. O. Ekong", role: "Catering Manager", years: 15, photo: kitchenEkong },
  { name: "Mr. I. T. Abubakar", role: "Head Chef", years: 12, photo: kitchenAbubakar },
  { name: "Mrs. G. P. Madu", role: "Hygiene Officer", years: 8, photo: kitchenMadu },
  { name: "Mr. C. J. Nnamdi", role: "Storekeeper", years: 6, photo: kitchenNnamdi },
];

function KitchenPage() {
  return (
    <>
      <PageHeader eyebrow="Boarding Life" title="Kitchen & Catering Unit" description="Nutritious, well-balanced meals served three times daily under strict hygiene protocols." />
      <section className="container-x py-12 grid gap-6 md:grid-cols-3">
        {[
          { icon: UtensilsCrossed, title: "Three Hot Meals Daily", body: "Breakfast, lunch, and dinner served at fixed timings in the central dining hall." },
          { icon: ShieldCheck, title: "Strict Hygiene Standards", body: "Daily inspections, certified food handlers, and routine medical screening." },
          { icon: Clock, title: "Structured Meal Times", body: "Meal periods are part of the cadet routine — punctuality is enforced." },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-sm border border-border bg-card p-6">
            <Icon className="h-7 w-7 text-gold" />
            <div className="mt-4 font-display text-lg font-semibold">{title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </section>

      <section className="container-x pb-16">
        <h2 className="font-display text-2xl font-semibold">Kitchen Staff</h2>
        <div className="gold-rule mt-3" />
        <div className="mt-6 grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-4">
          {STAFF.map((s) => (
            <div key={s.name} className="overflow-hidden rounded-sm border border-border bg-card">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img src={s.photo} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="font-semibold">{s.name}</div>
                <div className="text-sm text-gold">{s.role}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.years} years of service</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="container-x py-12">
          <h2 className="font-display text-2xl font-semibold">Hygiene & Feeding Policy</h2>
          <div className="gold-rule mt-3" />
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li className="flex gap-3"><span className="text-gold">▸</span>All food handlers undergo quarterly medical screening and food-safety certification.</li>
            <li className="flex gap-3"><span className="text-gold">▸</span>Daily kitchen and dining-hall inspections by the Hygiene Officer.</li>
            <li className="flex gap-3"><span className="text-gold">▸</span>Weekly menu published in advance and balanced by a registered nutritionist.</li>
            <li className="flex gap-3"><span className="text-gold">▸</span>Special dietary needs accommodated on medical or religious grounds.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
