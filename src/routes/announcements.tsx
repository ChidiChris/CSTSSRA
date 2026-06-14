import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ANNOUNCEMENTS } from "@/lib/site-data";
import { Bell } from "lucide-react";

export const Route = createFileRoute("/announcements")({
  head: () => ({
    meta: [
      { title: "Announcements — CSTSS" },
      { name: "description", content: "Official announcements, notices and updates from the Command Science and Technical Secondary School." },
    ],
  }),
  component: AnnouncementsPage,
});

function AnnouncementsPage() {
  return (
    <>
      <PageHeader eyebrow="Notice Board" title="Announcements" description="Official notices, updates and circulars from the school administration." />
      <section className="container-x py-12">
        <ul className="divide-y divide-border rounded-sm border border-border bg-card">
          {ANNOUNCEMENTS.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={i * 60}>
                <div className="flex flex-col gap-2 p-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex gap-4">
                    <div className="hidden sm:grid h-10 w-10 place-items-center rounded-sm bg-primary text-primary-foreground shrink-0">
                      <Bell className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gold">{a.tag}</div>
                      <div className="mt-1 font-medium">{a.title}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground md:text-right">
                    {new Date(a.date).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}