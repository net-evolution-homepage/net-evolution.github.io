"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { engagementModels, type EngagementModel } from "@/data/engagement-models";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--color-accent-green)] flex-shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function EngagementCard({ model }: { model: EngagementModel }) {
  return (
    <motion.div variants={cardVariants} className="flex">
      <div className="w-full rounded-lg border border-[var(--color-border-default)] bg-white p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-[var(--color-border-accent)]">
        {/* Name */}
        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text-primary)]">
          {model.name}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {model.description}
        </p>

        {/* Features */}
        <ul className="mt-6 space-y-3 flex-1">
          {model.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
            >
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href={model.cta.href}
            className="inline-flex w-full items-center justify-center px-6 py-3 rounded-md text-sm font-semibold transition-colors border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-green)] hover:text-[var(--color-accent-green)]"
          >
            {model.cta.label}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingModels() {
  return (
    <section className="relative py-24 md:py-32 bg-white">
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
            Engagement-Modelle
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            Zwei Optionen. Kein Kleingedrucktes.
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch"
        >
          {engagementModels.map((model) => (
            <EngagementCard key={model.name} model={model} />
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center text-sm italic text-[var(--color-text-muted)] max-w-2xl mx-auto"
        >
          Jedes Engagement ist individuell – kontaktieren Sie mich für ein
          maßgeschneidertes Angebot.
        </motion.p>
      </div>
    </section>
  );
}
