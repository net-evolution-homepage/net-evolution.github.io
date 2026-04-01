"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const facts = [
  "Persönlicher Ansprechpartner",
  "Kein Outsourcing",
  "Berichte, die Prüfer überzeugen",
];

export default function AboutMe() {
  return (
    <section id="ueber-mich" className="relative py-24 md:py-32 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
            Über mich
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            Marvin Henrich
          </h2>
          <p className="mt-2 text-lg font-medium text-[var(--color-accent-green)] font-[family-name:var(--font-display)]">
            IT Security Auditor
          </p>
        </motion.div>

        {/* Two-column text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
        >
          {/* Left column */}
          <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-4">
            <p>
              Ich führe jeden Audit persönlich durch — kein Team, kein
              Outsourcing, keine wechselnden Ansprechpartner. Vom Erstgespräch
              über die technische Prüfung bis zur Ergebnisbesprechung arbeiten
              Sie direkt mit mir.
            </p>
            <p>
              So entsteht ein durchgängiges Verständnis für Ihre Infrastruktur,
              Ihre Risiken und Ihre Prioritäten. Nichts geht in der Übergabe
              verloren.
            </p>
          </div>

          {/* Right column */}
          <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-4">
            <p>
              Jeder Audit wird individuell auf Ihr Unternehmen zugeschnitten —
              keine Vorlagen, keine Checklisten von der Stange. Sie erhalten
              Berichte mit konkreten, umsetzbaren Handlungsempfehlungen.
            </p>
            <p>
              Ich spreche die Sprache beider Seiten: technische Details für Ihr
              IT-Team, klare Risikobewertungen für die Geschäftsleitung. Das
              Ergebnis ist ein Bericht, den Sie intern und extern vorzeigen
              können.
            </p>
          </div>
        </motion.div>

        {/* Facts row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "mt-12 flex flex-col gap-4 sm:flex-row sm:gap-8 md:gap-12",
            "pt-10 border-t border-[var(--color-border-default)]"
          )}
        >
          {facts.map((fact) => (
            <div key={fact} className="flex items-center gap-2.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent-green)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-sm font-medium text-[var(--color-text-primary)]">
                {fact}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
