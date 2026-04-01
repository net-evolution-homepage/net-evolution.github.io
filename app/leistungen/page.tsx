import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { engagementModels } from "@/data/engagement-models";
import LeistungenAnimations from "./LeistungenAnimations";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Security Audits, Penetration Testing und NIS2-Compliance – meine Leistungen im Überblick. Methodisch. Dokumentiert. Verwertbar.",
  openGraph: {
    title: "Leistungen | Net-Evolution",
    description:
      "Security Audits, Penetration Testing und NIS2-Compliance – meine Leistungen im Überblick.",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Shield: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Crosshair: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="22" y1="12" x2="18" y2="12" />
      <line x1="6" y1="12" x2="2" y2="12" />
      <line x1="12" y1="6" x2="12" y2="2" />
      <line x1="12" y1="22" x2="12" y2="18" />
    </svg>
  ),
  FileCheck: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  ),
};

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--color-accent-green)] flex-shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,135,90,0.03)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent-cyan)] mb-4">
            IT-Security Services
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] leading-tight">
            Leistungen im Überblick
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Von der systematischen Sicherheitsanalyse bis zur nachhaltigen
            Compliance-Begleitung – ich liefere verwertbare Ergebnisse,
            keine Checklisten-Audits.
          </p>
          <div className="mt-8 h-1 w-16 rounded-full bg-[var(--color-accent-green)] mx-auto" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <LeistungenAnimations>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => (
                <div key={service.slug} className="group">
                  <Link href={`/leistungen/${service.slug}`} className="block h-full">
                    <div className="h-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-6 md:p-8 transition-all duration-300 hover:border-[var(--color-border-accent)] hover:shadow-sm">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="text-[var(--color-accent-green)]">
                          {iconMap[service.icon]}
                        </div>
                        <div>
                          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text-primary)]">
                            {service.title}
                          </h2>
                          <p className="text-sm text-[var(--color-accent-cyan)] mt-1">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2.5 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                            <CheckIcon />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Link indicator */}
                      <span className="inline-flex items-center text-sm font-semibold text-[var(--color-accent-green)] group-hover:underline">
                        Details ansehen
                        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </LeistungenAnimations>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-16 md:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-default)] to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
              Engagement-Modelle
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
              Flexibel. Transparent. Auf Ihre Anforderungen zugeschnitten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
            {engagementModels.map((model) => {
              return (
                <div
                  key={model.name}
                  className="w-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-[var(--color-border-accent)]"
                >

                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text-primary)]">
                    {model.name}
                  </h3>

                  <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {model.description}
                  </p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href={model.cta.href}
                      className="inline-flex w-full items-center justify-center px-6 py-3 rounded-md text-sm font-semibold transition-colors border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-green)] hover:text-[var(--color-accent-green)]"
                    >
                      {model.cta.label}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-12 text-center text-sm text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Keine Preise auf der Website – jedes Engagement ist individuell.
            Kontaktieren Sie mich für ein maßgeschneidertes Angebot.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-tertiary)] to-[var(--color-bg-primary)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-green)] to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,135,90,0.02)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] leading-tight">
            Bereit für eine unabhängige Sicherheitsbewertung?
          </h2>
          <p className="mt-6 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
            In einem kostenlosen Erstgespräch analysiere ich gemeinsam mit Ihnen den
            Status quo und definiere den optimalen Prüfungsumfang.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-[var(--color-accent-green)] text-[var(--color-bg-primary)] font-semibold text-sm hover:bg-[var(--color-accent-green-dim)] transition-colors"
            >
              Erstgespräch vereinbaren
            </Link>
            <a
              href="tel:+4915679708019"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Oder direkt anrufen: +49 15679 708019
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-green)] to-transparent opacity-30" />
      </section>
    </>
  );
}
