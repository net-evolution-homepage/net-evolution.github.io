import type { Metadata } from "next";
import ProvisionsRechner from "@/components/forms/ProvisionsRechner";
import PartnerForm from "@/components/forms/PartnerForm";

export const metadata: Metadata = {
  title: "Partner werden",
  description:
    "Werden Sie Vertriebspartner von Net-Evolution. 15 % Provision auf jeden vermittelten IT-Security Audit.",
};

export default function PartnerPage() {
  return (
    <>
      {/* ━━━ HERO: Full-width dark green banner ━━━ */}
      <section className="relative bg-[#00332a] overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-36 pb-20 md:pt-44 md:pb-28 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Kontakte vermitteln.
            <br />
            <span className="text-[#34d399]">Provision kassieren.</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 font-[family-name:var(--font-display)]">
            15 % auf jeden Auftrag. Ohne Fachwissen. Ohne Risiko.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#rechner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-[#34d399] text-[#00332a] font-semibold text-sm hover:bg-[#2ec48a] transition-colors"
            >
              Provision berechnen
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
            <a
              href="#bewerbung"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              Jetzt bewerben
            </a>
          </div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ━━━ PROVISIONSRECHNER ━━━ */}
      <section id="rechner" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
              Was ist für Sie drin?
            </h2>
          </div>
          <ProvisionsRechner />
          <p className="mt-6 text-center text-xs text-[var(--color-text-muted)]">
            Beispielwerte zur Veranschaulichung. Der tatsächliche Auftragswert variiert je nach Umfang.
          </p>
        </div>
      </section>

      {/* ━━━ ABLAUF: Horizontal cards ━━━ */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
              So läuft es ab
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-8 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-[var(--color-accent-green)]/30" />

            {[
              { num: "✓", color: "bg-[var(--color-accent-cyan)]", title: "Onboarding", desc: "Ich zeige Ihnen, wie Sie potenzielle Kunden erkennen." },
              { num: "1", color: "bg-[var(--color-accent-green)]", title: "Vermitteln", desc: "Per Intro, Weiterleitung oder gemeinsamen Call." },
              { num: "2", color: "bg-[var(--color-accent-green)]", title: "Ich übernehme", desc: "Erstgespräch bis Bericht – komplett." },
              { num: "3", color: "bg-[var(--color-accent-green)]", title: "Sie kassieren", desc: "15 % nach Zahlungseingang." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4 py-6 md:py-0">
                <div className={`relative z-10 w-10 h-10 rounded-full ${step.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                  {step.num}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text-primary)] mt-4">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-1.5 max-w-[180px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAKTEN: Icon grid ━━━ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
              Fakten
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "M9 12l2 2 4-4", label: "Kein Fachwissen nötig" },
              { icon: "M12 8v8m-4-4h8", label: "Kein Startkapital" },
              { icon: "M5 12h14", label: "Keine Mindestanzahl" },
              { icon: "M12 6v6l4 2", label: "Onboarding inklusive" },
            ].map((fact) => (
              <div key={fact.label} className="group text-center p-6 rounded-xl border border-[var(--color-border-default)] bg-white hover:border-[var(--color-accent-green)]/30 hover:shadow-md transition-all duration-200">
                <div className="mx-auto w-11 h-11 rounded-full bg-[var(--color-accent-green)]/8 flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-green)]/15 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d={fact.icon} />
                  </svg>
                </div>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
              Häufige Fragen
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { q: "Wie genau läuft eine Vermittlung ab?", a: "Sie stellen den Kontakt her – per E-Mail-Intro, Weiterleitung oder gemeinsamen Call. Ab dem Erstgespräch übernehme ich alles Weitere." },
              { q: "Wann wird die Provision ausgezahlt?", a: "Nach Zahlungseingang des Kunden. Sie erhalten 15 % des Netto-Auftragswertes auf Rechnung." },
              { q: "Muss ich IT-Sicherheit verstehen?", a: "Nein. Im Onboarding zeige ich Ihnen, worauf Sie achten müssen. Die fachliche Beratung übernehme ich." },
              { q: "Gibt es eine Vertragsbindung?", a: "Nein. Keine Mindestanzahl, keine Exklusivität, keine Laufzeit. Sie vermitteln, wenn es passt." },
              { q: "Was brauche ich, um loszulegen?", a: "Einen Gewerbeschein oder eine bestehende Selbstständigkeit. Alles Weitere klären wir im persönlichen Gespräch." },
            ].map((item) => (
              <details key={item.q} className="group rounded-xl border border-[var(--color-border-default)] bg-white overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-sm font-semibold text-[var(--color-text-primary)] select-none hover:text-[var(--color-accent-green)] transition-colors">
                  {item.q}
                  <span className="shrink-0 ml-4 w-6 h-6 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center group-open:bg-[var(--color-accent-green)]/10 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-muted)] transition-transform duration-200 group-open:rotate-180 group-open:text-[var(--color-accent-green)]">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-border-default)] pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CTA + Formular ━━━ */}
      <section id="bewerbung" className="relative bg-[#00332a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 md:py-32">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-3">
              Interesse geweckt?
            </h2>
            <p className="text-white/60">
              Erzählen Sie mir kurz von sich. Ich melde mich innerhalb von 48 Stunden.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 md:p-10 shadow-2xl">
            <PartnerForm />
          </div>
        </div>
      </section>
    </>
  );
}
