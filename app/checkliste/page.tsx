import type { Metadata } from "next";
import ChecklisteClient from "@/components/forms/ChecklisteClient";

export const metadata: Metadata = {
  title: "IT-Sicherheitscheckliste",
  description:
    "Prüfen Sie in wenigen Minuten den Sicherheitsstand Ihres Unternehmens. 8 Bereiche, 41 Fragen – kostenlos und anonym.",
  openGraph: {
    title: "IT-Sicherheitscheckliste | Net-Evolution",
    description:
      "Prüfen Sie in wenigen Minuten den Sicherheitsstand Ihres Unternehmens. 8 Bereiche, 41 Fragen.",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IT-Sicherheitscheckliste",
  description:
    "Interaktive IT-Sicherheitscheckliste mit 8 Bereichen und 41 Fragen zur Selbstbewertung der Unternehmenssicherheit.",
  url: "https://www.net-evolution.de/checkliste",
  isPartOf: {
    "@type": "WebSite",
    name: "Net-Evolution",
    url: "https://www.net-evolution.de",
  },
};

export default function ChecklistePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,135,90,0.03)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent-cyan)] mb-4">
            Kostenlose Selbstbewertung
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] leading-tight">
            IT-Sicherheitscheckliste
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            8 Bereiche. 41 Fragen. Eine ehrliche Einschätzung, wo Ihr
            Unternehmen steht – und wo nicht.
          </p>
          <div className="mt-8 h-1 w-16 rounded-full bg-[var(--color-accent-green)] mx-auto" />
        </div>
      </section>

      {/* Info */}
      <section className="relative pb-8 md:pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4">
              <div className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-accent-green)]">
                Anonym
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                Keine Daten werden gespeichert oder übertragen
              </p>
            </div>
            <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4">
              <div className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-accent-green)]">
                15 Minuten
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                Durchschnittliche Bearbeitungszeit
              </p>
            </div>
            <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4">
              <div className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-accent-green)]">
                Sofort
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                Auswertung direkt nach Abschluss
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="relative py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-6">
          <ChecklisteClient />
        </div>
      </section>
    </>
  );
}
