import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, Bell } from "lucide-react";
import { SITE, ANNOUNCEMENTS } from "@/lib/site-data";
import { BackToTop } from "@/components/BackToTop";


const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/military", label: "Military" },
  { to: "/staff", label: "Staff" },
  { to: "/corpers", label: "NYSC Corpers" },
  { to: "/departments", label: "Departments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

const FOOTER_EXTRA = [
  { to: "/announcements", label: "Announcements" },
  { to: "/kitchen", label: "Kitchen & Catering" },
  { to: "/documents", label: "Documents" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-primary text-primary-foreground">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <div className="grid h-10 w-10 place-items-center rounded-sm bg-gold text-gold-foreground shrink-0">
            <Shield className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="font-display text-sm md:text-base font-semibold leading-tight truncate">
              {SITE.short}
            </div>
            <div className="hidden md:block text-[10px] uppercase tracking-[0.18em] text-primary-foreground/70 truncate">
              {SITE.motto}
            </div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => {
            const active = path === n.to || (n.to !== "/" && path.startsWith(n.to));
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary-foreground/10 text-gold"
                    : "text-primary-foreground/85 hover:bg-primary-foreground/10"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden rounded-sm p-2 hover:bg-primary-foreground/10"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-primary-foreground/10 bg-primary">
          <nav className="container-x flex flex-col py-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-2.5 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 bg-navy text-navy-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="md:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-sm bg-gold text-gold-foreground">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-semibold">{SITE.short}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-navy-foreground/70">
                {SITE.motto}
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-navy-foreground/80">
            {SITE.name} — a federal military boarding institution committed to
            shaping disciplined, knowledgeable, and service-minded young Nigerians.
          </p>
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gold">Follow Us</h4>
            <div className="mt-3 flex gap-2">
              {[
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Twitter, href: "https://twitter.com", label: "Twitter / X" },
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-sm border border-navy-foreground/20 text-navy-foreground/80 transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            {NAV.slice(1, 6).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">{n.label}</Link>
              </li>
            ))}
            {FOOTER_EXTRA.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> {SITE.address}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /> {SITE.email}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> {SITE.phone}</li>
          </ul>
        </div>
        <div>
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold"><Bell className="h-4 w-4" /> Announcements</h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            {ANNOUNCEMENTS.slice(0, 3).map((a) => (
              <li key={a.title}>
                <Link to="/announcements" className="block hover:text-gold">
                  <div className="text-[10px] uppercase tracking-wider text-gold/90">{a.tag}</div>
                  <div className="mt-0.5 leading-snug">{a.title}</div>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/announcements" className="text-xs font-semibold uppercase tracking-wider text-gold hover:underline">View all →</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-x flex flex-col gap-2 py-4 text-xs text-navy-foreground/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Official institutional website.</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

// import { Link, Outlet, useRouterState } from "@tanstack/react-router";
// import { useState } from "react";
// import { Menu, X, Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, Bell } from "lucide-react";
// import { SITE, ANNOUNCEMENTS } from "@/lib/site-data";
// import { BackToTop } from "@/components/BackToTop";


// const NAV = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/military", label: "Military" },
//   { to: "/staff", label: "Staff" },
//   { to: "/corpers", label: "NYSC Corpers" },
//   { to: "/departments", label: "Departments" },
//   { to: "/gallery", label: "Gallery" },
//   { to: "/contact", label: "Contact" },
// ] as const;

// const FOOTER_EXTRA = [
//   { to: "/announcements", label: "Announcements" },
//   { to: "/kitchen", label: "Kitchen & Catering" },
//   { to: "/documents", label: "Documents" },
// ] as const;

// function Header() {
//   const [open, setOpen] = useState(false);
//   const path = useRouterState({ select: (s) => s.location.pathname });
//   return (
//     <header className="sticky top-0 z-40 border-b border-border bg-primary text-primary-foreground">
//       <div className="container-x flex h-16 items-center justify-between gap-4">
//         <Link to="/" className="flex items-center gap-3 min-w-0">
//           <div className="grid h-10 w-10 place-items-center rounded-sm bg-gold text-gold-foreground shrink-0">
//             <Shield className="h-5 w-5" />
//           </div>
//           <div className="min-w-0">
//             <div className="font-display text-sm md:text-base font-semibold leading-tight truncate">
//               {SITE.short}
//             </div>
//             <div className="hidden md:block text-[10px] uppercase tracking-[0.18em] text-primary-foreground/70 truncate">
//               {SITE.motto}
//             </div>
//           </div>
//         </Link>
//         <nav className="hidden xl:flex items-center gap-1">
//           {NAV.map((n) => {
//             const active = path === n.to || (n.to !== "/" && path.startsWith(n.to));
//             return (
//               <Link
//                 key={n.to}
//                 to={n.to}
//                 className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
//                   active
//                     ? "bg-primary-foreground/10 text-gold"
//                     : "text-primary-foreground/85 hover:bg-primary-foreground/10"
//                 }`}
//               >
//                 {n.label}
//               </Link>
//             );
//           })}
//         </nav>
//         <button
//           onClick={() => setOpen((o) => !o)}
//           className="xl:hidden rounded-sm p-2 hover:bg-primary-foreground/10"
//           aria-label="Toggle navigation"
//         >
//           {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//         </button>
//       </div>
//       {open && (
//         <div className="xl:hidden border-t border-primary-foreground/10 bg-primary">
//           <nav className="container-x flex flex-col py-2">
//             {NAV.map((n) => (
//               <Link
//                 key={n.to}
//                 to={n.to}
//                 onClick={() => setOpen(false)}
//                 className="rounded-sm px-3 py-2.5 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10"
//               >
//                 {n.label}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// function Footer() {
//   return (
//     <footer className="mt-20 bg-navy text-navy-foreground">
//       <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
//         <div className="md:col-span-2 lg:col-span-2">
//           <div className="flex items-center gap-3">
//             <div className="grid h-10 w-10 place-items-center rounded-sm bg-gold text-gold-foreground">
//               <Shield className="h-5 w-5" />
//             </div>
//             <div>
//               <div className="font-display font-semibold">{SITE.short}</div>
//               <div className="text-xs uppercase tracking-[0.18em] text-navy-foreground/70">
//                 {SITE.motto}
//               </div>
//             </div>
//           </div>
//           <p className="mt-4 max-w-md text-sm text-navy-foreground/80">
//             {SITE.name} — a federal military boarding institution committed to
//             shaping disciplined, knowledgeable, and service-minded young Nigerians.
//           </p>
//           <div className="mt-6">
//             <h4 className="text-xs font-semibold uppercase tracking-wider text-gold">Follow Us</h4>
//             <div className="mt-3 flex gap-2">
//               {[
//                 { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
//                 { Icon: Twitter, href: "https://twitter.com", label: "Twitter / X" },
//                 { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
//                 { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
//                 { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
//               ].map(({ Icon, href, label }) => (
//                 <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
//                   className="grid h-9 w-9 place-items-center rounded-sm border border-navy-foreground/20 text-navy-foreground/80 transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground">
//                   <Icon className="h-4 w-4" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div>
//           <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Explore</h4>
//           <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
//             {NAV.slice(1, 6).map((n) => (
//               <li key={n.to}>
//                 <Link to={n.to} className="hover:text-gold">{n.label}</Link>
//               </li>
//             ))}
//             {FOOTER_EXTRA.map((n) => (
//               <li key={n.to}>
//                 <Link to={n.to} className="hover:text-gold">{n.label}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
//           <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
//             <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> {SITE.address}</li>
//             <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /> {SITE.email}</li>
//             <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> {SITE.phone}</li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold"><Bell className="h-4 w-4" /> Announcements</h4>
//           <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
//             {ANNOUNCEMENTS.slice(0, 3).map((a) => (
//               <li key={a.title}>
//                 <Link to="/announcements" className="block hover:text-gold">
//                   <div className="text-[10px] uppercase tracking-wider text-gold/90">{a.tag}</div>
//                   <div className="mt-0.5 leading-snug">{a.title}</div>
//                 </Link>
//               </li>
//             ))}
//             <li>
//               <Link to="/announcements" className="text-xs font-semibold uppercase tracking-wider text-gold hover:underline">View all →</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="border-t border-navy-foreground/10">
//         <div className="container-x flex flex-col gap-2 py-4 text-xs text-navy-foreground/60 md:flex-row md:items-center md:justify-between">
//           <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
//           <span>Official institutional website.</span>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export function SiteLayout() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <Header />
//       <main className="flex-1">
//         <Outlet />
//       </main>
//       <Footer />
//       <BackToTop />
//     </div>
//   );
// }
