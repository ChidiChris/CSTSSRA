import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/lib/site-data";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CSTSS" },
      { name: "description", content: "Get in touch with the Command Science and Technical Secondary School." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Get in Touch" title="Contact Us" description="Office of the Commandant and general enquiries." />
      <section className="container-x py-12 space-y-10">
        {/* Horizontal info row */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, label: "Address", value: SITE.address },
            { icon: Mail, label: "Email", value: SITE.email },
            { icon: Phone, label: "Phone", value: SITE.phone },
            { icon: Clock, label: "Office Hours", value: SITE.hours },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4 rounded-sm border border-border bg-card p-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-gold">{label}</div>
                <div className="mt-0.5 text-sm break-words">{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form + Map side-by-side */}
        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-sm border border-border bg-card p-6 grid gap-4 md:grid-cols-2 self-start">
            <div className="md:col-span-2">
              <h3 className="font-display text-xl font-semibold">Send us a message</h3>
              <div className="gold-rule mt-2" />
            </div>
            <div className="md:col-span-1">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Full name</label>
              <input required className="mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 outline-none focus:border-primary" />
            </div>
            <div className="md:col-span-1">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input required type="email" className="mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 outline-none focus:border-primary" />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Subject</label>
              <input className="mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 outline-none focus:border-primary" />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea required rows={6} className="mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 outline-none focus:border-primary" />
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              {sent ? (
                <div className="text-sm text-primary">Thank you — your message has been received.</div>
              ) : <span />}
              <button className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                <Send className="h-4 w-4" /> Send message
              </button>
            </div>
          </form>

          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[480px] w-full overflow-hidden rounded-sm border border-border">
            <iframe
              title="School location"
              src="https://www.google.com/maps?q=Abuja,Nigeria&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
