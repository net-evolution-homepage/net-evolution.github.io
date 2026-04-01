import type { Metadata } from "next";
import ProzessContent from "@/components/sections/ProzessContent";

export const metadata: Metadata = {
  title: "Unser Prozess",
  description:
    "Vom Erstgespräch zum Ergebnis: Unser vierstufiger Audit-Prozess für Security Audits und Penetration Testing – transparent, strukturiert und individuell.",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "IT-Security Audit Prozess",
  "description":
    "Der vierstufige Prozess für ein IT-Security Audit bei Net-Evolution.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Erstgespräch",
      "text": "Erfassung der Ausgangslage, Infrastruktur und Ziele.",
    },
    {
      "@type": "HowToStep",
      "name": "Scope & Angebot",
      "text": "Gemeinsame Definition des Prüfungsumfangs. Erstellung von Angebot und AV-Vertrag.",
    },
    {
      "@type": "HowToStep",
      "name": "Audit",
      "text": "Systematische Durchführung des Audits mit automatisierten und manuellen Prüfmethoden.",
    },
    {
      "@type": "HowToStep",
      "name": "Ergebnisbesprechung",
      "text": "Persönliche Besprechung der Ergebnisse mit konkreten Verbesserungsvorschlägen.",
    },
  ],
};

export default function ProzessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ProzessContent />
    </>
  );
}
