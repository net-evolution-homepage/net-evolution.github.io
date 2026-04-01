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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Process() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-sm font-semibold tracking-wide uppercase text-[var(--color-accent-green)] mb-3">
            Ablauf
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            In vier Schritten zum Ergebnis
          </h2>
        </motion.div>

        {/* Desktop: horizontal stepper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid md:grid-cols-4 md:gap-0 relative"
        >
          {/* Connecting line behind circles */}
          <div className="absolute top-[24px] left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-[var(--color-accent-green)] opacity-30" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Number circle */}
              <div className="relative z-10 w-12 h-12 rounded-full border-2 border-[var(--color-accent-green)] bg-white flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent-green)]">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)] mt-5">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: vertical stepper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:hidden relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative flex gap-6"
            >
              {/* Left column: number + line */}
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[var(--color-accent-green)] bg-white flex items-center justify-center">
                  <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent-green)]">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-[var(--color-accent-green)] opacity-30" />
                )}
              </div>

              {/* Right column: content */}
              <div className="pb-10">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)] mt-2.5">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
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
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
