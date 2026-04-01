"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Erstgespräch",
    description:
      "Ich erfasse Ihre Ausgangslage und bereite die Scope-Definition vor.",
  },
  {
    number: "02",
    title: "Scope & Angebot",
    description:
      "Gemeinsam definieren wir den Prüfungsumfang. Ich erstelle Angebot und AV-Vertrag.",
  },
  {
    number: "03",
    title: "Audit",
    description:
      "Systematische Prüfung Ihrer Infrastruktur – automatisiert und manuell.",
  },
  {
    number: "04",
    title: "Ergebnisbesprechung",
    description:
      "Persönliche Besprechung aller Findings mit konkreten Verbesserungsvorschlägen.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Process() {
  return (
    <section className="bg-[var(--color-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-green)]">
            Ablauf
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            In vier Schritten zum Ergebnis
          </h2>
        </motion.div>

        {/* Horizontal stepper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-[var(--color-accent-green)]/20" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent-green)] bg-white">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent-green)]">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-text-primary)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <Link
            href="/prozess"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent-green)] hover:text-[var(--color-accent-green-dim)] transition-colors"
          >
            Mehr zum Prozess
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
