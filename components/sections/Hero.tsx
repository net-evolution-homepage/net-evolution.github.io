"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const line1 = "Schwachstellen finden.";
const line2 = "Bevor es andere tun.";

function TypingHeadline({ onDone }: { onDone: () => void }) {
  const [chars1, setChars1] = useState(0);
  const [chars2, setChars2] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const total = line1.length + line2.length;
    const interval = setInterval(() => {
      i++;
      if (i <= line1.length) {
        setChars1(i);
      } else if (i <= total) {
        setChars2(i - line1.length);
      } else {
        clearInterval(interval);
        setTypingDone(true);
        onDone();
      }
    }, 50);
    return () => clearInterval(interval);
  }, [onDone]);

  const showCursor1 = !typingDone && chars1 > 0 && chars1 <= line1.length && chars2 === 0;
  const showCursor2 = !typingDone && chars2 > 0;

  return (
    <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
      <span className="block text-[var(--color-accent-green)]">
        {line1.slice(0, chars1)}
        {showCursor1 && (
          <span className="inline-block w-[3px] h-[0.85em] bg-[var(--color-accent-green)] align-middle ml-0.5 animate-pulse" />
        )}
        {chars1 === 0 && <span className="invisible">{line1}</span>}
      </span>
      <span className="block text-[var(--color-text-primary)]">
        {chars2 > 0 ? (
          <>
            {line2.slice(0, chars2)}
            {showCursor2 && (
              <span className="inline-block w-[3px] h-[0.85em] bg-[var(--color-accent-green)] align-middle ml-0.5 animate-pulse" />
            )}
          </>
        ) : (
          <span className="invisible">{line2}</span>
        )}
      </span>
    </h1>
  );
}

export default function Hero() {
  const [typingDone, setTypingDone] = useState(false);
  const handleDone = useCallback(() => setTypingDone(true), []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid" />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-52 md:pt-64 pb-24">
        <div className="max-w-5xl">
          {/* Typing headline */}
          <TypingHeadline onDone={handleDone} />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={typingDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={cn(
              "mt-6 text-lg md:text-xl leading-relaxed max-w-2xl",
              "text-[var(--color-text-secondary)]",
              !typingDone && "opacity-0"
            )}
          >
            Ich prüfe Ihre IT-Infrastruktur, Webanwendungen und APIs –
            und liefere einen Bericht mit klaren Handlungsempfehlungen.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={typingDone ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className={cn(
              "mt-10 flex flex-wrap items-center gap-4",
              !typingDone && "opacity-0"
            )}
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent-green)] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#006d48]"
            >
              Erstgespräch vereinbaren
            </Link>
            <Link
              href="/prozess"
              className="inline-flex items-center justify-center rounded-md border border-[var(--color-border-default)] px-7 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              So arbeite ich
            </Link>
          </motion.div>

          {/* Value prop */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={typingDone ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={cn(
              "mt-10 text-sm text-[var(--color-text-muted)]",
              !typingDone && "opacity-0"
            )}
          >
            Für Unternehmen, die Sicherheit nicht dem Zufall überlassen.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
