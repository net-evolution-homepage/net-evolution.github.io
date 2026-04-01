"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { services, type Service } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Crosshair: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="22" y1="12" x2="18" y2="12" />
      <line x1="6" y1="12" x2="2" y2="12" />
      <line x1="12" y1="6" x2="12" y2="2" />
      <line x1="12" y1="22" x2="12" y2="18" />
    </svg>
  ),
  FileCheck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  ),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function ServiceCard({ service }: { service: Service }) {
  const features = service.features.slice(0, 4);

  return (
    <motion.div variants={cardVariants} className="group h-full">
      <div
        className={cn(
          "flex h-full flex-col rounded-lg border border-[var(--color-border-default)]",
          "bg-[var(--color-bg-card)] p-6 md:p-8",
          "transition-shadow duration-300 hover:shadow-md"
        )}
      >
        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-accent-green)]/8 text-[var(--color-accent-green)]">
          {iconMap[service.icon]}
        </div>

        {/* Title & subtitle */}
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
          {service.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {service.description}
        </p>

        {/* Feature list */}
        <ul className="mt-5 flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent-green)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Link - pushed to bottom */}
        <div className="mt-auto pt-6">
          <Link
            href={`/leistungen/${service.slug}`}
            className={cn(
              "inline-flex items-center text-sm font-medium",
              "text-[var(--color-accent-green)] hover:text-[var(--color-accent-green-dim)]",
              "transition-colors"
            )}
          >
            Details ansehen
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="leistungen" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            Leistungen
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-[var(--color-accent-green)]" />
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Drei Schwerpunkte. Ein Ziel: Ihre Sicherheit messbar machen.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
