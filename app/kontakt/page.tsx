import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit Net-Evolution auf. Kostenlose Erstberatung zu Security Audits, Penetration Testing und IT-Sicherheit.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Net-Evolution",
  description:
    "IT-Security Audits, Penetration Testing und NIS2-Compliance für Unternehmen in Deutschland.",
  url: "https://www.net-evolution.de",
  telephone: "+4915679708019",
  email: "info@net-evolution.de",
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] md:text-5xl">
            Kontakt aufnehmen
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--color-text-secondary)]">
            Kostenloses Erstgespräch, Frage zum Ablauf oder konkretes Projekt –
            schreiben Sie mir.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="mailto:info@net-evolution.de"
              className="group flex items-center gap-3 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4 transition-colors hover:border-[var(--color-accent-green)]/30"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-green)]">E-Mail</p>
                <p className="text-xs text-[var(--color-text-muted)]">info@net-evolution.de</p>
              </div>
            </a>

            <a
              href="tel:+4915679708019"
              className="group flex items-center gap-3 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4 transition-colors hover:border-[var(--color-accent-green)]/30"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-green)]">Telefon</p>
                <p className="text-xs text-[var(--color-text-muted)]">+49 15679 708019</p>
              </div>
            </a>

            <a
              href="https://wa.me/4915679708019"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-4 transition-colors hover:border-[var(--color-accent-green)]/30"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-accent-green)" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-green)]">WhatsApp</p>
                <p className="text-xs text-[var(--color-text-muted)]">Nachricht schreiben</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-6 md:p-10">
            <h2 className="mb-2 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Nachricht senden
            </h2>
            <p className="mb-8 text-sm text-[var(--color-text-muted)]">
              Antwortzeit: ~24h
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
