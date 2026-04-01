"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 4L4 12V20C4 29.6 10.8 38.4 20 40C29.2 38.4 36 29.6 36 20V12L20 4Z"
          stroke="var(--color-accent-green)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M15 15L25 25M25 15L15 25"
          stroke="var(--color-accent-green)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Keine Übersicht",
    description:
      "Wer hat Zugriff auf welche Systeme? Welche Dienste sind öffentlich erreichbar? Ohne eine unabhängige Prüfung fehlt die Antwort.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 6H26L32 12V34H8V6Z"
          stroke="var(--color-accent-green)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M26 6V12H32"
          stroke="var(--color-accent-green)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 20H26M14 25H22"
          stroke="var(--color-accent-green)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Kein verwertbarer Nachweis",
    description:
      "Kunden, Investoren und Aufsichtsbehörden verlangen Nachweise. Ein internes \u201ePasst schon\u201c reicht nicht mehr.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="var(--color-accent-green)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 12V20L26 24"
          stroke="var(--color-accent-green)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Kein Plan für den Ernstfall",
    description:
      "Was passiert bei einem Sicherheitsvorfall? Ohne dokumentierte Ergebnisse starten Sie bei Null.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] text-center max-w-3xl mx-auto leading-tight"
        >
          Die meisten Unternehmen wissen nicht, wo sie verwundbar sind
        </motion.h2>

        {/* Pain point columns */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border-default)]">
                {point.icon}
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
                {point.title}
              </h3>
              <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed"
        >
          Ein professioneller Security Audit schafft Klarheit – und gibt Ihnen
          die Grundlage für fundierte Entscheidungen.
        </motion.p>
      </div>
    </section>
  );
}
