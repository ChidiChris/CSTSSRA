import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { DOCUMENTS } from "@/lib/site-data";
import { FileText, Download, Search } from "lucide-react";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Documents — CSTSS" },
      { name: "description", content: "Download the CSTSS handbook, admission guidelines, academic calendar and more." },
    ],
  }),
  component: DocumentsPage,
});

const CATS = ["All", ...Array.from(new Set(DOCUMENTS.map((d) => d.category)))];

function DocumentsPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const docs = useMemo(() => DOCUMENTS.filter((d) => (cat === "All" || d.category === cat) && d.name.toLowerCase().includes(q.toLowerCase())), [cat, q]);

  return (
    <>
      <PageHeader eyebrow="Resource Centre" title="Document Downloads" description="Official PDF documents — handbooks, admission guidelines, calendars and PTA records." />
      <section className="container-x py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`rounded-sm border px-3 py-1.5 text-sm ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search documents…"
              className="w-full rounded-sm border border-border bg-card py-2 pl-9 pr-3 text-sm outline-none focus:border-primary" />
          </div>
        </div>

        <ul className="mt-8 divide-y divide-border rounded-sm border border-border bg-card">
          {docs.map((d) => (
            <li key={d.name} className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-sm bg-muted text-primary"><FileText className="h-6 w-6" /></div>
                <div>
                  <div className="font-semibold">{d.name}</div>
                  <div className="text-xs text-muted-foreground">{d.category} · {d.size} · PDF</div>
                </div>
              </div>
              <a href={d.file} download={d.filename}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 md:self-auto self-start">
                <Download className="h-4 w-4" /> Download
              </a>
            </li>
          ))}
          {docs.length === 0 && <li className="p-8 text-center text-sm text-muted-foreground">No documents match your search.</li>}
        </ul>
      </section>
    </>
  );
}