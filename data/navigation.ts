export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Prozess", href: "/prozess" },
  { label: "Blog", href: "/blog" },
  { label: "Checkliste", href: "/checkliste" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerNavigation = {
  leistungen: [
    { label: "Security Audit", href: "/leistungen/security-audit" },
    { label: "Penetration Testing", href: "/leistungen/penetration-testing" },
    { label: "NIS2 & Compliance", href: "/leistungen/nis2-compliance" },
  ],
  unternehmen: [
    { label: "Über den Prozess", href: "/prozess" },
    { label: "Blog", href: "/blog" },
    { label: "IT-Sicherheitscheckliste", href: "/checkliste" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "Partner werden", href: "/partner" },
  ],
  rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
    { label: "AV-Vertrag", href: "/av-vertrag" },
  ],
};
