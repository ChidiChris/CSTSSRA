import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { COMMANDANT, SITE } from "@/lib/site-data";
import { Award, BookOpen, Shield, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${SITE.short}` },
      { name: "description", content: "History, mission, vision and leadership of the Command Science and Technical Secondary School." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Shield, title: "Discipline", body: "Order, punctuality, and self-mastery in every aspect of school life." },
  { icon: BookOpen, title: "Knowledge", body: "A rigorous academic programme rooted in science and technical literacy." },
  { icon: Award, title: "Service", body: "Cadets are formed to give back — to community, country, and humanity." },
  { icon: Target, title: "Integrity", body: "Honesty in word and conduct, both in barracks and in the classroom." },
];

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About the School" title="A Tradition of Discipline and Excellence" description={`${SITE.name} (${SITE.short}) was established to give Nigeria's young men and women a structured, values-driven, and academically rigorous education — combining the best of military training with modern secondary schooling.`} />

      <section className="container-x py-16 grid gap-10 md:grid-cols-3">
        <article className="md:col-span-1">
          <h2 className="font-display text-2xl font-semibold">Our History</h2>
          <div className="gold-rule mt-3" />
          <p className="mt-5 text-muted-foreground">
            Founded in 1988 as a pilot programme of the Federal Ministry of Defence,
            CSTSS has grown into one of Nigeria's foremost military boarding
            secondary schools, producing thousands of disciplined graduates who
            now serve in the armed forces, public service, academia, and industry.
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl font-semibold">Mission</h2>
          <div className="gold-rule mt-3" />
          <p className="mt-5 text-muted-foreground">
            To form principled, disciplined, and academically excellent young
            Nigerians prepared for leadership and service.
          </p>
        </article>
        <article>
          <h2 className="font-display text-2xl font-semibold">Vision</h2>
          <div className="gold-rule mt-3" />
          <p className="mt-5 text-muted-foreground">
            To stand as Africa's leading model of military-styled secondary
            education, where character and scholarship are inseparable.
          </p>
        </article>
      </section>

      <section className="bg-muted/40 border-y border-border">
        <div className="container-x py-16">
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Core Values</div>
          <h2 className="mt-2 font-display text-3xl font-semibold">What We Stand For</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-sm border border-border bg-card p-6">
                <Icon className="h-7 w-7 text-gold" />
                <div className="mt-4 font-display text-lg font-semibold">{title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold">Military Discipline Philosophy</h2>
          <div className="gold-rule mt-3" />
          <p className="mt-5 text-muted-foreground">
            Discipline at CSTSS is not punishment — it is formation. From reveille
            to lights-out, every cadet's day is structured around order, respect,
            and personal accountability. The military framework provides the
            scaffolding; character is the goal.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold">Academic Excellence</h2>
          <div className="gold-rule mt-3" />
          <p className="mt-5 text-muted-foreground">
            We deliver the full Nigerian secondary curriculum with an emphasis on
            science, mathematics, and technical subjects. Our results consistently
            place CSTSS among the highest-performing schools nationwide.
          </p>
        </div>
      </section>

      {/* Commandant profile */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-20 grid gap-12 md:grid-cols-5 md:items-center">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-sm border-4 border-gold">
              <img src={COMMANDANT.image} alt={COMMANDANT.name} width={800} height={1024} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Office of the Commandant</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">{COMMANDANT.name}</h2>
            <div className="mt-2 text-gold">{COMMANDANT.rank} · Commandant</div>
            <div className="gold-rule mt-5" />
            <p className="mt-6 text-primary-foreground/85">{COMMANDANT.bio}</p>
            <blockquote className="mt-6 border-l-4 border-gold pl-5 italic text-primary-foreground/90">
              "{COMMANDANT.message}"
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
