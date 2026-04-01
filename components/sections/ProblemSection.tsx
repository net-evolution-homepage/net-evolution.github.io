"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const problems = [
  {
    title: "Keine Übersicht",
    description: "Wer hat Zugriff auf was? Welche Dienste sind erreichbar?",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-accent-green)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2L3 7v5c0 5.25 3.75 10.05 9 11.25 5.25-1.2 9-6 9-11.25V7l-9-5z" />
        <path d="M9 9l6 6M15 9l-6 6" />
      </svg>
    ),
  },
  {
    title: "Kein verwertbarer Nachweis",
    description: "Stakeholder wollen Belege, kein Bauchgefühl.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-accent-green)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: "Kein Plan für den Ernstfall",
    description: "Ohne Dokumentation starten Sie bei Null.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-accent-green)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className={cn(
            "mx-auto max-w-5xl text-center font-[family-name:var(--font-display)]",
            "text-3xl md:text-5xl font-bold leading-tight text-[var(--color-text-primary)]"
          )}
        >
          Die meisten Unternehmen wissen nicht, wo sie verwundbar sind
        </motion.h2>

        {/* Three columns */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col"
            >
              {/* Icon container */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]">
                {problem.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center text-lg font-bold font-[family-name:var(--font-display)] text-[var(--color-accent-green)]"
        >
          Genau hier setze ich an.
        </motion.p>
      </div>
    </section>
  );
}
