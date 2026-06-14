export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-x py-14 md:py-20">
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.22em] text-gold">{eyebrow}</div>
        )}
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold">{title}</h1>
        <div className="gold-rule mt-5" />
        {description && (
          <p className="mt-5 max-w-2xl text-primary-foreground/80">{description}</p>
        )}
      </div>
    </section>
  );
}
