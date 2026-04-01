export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // emoji or lucide icon name
  features: string[];
  deliverables: string[];
  cta: { label: string; href: string };
}

export const services: Service[] = [
  {
    slug: "security-audit",
    title: "Security Audit",
    subtitle: "Systematische Sicherheitsanalyse",
    description: "Infrastruktur, APIs, Zugriffskonzepte – systematisch analysiert und dokumentiert. Ergebnis: ein priorisierter Bericht mit Management Summary und konkreten Maßnahmen.",
    icon: "Shield",
    features: [
      "Analyse der gesamten IT-Infrastruktur",
      "Prüfung von Zugriffskonzepten und Berechtigungen",
      "API-Security-Bewertung",
      "Cloud-Konfigurationsanalyse",
      "Risikobewertung nach CVSS-Standard",
      "Priorisierte Handlungsempfehlungen"
    ],
    deliverables: [
      "DOCX-Bericht mit Management Summary",
      "Detaillierte Finding-Dokumentation (FINDING-001 ff.)",
      "Risikomatrix mit Severity-Einstufung",
      "Maßnahmenkatalog mit Priorisierung",
      "Abschlussgespräch mit Ergebnispräsentation"
    ],
    cta: { label: "Audit anfragen", href: "/kontakt" }
  },
  {
    slug: "penetration-testing",
    title: "Penetration Testing",
    subtitle: "Kontrollierte Angriffssimulation",
    description: "Kontrollierte Angriffe auf Webanwendungen, APIs und Netzwerke – durchgeführt wie ein realer Angreifer, dokumentiert wie ein Gutachten. Intern und extern vorzeigbar.",
    icon: "Crosshair",
    features: [
      "Webanwendungs-Penetrationstest (OWASP Top 10)",
      "API-Penetrationstest (REST, GraphQL)",
      "Netzwerk-Penetrationstest (intern/extern)",
      "Manuelle Verifikation automatisierter Findings",
      "Exploitation und Proof-of-Concept"
    ],
    deliverables: [
      "Pentest-Report (intern und extern vorzeigbar)",
      "Executive Summary für Management",
      "Technische Details mit Reproduktionsschritten",
      "Proof-of-Concept für kritische Findings",
      "Retesting nach Behebung (optional)"
    ],
    cta: { label: "Pentest anfragen", href: "/kontakt" }
  },
  {
    slug: "nis2-compliance",
    title: "NIS2 & Compliance",
    subtitle: "Regulatorische Sicherheit",
    description: "Gap-Analyse, Dokumentation und Maßnahmenpakete für NIS2, ISO 27001 und SOC 2. Schritt-für-Schritt-Begleitung von der Bestandsaufnahme bis zur Umsetzung.",
    icon: "FileCheck",
    features: [
      "NIS2-Readiness-Assessment",
      "Gap-Analyse gegen ISO 27001 / SOC 2",
      "Erstellung von Sicherheitsrichtlinien",
      "Dokumentation für Audit-Nachweise",
      "Maßnahmenpakete mit Umsetzungsplan",
      "Begleitung bei Zertifizierungsvorbereitung"
    ],
    deliverables: [
      "Gap-Analyse-Bericht mit Status-Übersicht",
      "Maßnahmenkatalog mit Zeitplan",
      "Richtlinien- und Dokumentationsvorlagen",
      "Regelmäßige Status-Reviews",
      "Vorbereitung auf externe Audits"
    ],
    cta: { label: "Beratung anfragen", href: "/kontakt" }
  }
];
