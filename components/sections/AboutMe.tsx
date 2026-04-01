"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const facts = [
  "Persönlicher Ansprechpartner",
  "Kein Outsourcing",
  "Berichte, die Prüfer überzeugen",
];

export default function AboutMe() {
  return (
    <section
      id="ueber-mich"
      className="bg-[var(--color-bg-secondary)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Photo — hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <Image
              src="/images/marvin-henrich.png"
              alt="Marvin Henrich – IT Security Auditor"
              width={420}
              height={520}
              className="rounded-xl object-cover"
              priority
            />
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)]">
              &Uuml;ber mich
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
              Marvin Henrich
            </h2>
            <p className="mt-2 font-[family-name:var(--font-display)] text-lg text-[#00875a]">
              IT Security Auditor
            </p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              <p>
                Bevor ich Unternehmen gepr&uuml;ft habe, habe ich selbst Systeme
                gebaut. Mein Hintergrund als Entwickler in der Automatisierung
                bedeutet: Ich verstehe nicht nur, wo Schwachstellen liegen &ndash;
                ich verstehe auch, warum sie entstehen. Wer Code geschrieben hat,
                liest ihn anders. Und wer Infrastruktur aufgebaut hat, wei&szlig;,
                wo die typischen Fehler stecken.
              </p>
              <p>
                Jeder Audit wird von mir pers&ouml;nlich durchgef&uuml;hrt. Kein
                Teamwechsel, keine &Uuml;bergabe. Sie sprechen von Anfang bis Ende
                mit derselben Person &ndash; der Person, die auch den Bericht
                schreibt. So geht kein Kontext verloren, und Sie erhalten
                Empfehlungen, die auf Ihr Unternehmen zugeschnitten sind &ndash;
                verst&auml;ndlich f&uuml;r die Gesch&auml;ftsleitung, verwertbar
                f&uuml;r Ihr IT-Team.
              </p>
            </div>

            {/* Facts with green checkmarks */}
            <div className="mt-8 border-t border-[var(--color-border-default)] pt-8">
              <div className="flex flex-col gap-3">
                {facts.map((fact) => (
                  <div
                    key={fact}
                    className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]"
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00875a"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
