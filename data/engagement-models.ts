export interface EngagementModel {
  name: string;
  recommended?: boolean;
  description: string;
  features: string[];
  cta: { label: string; href: string };
}

export const engagementModels: EngagementModel[] = [
  {
    name: "Quick Audit",
    description: "Fokussierte Analyse eines einzelnen Bereichs – ideal als Einstieg oder für gezielte Fragestellungen.",
    features: [
      "Ein definierter Prüfbereich (z.\u00A0B. API, IAM, Cloud)",
      "Automatisierte Analyse + manuelle Prüfung",
      "Kompakter Ergebnisbericht",
      "Handlungsempfehlungen mit Priorisierung",
    ],
    cta: { label: "Quick Audit anfragen", href: "/kontakt" }
  },
  {
    name: "Security Audit",
    description: "Vollständige Sicherheitsanalyse Ihrer Infrastruktur – inkl. optionalem Penetration Test.",
    features: [
      "Umfassende Infrastruktur-Analyse",
      "Optionaler Penetration Test",
      "Detaillierter DOCX-Bericht",
      "Management Summary + Risikomatrix",
      "Maßnahmenkatalog mit Umsetzungsplan",
      "Abschlussgespräch + Q&A"
    ],
    cta: { label: "Security Audit anfragen", href: "/kontakt" }
  }
];
