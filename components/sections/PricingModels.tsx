"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { engagementModels, type EngagementModel } from "@/data/engagement-models";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

function EngagementCard({ model, index }: { model: EngagementModel; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex"
    >
      <div
        className={cn(
          "w-full bg-white rounded-lg border border-[var(--color-border-default)]",
          "p-6 md:p-8 flex flex-col",
          "transition-shadow duration-200 hover:shadow-md"
        )}
      >
        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-text-primary)]">
          {model.name}
        </h3>

        <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {model.description}
        </p>

        <ul className="mt-6 space-y-2.5 flex-1">
          {model.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)] leading-relaxed"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mt-0.5 shrink-0"
              >
                <path
                  d="M3.5 8.5L6.5 11.5L12.5 4.5"
                  stroke="#00875a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <Link
            href={model.cta.href}
            className={cn(
              "block w-full text-center px-6 py-3 rounded-lg text-sm font-semibold",
              "border-2 border-[#00875a] text-[#00875a]",
              "hover:bg-[#00875a] hover:text-white",
              "transition-colors duration-200"
            )}
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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="block text-sm font-semibold tracking-wide uppercase text-[#00875a] mb-3">
            Engagement-Modelle
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            Zwei Optionen. Kein Kleingedrucktes.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
          {engagementModels.map((model, index) => (
            <EngagementCard key={model.name} model={model} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center text-sm italic text-[var(--color-text-muted)]"
        >
          Jedes Engagement ist individuell – kontaktieren Sie mich für ein maßgeschneidertes Angebot.
        </motion.p>
      </div>
    </section>
  );
}
