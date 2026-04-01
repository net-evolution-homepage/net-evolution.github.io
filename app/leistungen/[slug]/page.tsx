import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Shield: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Crosshair: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="22" y1="12" x2="18" y2="12" />
      <line x1="6" y1="12" x2="2" y2="12" />
      <line x1="12" y1="6" x2="12" y2="2" />
      <line x1="12" y1="22" x2="12" y2="18" />
    </svg>
  ),
  FileCheck: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  ),
  GraduationCap: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
    </svg>
  ),
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Leistung nicht gefunden" };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Net-Evolution`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Net-Evolution",
      url: "https://www.net-evolution.de",
    },
    serviceType: "IT Security",
    areaServed: {
      "@type": "Country",
      name: "Germany",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,135,90,0.03)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Link
              href="/leistungen"
              className="hover:text-[var(--color-accent-green)] transition-colors"
            >
              Leistungen
            </Link>
            <span>/</span>
            <span className="text-[var(--color-text-secondary)]">
              {service.title}
            </span>
          </nav>

          <div className="flex items-start gap-5 mb-6">
            <div className="text-[var(--color-accent-green)] hidden sm:block">
              {iconMap[service.icon]}
            </div>
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] leading-tight">
                {service.title}
              </h1>
              <p className="mt-2 text-lg text-[var(--color-accent-cyan)]">
                {service.subtitle}
              </p>
            </div>
          </div>

          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
            {service.description}
          </p>
          <div className="mt-8 h-1 w-16 rounded-full bg-[var(--color-accent-green)]" />
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-10">
            Leistungsumfang
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-5 transition-colors hover:border-[var(--color-border-accent)]"
              >
                <svg
                  width="20"
                  height="20"
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
                <span className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative py-16 md:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-default)] to-transparent" />
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-10">
            Ihre Ergebnisse
          </h2>

          <ol className="space-y-4">
            {service.deliverables.map((deliverable, i) => (
              <li
                key={i}
                className="flex items-start gap-5 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-5"
              >
                <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-accent-green)] flex-shrink-0 w-8 text-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[var(--color-text-secondary)] text-sm leading-relaxed pt-0.5">
                  {deliverable}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-tertiary)] to-[var(--color-bg-primary)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-green)] to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,135,90,0.02)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] leading-tight">
            {service.title} anfragen
          </h2>
          <p className="mt-6 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
            Lassen Sie uns in einem unverbindlichen Erstgespräch klären,
            wie wir Sie am besten unterstützen können.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-[var(--color-accent-green)] text-[var(--color-bg-primary)] font-semibold text-sm hover:bg-[var(--color-accent-green-dim)] transition-colors"
            >
              {service.cta.label}
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-green)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-green)] to-transparent opacity-30" />
      </section>
    </>
  );
}
