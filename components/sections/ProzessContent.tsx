"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Erstgespräch",
    subtitle: "Ihre Ausgangslage verstehen",
    paragraphs: [
      "Im ersten Gespräch geht es darum, dass ich Ihr Unternehmen und Ihre IT-Landschaft kennenlerne. Was setzen Sie ein, was wollen Sie schützen, wo sehen Sie selbst Risiken? Ich höre zu und stelle gezielt Fragen.",
      "Mich interessiert dabei nicht nur die Technik, sondern auch der organisatorische Kontext: Wie groß ist Ihr Team, wer ist für IT-Sicherheit zuständig, welche Compliance-Anforderungen bestehen? Je besser ich Ihre Situation verstehe, desto präziser kann ich den Audit zuschneiden.",
      "Auf Basis dieses Gesprächs bereite ich das zweite Treffen vor – die Scope-Definition. Das Erstgespräch ist kostenlos und unverbindlich.",
    ],
  },
  {
    number: "02",
    title: "Scope & Angebot",
    subtitle: "Gemeinsam den Prüfungsumfang festlegen",
    paragraphs: [
      "Im zweiten Gespräch definieren wir gemeinsam, was genau geprüft werden soll. Welche Systeme, welche Netzwerkbereiche, welche Schwerpunkte – alles wird konkret festgelegt. Kein pauschales Paket, sondern exakt das, was für Ihr Unternehmen sinnvoll ist.",
      "Auf dieser Basis erstelle ich das formale Angebot mit transparenter Preisgestaltung, den AV-Vertrag (Auftragsverarbeitungsvertrag) und alle weiteren notwendigen Dokumente. Sie erhalten alles gebündelt zur Durchsicht.",
      "Sobald Sie das Angebot annehmen und die Dokumente unterzeichnet zurücksenden, beginnt die Audit-Durchführung. Vorher entstehen Ihnen keine Kosten und keine Verpflichtungen.",
    ],
  },
  {
    number: "03",
    title: "Audit",
    subtitle: "Systematisch, gründlich, dokumentiert",
    paragraphs: [
      "Ich führe den Audit persönlich durch – eine Kombination aus automatisierten Tools und manueller Prüfung. Automatisierte Scans liefern eine breite Abdeckung, die manuelle Arbeit geht in die Tiefe und erkennt, was kein Scanner findet.",
      "Jeder Befund wird sofort klassifiziert und dokumentiert, während ich arbeite. Schweregrad, betroffene Systeme, technische Details – alles wird festgehalten. So entsteht keine Lücke zwischen Prüfung und Dokumentation.",
      "Am Ende steht ein vollständiger, strukturierter Bericht mit allen Ergebnissen. Aber der Bericht ist nicht das Ende des Prozesses – er ist die Grundlage für das wichtigste: die persönliche Besprechung.",
    ],
  },
  {
    number: "04",
    title: "Ergebnisbesprechung",
    subtitle: "Persönlich besprechen, nicht nur übergeben",
    paragraphs: [
      "Den Bericht schicke ich Ihnen nicht einfach per E-Mail. Stattdessen gehe ich jeden Befund persönlich mit Ihnen durch. Was wurde gefunden, warum ist es relevant, und was genau sollten Sie tun?",
      "Dabei geht es mir nicht um Panikmache oder Buzzwords. Ich erkläre die Ergebnisse verständlich – auch für Entscheider ohne technischen Hintergrund. Jeder Befund bekommt eine konkrete, umsetzbare Verbesserungsempfehlung.",
      "Das Ziel ist, dass Sie nach diesem Gespräch genau wissen, wo Sie stehen und welche Schritte als nächstes sinnvoll sind. Keine offenen Fragen, keine vagen Empfehlungen – sondern ein klarer Fahrplan.",
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ProzessContent() {
  return (
    <>
      {/* Page header */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,135,90,0.03)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] md:text-5xl">
              Mein Prozess
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Vom Erstgespräch zur Ergebnisbesprechung – so
              arbeite ich mit Ihnen zusammen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-6">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-[var(--color-accent-green)] via-[var(--color-accent-cyan)] to-[var(--color-accent-green)] opacity-20 md:left-1/2 md:block" />

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-0 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--color-accent-green)] bg-[var(--color-bg-primary)] md:left-1/2 md:block" />

                <div
                  className={cn(
                    "grid gap-8 md:grid-cols-2 md:gap-16",
                    index % 2 === 1 && "md:direction-rtl"
                  )}
                >
                  {/* Step number + title side */}
                  <div
                    className={cn(
                      "flex flex-col",
                      index % 2 === 1 && "md:order-2 md:direction-ltr"
                    )}
                  >
                    <span className="font-[family-name:var(--font-display)] text-6xl font-bold leading-none text-[var(--color-accent-green)] md:text-8xl">
                      {step.number}
                    </span>
                    <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-[var(--color-accent-cyan)]">
                      {step.subtitle}
                    </p>

                  </div>

                  {/* Paragraphs side */}
                  <div
                    className={cn(
                      "space-y-4",
                      index % 2 === 1 && "md:order-1 md:direction-ltr"
                    )}
                  >
                    {step.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-[var(--color-text-secondary)]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                {index < steps.length - 1 && (
                  <div className="mt-24 h-px bg-gradient-to-r from-transparent via-[var(--color-border-default)] to-transparent md:mt-0 md:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-tertiary)] to-[var(--color-bg-primary)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-green)] to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,135,90,0.03)_0%,transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
              Bereit für den ersten Schritt?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              Das Erstgespräch ist kostenlos und unverbindlich. Ich
              nehme mir die Zeit, Ihre Situation zu verstehen – und Sie
              entscheiden danach in Ruhe, ob wir zusammenarbeiten.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent-green)] px-8 py-3.5 text-sm font-semibold text-[var(--color-bg-primary)] transition-colors hover:bg-[var(--color-accent-green-dim)]"
              >
                Erstgespräch vereinbaren
              </Link>
              <a
                href="tel:+4915679708019"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-green)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +49 15679 708019
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-green)] to-transparent opacity-30" />
      </section>
    </>
  );
}
