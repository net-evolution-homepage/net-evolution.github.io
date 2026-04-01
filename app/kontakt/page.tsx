import type { Metadata } from "next";
import Link from "next/link";
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
    "IT-Security Audits, Penetration Testing und NIS2-Compliance fuer Unternehmen in Deutschland.",
  url: "https://www.net-evolution.de",
  telephone: "+4915679708019",
  email: "info@net-evolution.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Weinbergstrasse 17",
    addressLocality: "Dorsheim",
    postalCode: "55452",
    addressCountry: "DE",
  },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative py-24 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,135,90,0.02)_0%,transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Page header */}
          <div className="mb-16 text-center">
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] md:text-5xl">
              Kontakt
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Lassen Sie mich in einem unverbindlichen Erstgespräch
              herausfinden, wie ich Ihre IT-Sicherheit stärken kann.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column: contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
                  Direkt erreichen
                </h2>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  Für eine schnelle Rückmeldung nutzen Sie gerne
                  einen der folgenden Kanäle.
                </p>
              </div>

              {/* Contact items */}
              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:info@net-evolution.de"
                  className="group flex items-start gap-4 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-5 transition-colors hover:border-[var(--color-accent-green)]/30 hover:bg-[var(--color-bg-card-hover)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--color-accent-green)]/10">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-accent-green)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-green)]">
                      E-Mail
                    </p>
                    <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">
                      info@net-evolution.de
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+4915679708019"
                  className="group flex items-start gap-4 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-5 transition-colors hover:border-[var(--color-accent-green)]/30 hover:bg-[var(--color-bg-card-hover)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--color-accent-green)]/10">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-accent-green)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-green)]">
                      Telefon
                    </p>
                    <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">
                      +49 15679 708019
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/4915679708019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-5 transition-colors hover:border-[var(--color-accent-green)]/30 hover:bg-[var(--color-bg-card-hover)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--color-accent-green)]/10">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="var(--color-accent-green)"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-green)]">
                      WhatsApp
                    </p>
                    <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">
                      Nachricht schreiben
                    </p>
                  </div>
                </a>

              </div>

              {/* Response time hint */}
              <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] p-5">
                <div className="flex items-center gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent-cyan)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Ich antworte in der Regel innerhalb von{" "}
                    <span className="font-medium text-[var(--color-text-primary)]">
                      24 Stunden
                    </span>{" "}
                    auf Ihre Anfrage.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column: form */}
            <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-6 md:p-8">
              <h2 className="mb-6 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
                Nachricht senden
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
