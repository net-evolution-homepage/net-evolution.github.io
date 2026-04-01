import type { Metadata } from "next";
import WaitlistForm from "@/components/forms/WaitlistForm";

export const metadata: Metadata = {
  title: "Recovery & Monitoring Suite – Warteliste",
  description:
    "Tragen Sie sich in die Warteliste für die Recovery & Monitoring Suite von Net-Evolution ein. Automatisierte Wiederherstellung, Echtzeit-Monitoring und Compliance-Dashboards.",
  openGraph: {
    title: "Recovery & Monitoring Suite – Warteliste | Net-Evolution",
    description:
      "Tragen Sie sich in die Warteliste für die Recovery & Monitoring Suite von Net-Evolution ein.",
  },
};

const features = [
  {
    title: "Automatisierte Recovery",
    description:
      "Vordefinierte Wiederherstellungsprozesse, die im Ernstfall automatisch greifen und Ausfallzeiten minimieren.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </svg>
    ),
  },
  {
    title: "Echtzeit-Monitoring",
    description:
      "Kontinuierliche Überwachung Ihrer gesamten IT-Infrastruktur mit sofortiger Anomalie-Erkennung.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Intelligentes Alerting",
    description:
      "Kontextbasierte Benachrichtigungen, die relevante Vorfälle priorisieren und Alert-Fatigue vermeiden.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "Compliance-Dashboards",
    description:
      "Übersichtliche Dashboards für NIS2, ISO 27001 und DSGVO mit automatischem Compliance-Tracking.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Backup-Validierung",
    description:
      "Automatische Prüfung der Backup-Integrität und Wiederherstellbarkeit mit detaillierten Reports.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Incident-Timeline",
    description:
      "Lückenlose Dokumentation aller Sicherheitsvorfälle mit forensischer Timeline-Analyse.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function WaitelistePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/20 mb-6">
            Coming Soon
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] leading-tight">
            Recovery &amp; Monitoring{" "}
            <span className="text-[var(--color-accent-cyan)]">Suite</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Das kommende All-in-One-Tool von Net-Evolution für automatisierte
            Wiederherstellung, Echtzeit-Monitoring und Compliance-Management.
            Entwickelt für Unternehmen, die IT-Sicherheit ernst nehmen.
          </p>
          <div className="mt-8 h-1 w-16 rounded-full bg-[var(--color-accent-cyan)] mx-auto" />
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              Geplante Features
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
              Ein Werkzeug, das die Lücke zwischen Monitoring, Recovery und
              Compliance schliesst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-6 transition-all duration-300 hover:border-[var(--color-border-accent)] hover:shadow-sm"
              >
                <div className="text-[var(--color-accent-cyan)] mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="relative py-16 md:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-default)] to-transparent" />
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              Auf die Warteliste setzen
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
              Sichern Sie sich frühzeitigen Zugang zur Recovery &amp; Monitoring
              Suite. Ich informiere Sie, sobald die erste Version verfügbar ist.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
