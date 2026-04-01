"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { services, type Service } from "@/data/services";

/* ── Inline SVG icons (32×32, green stroke) ── */
const iconMap: Record<string, React.ReactNode> = {
  Shield: (
    <svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00875a"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Crosshair: (
    <svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00875a"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={12} cy={12} r={10} />
      <line x1={22} y1={12} x2={18} y2={12} />
      <line x1={6} y1={12} x2={2} y2={12} />
      <line x1={12} y1={6} x2={12} y2={2} />
      <line x1={12} y1={22} x2={12} y2={18} />
    </svg>
  ),
  FileCheck: (
    <svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00875a"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  ),
};

/* ── Animation variants ── */
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

/* ── Service card ── */
function ServiceCard({ service }: { service: Service }) {
  const isCore = service.slug === "security-audit";
  return (
    <motion.div variants={cardVariants} className="group h-full">
      <div
        className={cn(
          "flex h-full flex-col rounded-lg border border-[var(--color-border-default)]",
          "bg-white p-6 md:p-8",
          "transition-all duration-300 hover:border-[#00875a]/30 hover:shadow-md",
          isCore && "border-t-2 border-t-[var(--color-accent-green)]"
        )}
      >
        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00875a]/10">
          {iconMap[service.icon]}
        </div>

        {/* Title */}
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
          {service.title}
        </h3>

        {/* Subtitle */}
        <p className="mt-1 text-sm text-[#0891b2]">{service.subtitle}</p>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {service.description}
        </p>

        {/* Link — pushed to bottom */}
        <div className="mt-auto pt-8">
          <Link
            href={`/leistungen/${service.slug}`}
            className={cn(
              "inline-flex items-center text-sm font-semibold",
              "text-[#00875a] hover:text-[#006644]",
              "transition-colors"
            )}
          >
            Mehr erfahren
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ── */
export default function Services() {
  return (
    <section
      id="leistungen"
      className="bg-[var(--color-bg-secondary)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[#00875a]">
            Leistungen
          </span>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-[#00875a]" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            Was ich anbiete
          </h2>
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
