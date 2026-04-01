"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-tertiary)] to-[var(--color-bg-primary)]" />

      {/* Top green gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-green)] to-transparent opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-8 md:p-12 lg:p-16"
        >
          <div className="text-center max-w-2xl mx-auto">
            {/* Headline */}
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]">
              Bereit für Klarheit?
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-[var(--color-text-secondary)] leading-relaxed">
              In einem kostenlosen Erstgespräch verschaffe ich mir einen
              Überblick über Ihre IT-Sicherheit. Unverbindlich, persönlich und
              ohne Verkaufsdruck.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-[var(--color-accent-green)] text-white font-semibold text-sm hover:bg-[var(--color-accent-green-dim)] transition-colors"
              >
                Erstgespräch vereinbaren
              </Link>
              <a
                href="tel:+4915679708019"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-[var(--color-border-default)] text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-accent-green)] hover:text-[var(--color-accent-green)] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +49 15679 708019
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-6 text-xs text-[var(--color-text-muted)]">
              Keine Verpflichtung. Keine versteckten Kosten. Einfach ein
              Gespräch.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom green gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-green)] to-transparent opacity-30" />
    </section>
  );
}
