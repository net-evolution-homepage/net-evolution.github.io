"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { grantConsent, denyConsent } from "@/lib/analytics";

const CONSENT_KEY = "ne-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no consent decision has been stored yet
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    try { grantConsent(); } catch {}
    localStorage.setItem(CONSENT_KEY, "granted");
    setVisible(false);
  }

  function handleDeny() {
    try { denyConsent(); } catch {}
    localStorage.setItem(CONSENT_KEY, "denied");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[60] border-t border-[var(--color-border-default)] bg-[var(--color-bg-card)] backdrop-blur-md p-4 sm:p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Diese Website verwendet Cookies zur Analyse des Datenverkehrs.
              Sie können wählen, ob Sie allen Cookies zustimmen oder nur die
              technisch notwendigen akzeptieren.
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={handleDeny}
                className="rounded-md border border-[var(--color-border-default)] px-4 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="rounded-md bg-[#00875a] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
