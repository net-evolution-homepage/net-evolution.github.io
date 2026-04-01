"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center"
        >
          {/* Left: Text */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
              Lassen Sie uns reden.
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              In einem kostenlosen Erstgespräch verschaffe ich mir einen
              Überblick über Ihre Situation — und Sie entscheiden danach in
              Ruhe, ob eine Zusammenarbeit Sinn ergibt.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-[var(--color-text-muted)]">
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Kostenlos
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Unverbindlich
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                ~30 Minuten
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col gap-4 lg:items-end">
            <Link
              href="/kontakt"
              className={cn(
                "inline-flex items-center justify-center",
                "px-8 py-3.5 rounded-lg text-sm font-semibold",
                "bg-[var(--color-accent-green)] text-white",
                "hover:bg-[var(--color-accent-green-dim)] transition-colors"
              )}
            >
              Erstgespräch vereinbaren
            </Link>
            <a
              href="tel:+4915679708019"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-green)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              oder direkt anrufen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
