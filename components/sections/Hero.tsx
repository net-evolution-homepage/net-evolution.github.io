"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const headlineLines = ["Schwachstellen finden.", "Bevor es andere tun."];

function TypingHeadline() {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const fullText = headlineLines.join("\n");
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const lines = displayedText.split("\n");

  return (
    <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
      {lines.map((line, i) => {
        const isLast = i === lines.length - 1;
        return (
          <span key={i} className="block">
            {i === 0 ? (
              <span className="text-[var(--color-accent-green)]">{line}</span>
            ) : (
              <span className="text-[var(--color-text-primary)]">{line}</span>
            )}
            {isLast && !typingDone && (
              <span className="inline-block w-[3px] h-[0.85em] bg-[var(--color-accent-green)] align-middle ml-0.5 animate-pulse" />
            )}
          </span>
        );
      })}
    </h1>
  );
}

const valueProps = ["Individuell", "Verwertbar", "Persönlich"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid + scanline */}
      <div className="absolute inset-0 bg-grid scanline" />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,135,90,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-[var(--color-border-accent)] text-[var(--color-accent-green)] bg-[rgba(0,135,90,0.06)]">
                IT-Security Audits für Unternehmen
              </span>
            </motion.div>

            {/* Typing headline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mt-6"
            >
              <TypingHeadline />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
            >
              Ich prüfe Ihre IT-Infrastruktur, Webanwendungen und APIs – und
              liefere einen Bericht, den Sie Ihren Stakeholdern vorlegen können.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-[var(--color-accent-green)] text-white font-semibold text-sm hover:bg-[var(--color-accent-green-dim)] transition-colors"
              >
                Erstgespräch vereinbaren
              </Link>
              <Link
                href="/prozess"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md border border-[var(--color-border-default)] text-[var(--color-text-primary)] font-semibold text-sm hover:border-[var(--color-accent-green)] hover:text-[var(--color-accent-green)] transition-colors"
              >
                So arbeite ich
              </Link>
            </motion.div>

            {/* Value props */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="mt-10 flex items-center gap-4"
            >
              {valueProps.map((prop, i) => (
                <span key={prop} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-[var(--color-text-muted)]">
                    {prop}
                  </span>
                  {i < valueProps.length - 1 && (
                    <span className="block w-px h-4 bg-[var(--color-border-default)]" />
                  )}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <Image
              src="/images/marvin-henrich.png"
              alt="Marvin Henrich – IT-Security Auditor"
              width={400}
              height={500}
              className="rounded-xl shadow-lg shadow-black/5"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
