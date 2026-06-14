import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Bell, Users, GraduationCap, Building2, Shield } from "lucide-react";
import heroParade from "@/assets/hero-parade.png";
import flag from "@/assets/flag.jpg";
import heroLab from "@/assets/hero-science.png";
import heroSkyview from "@/assets/hero-skyview.png";
import heroDrill from "@/assets/hero-drill.png";
import heroSkyv from "@/assets/hero-skyv.jpg";
import heroInspect from "@/assets/hero-inspect.png";
import { ANNOUNCEMENTS, COMMANDANT, GALLERY, SITE, STAFF, STATS } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Command Science and Technical Secondary School" },
      { name: "description", content: "Official website of the Command Science and Technical Secondary School. Discipline, knowledge, service." },
    ],
  }),
  component: HomePage,
});

const SLIDES = [
  { img: heroInspect, eyebrow: "Excellence in Action", title: "Where Leaders are Made", body: "CSTSS molds young minds into disciplined leaders ready to serve Nigeria." },
  { img: heroSkyv, eyebrow: "Soaring High", title: "Where Ambitions Take Flight", body: "At CSTSS, we nurture dreams and equip cadets to reach new heights." },
  { img: flag, eyebrow: "Welcome to CSTSS", title: "Discipline. Knowledge. Service.", body: "A federal military boarding institution shaping disciplined, knowledgeable young Nigerians." },
  { img: heroParade, eyebrow: "On Parade", title: "Discipline. Bearing. Tradition.", body: "Cadets begin each day with parade — the foundation of order and command." },
  { img: heroLab, eyebrow: "Academic Excellence", title: "Science & Technical Mastery", body: "Modern laboratories and workshops where curiosity meets rigour." },
  { img: heroSkyview, eyebrow: "Campus Life", title: "A Home for Future Leaders", body: "Secure boarding facilities, supervised round-the-clock by trained staff." },
  { img: heroDrill, eyebrow: "Cadet Drills", title: "Forged Through Practice", body: "Daily drill instills the discipline that defines every CSTSS cadet." },
];

function HeroSlider() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    timer.current = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);
  const go = (next: number) => {
    setI((next + SLIDES.length) % SLIDES.length);
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
  };
  return (
    <section className="relative h-[78vh] min-h-[520px] max-h-[820px] w-full overflow-hidden bg-primary">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <img
            src={s.img}
            alt={s.title}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            {...(idx === 0
              ? { fetchPriority: "high" as const, decoding: "async" as const }
              : { loading: "lazy" as const, decoding: "async" as const })}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="container-x pb-20 md:pb-0">
              <div className="max-w-2xl text-primary-foreground">
                <div className="text-xs uppercase tracking-[0.28em] text-gold">{s.eyebrow}</div>
                <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-[1.05]">{s.title}</h1>
                <div className="gold-rule mt-6" />
                <p className="mt-5 text-base md:text-lg text-primary-foreground/85">{s.body}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/about" className="inline-flex items-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground hover:brightness-95">
                    About the School <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/documents" className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                    Admissions & Documents
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button onClick={() => go(i - 1)} aria-label="Previous slide"
          className="grid h-10 w-10 place-items-center rounded-full bg-background/20 text-primary-foreground backdrop-blur hover:bg-background/30">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => go(i + 1)} aria-label="Next slide"
          className="grid h-10 w-10 place-items-center rounded-full bg-background/20 text-primary-foreground backdrop-blur hover:bg-background/30">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

function CountUp({ to }: { to: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const dur = 1400; const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n.toLocaleString()}</span>;
}

