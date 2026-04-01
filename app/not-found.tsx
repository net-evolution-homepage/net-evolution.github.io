import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,135,90,0.03)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <p className="font-[family-name:var(--font-display)] text-8xl md:text-9xl font-bold text-[var(--color-accent-green)] opacity-20 select-none">
          404
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--color-accent-green)] text-white font-semibold text-sm tracking-wide hover:bg-[var(--color-accent-green-dim)] transition-colors"
          >
            Zur Startseite
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--color-border-default)] text-[var(--color-text-primary)] font-semibold text-sm tracking-wide hover:bg-[var(--color-bg-secondary)] transition-colors"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