function AnnouncementMarquee() {
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];
  return (
    <section aria-label="Latest announcements" className="marquee relative overflow-hidden border-y border-gold/40 bg-primary text-primary-foreground">
      <div className="absolute left-0 top-0 bottom-0 z-10 hidden sm:flex items-center gap-2 bg-gold px-4 text-gold-foreground">
        <Bell className="h-4 w-4" />
        <span className="text-xs font-bold uppercase tracking-[0.18em]">Announcements</span>
      </div>
      <div className="py-3 sm:pl-52 whitespace-nowrap overflow-hidden">
        <div className="marquee-track">
          {items.map((a, idx) => (
            <Link key={idx} to="/announcements" className="inline-flex items-center gap-3 text-sm hover:text-gold">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="uppercase tracking-wider text-[10px] text-gold">{a.tag}</span>
              <span className="font-medium">{a.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <HeroSlider />
      <AnnouncementMarquee />

      <section className="container-x py-20">
        <Reveal>
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-sm border-4 border-gold shadow-lg">
              <img src={COMMANDANT.image} alt={COMMANDANT.name} width={800} height={1024} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-4 text-center">
              <div className="font-display text-xl font-semibold">{COMMANDANT.name}</div>
              <div className="text-sm uppercase tracking-wider text-gold">Commandant</div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Welcome Address</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">A Word from the Commandant</h2>
            <div className="gold-rule mt-4" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">"{COMMANDANT.message}"</p>
            <p className="mt-6 text-foreground">
              <span className="font-semibold">{SITE.name}</span> ({SITE.short}) is a federal military
              boarding institution where academic excellence is forged with the timeless
              virtues of discipline, courage, and service to nation.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold">
              Read full biography <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-16">
          <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/[0.04] p-6 md:p-8 text-center transition-all hover:border-gold/60 hover:bg-primary-foreground/[0.07] hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 h-1 w-12 bg-gold" />
                <div className="font-display text-4xl md:text-5xl font-semibold text-gold">
                  <CountUp to={s.value} />+
                </div>
                <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.18em] text-primary-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          </Reveal>
        </div>
      </section>

      {/* Quick nav */}
      <section className="container-x py-20">
        <Reveal>
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Quick Access</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">Explore the School</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/about" as const, label: "About Us", icon: Building2 },
            { to: "/staff" as const, label: "Staff Directory", icon: Users },
            { to: "/departments" as const, label: "Departments", icon: GraduationCap },
            { to: "/military" as const, label: "Military Personnel", icon: Shield },
          ].map(({ to, label, icon: Icon }) => (
            <Link key={to} to={to} className="group rounded-sm border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-md">
              <Icon className="h-7 w-7 text-primary group-hover:text-gold" />
              <div className="mt-4 font-display text-lg font-semibold">{label}</div>
              <div className="mt-1 text-sm text-muted-foreground">Visit page</div>
              <ArrowRight className="mt-4 h-4 w-4 text-primary group-hover:text-gold group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
        </Reveal>
      </section>

      {/* Announcements + Leadership */}
      <section className="container-x grid gap-12 py-10 lg:grid-cols-3">
        <Reveal className="lg:col-span-2"><div>
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-gold" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Latest Announcements</h2>
          </div>
          <div className="gold-rule mt-3" />
          <ul className="mt-6 divide-y divide-border rounded-sm border border-border bg-card">
            {ANNOUNCEMENTS.map((a) => (
              <li key={a.title} className="flex flex-col gap-2 p-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gold">{a.tag}</div>
                  <div className="mt-1 font-medium">{a.title}</div>
                </div>
                <div className="text-sm text-muted-foreground">{new Date(a.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</div>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Link to="/announcements" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold">
              See more announcements <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div></Reveal>
        <Reveal delay={120}><div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Leadership</h2>
          <div className="gold-rule mt-3" />
          <div className="mt-6 space-y-4">
            {STAFF.slice(0, 3).map((s) => (
              <div key={s.id} className="flex gap-4 rounded-sm border border-border bg-card p-4">
                <img src={s.photo} alt={s.name} className="h-16 w-16 rounded-sm object-cover" loading="lazy" />
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-sm text-gold">{s.position}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.qualification}</div>
                </div>
              </div>
            ))}
            <Link to="/staff" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold">
              View full directory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div></Reveal>
      </section>

      {/* Gallery preview */}
      <section className="container-x py-20">
        <Reveal>
        <div className="flex items-end justify-between mb-8 gap-3">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Life at CSTSS</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">Gallery Preview</h2>
          </div>
          <Link to="/gallery" className="shrink-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-gold whitespace-nowrap">
            See all <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[heroParade, heroLab, heroDrill, heroSkyview, heroSkyv, heroInspect].map((src, idx) => (
            <div key={idx} className="group relative aspect-square overflow-hidden rounded-sm">
              <img src={src} alt={GALLERY[idx].title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-[10px] uppercase tracking-wider text-gold">{GALLERY[idx].category}</div>
                <div className="text-sm font-semibold text-primary-foreground">{GALLERY[idx].title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center sm:hidden">
          <Link to="/gallery" className="inline-flex items-center gap-2 rounded-sm border border-gold bg-card px-5 py-2.5 text-sm font-semibold text-primary hover:bg-gold hover:text-gold-foreground transition-colors">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        </Reveal>
      </section>

    </>
  );
}
