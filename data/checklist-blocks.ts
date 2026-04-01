export interface ChecklistQuestion {
  id: string;
  text: string;
  hint?: string;
  type: "boolean";
  severity: "critical" | "high" | "medium" | "low" | "info";
}

export interface ChecklistBlock {
  id: number;
  title: string;
  description: string;
  icon: string;
  questions: ChecklistQuestion[];
}

export const checklistBlocks: ChecklistBlock[] = [
  {
    id: 1,
    title: "Patch-Management & Updates",
    description: "Schwachstellen entstehen oft durch veraltete Software. Dieser Bereich prüft, ob Ihre Systeme aktuell gehalten werden.",
    icon: "update",
    questions: [
      {
        id: "patch-1",
        text: "Werden Betriebssysteme und Anwendungen regelmäßig mit Sicherheitsupdates versorgt?",
        hint: "Kritische Patches sollten innerhalb von 72 Stunden eingespielt werden.",
        type: "boolean",
        severity: "critical",
      },
      {
        id: "patch-2",
        text: "Gibt es einen definierten Prozess für das Einspielen von Sicherheitsupdates?",
        type: "boolean",
        severity: "high",
      },
      {
        id: "patch-3",
        text: "Werden auch Drittanbieter-Software und Bibliotheken regelmäßig aktualisiert?",
        hint: "Dazu gehören z.\u00A0B. Java, OpenSSL, npm-Pakete, WordPress-Plugins.",
        type: "boolean",
        severity: "high",
      },
      {
        id: "patch-4",
        text: "Existiert eine Übersicht aller eingesetzten Software und deren Versionen?",
        hint: "Ohne Asset-Inventar wissen Sie nicht, was gepatcht werden muss.",
        type: "boolean",
        severity: "medium",
      },
      {
        id: "patch-5",
        text: "Werden End-of-Life-Systeme identifiziert und ersetzt oder isoliert?",
        type: "boolean",
        severity: "critical",
      },
    ],
  },
  {
    id: 2,
    title: "Zugriffsmanagement & Authentifizierung",
    description: "Wer hat Zugriff auf welche Systeme – und wie wird dieser Zugriff geschützt?",
    icon: "lock",
    questions: [
      {
        id: "access-1",
        text: "Ist Multi-Faktor-Authentifizierung (MFA) für alle kritischen Systeme aktiviert?",
        hint: "E-Mail, VPN, Cloud-Dienste, Admin-Panels – überall, wo es möglich ist.",
        type: "boolean",
        severity: "critical",
      },
      {
        id: "access-2",
        text: "Wird das Prinzip der minimalen Rechtevergabe (Least Privilege) umgesetzt?",
        hint: "Jeder Benutzer sollte nur die Berechtigungen haben, die er für seine Arbeit braucht.",
        type: "boolean",
        severity: "critical",
      },
      {
        id: "access-3",
        text: "Werden Zugriffsrechte regelmäßig überprüft und bei Austritt sofort entzogen?",
        type: "boolean",
        severity: "high",
      },
      {
        id: "access-4",
        text: "Gibt es eine zentrale Benutzerverwaltung (z.\u00A0B. Active Directory, SSO)?",
        type: "boolean",
        severity: "medium",
      },
      {
        id: "access-5",
        text: "Werden Passwortrichtlinien durchgesetzt (Mindestlänge, Komplexität)?",
        type: "boolean",
        severity: "high",
      },
      {
        id: "access-6",
        text: "Sind Admin-Accounts von regulären Benutzerkonten getrennt?",
        hint: "Admins sollten für Alltags-Tasks ein separates, unprivilegiertes Konto nutzen.",
        type: "boolean",
        severity: "high",
      },
    ],
  },
  {
    id: 3,
    title: "Netzwerksicherheit",
    description: "Wie gut sind Ihre Netzwerkgrenzen abgesichert und segmentiert?",
    icon: "network",
    questions: [
      {
        id: "net-1",
        text: "Ist eine Firewall im Einsatz und werden die Regeln regelmäßig geprüft?",
        hint: "Ungenutzte Regeln und offene Ports sind häufige Einfallstore.",
        type: "boolean",
        severity: "critical",
      },
      {
        id: "net-2",
        text: "Ist das interne Netzwerk segmentiert?",
        hint: "Produktiv-, Entwicklungs- und Gäste-Netzwerk sollten getrennt sein.",
        type: "boolean",
        severity: "high",
      },
      {
        id: "net-3",
        text: "Werden VPN oder Zero-Trust-Lösungen für Remote-Zugriffe eingesetzt?",
        type: "boolean",
        severity: "high",
      },
      {
        id: "net-4",
        text: "Werden Netzwerk-Logs zentral gesammelt und ausgewertet?",
        hint: "Ohne Logging erkennen Sie Angriffe erst, wenn der Schaden da ist.",
        type: "boolean",
        severity: "medium",
      },
      {
        id: "net-5",
        text: "Sind alle öffentlich erreichbaren Dienste bekannt und dokumentiert?",
        type: "boolean",
        severity: "high",
      },
    ],
  },
  {
    id: 4,
    title: "Datensicherung & Wiederherstellung",
    description: "Im Ernstfall entscheidet das Backup über Überleben oder Totalverlust.",
    icon: "backup",
    questions: [
      {
        id: "backup-1",
        text: "Werden regelmäßige Backups aller kritischen Daten und Systeme erstellt?",
        type: "boolean",
        severity: "critical",
      },
      {
        id: "backup-2",
        text: "Werden Backups an einem separaten, physisch getrennten Ort aufbewahrt?",
        hint: "Wenn Ransomware Ihr Netzwerk verschlüsselt, müssen die Backups unerreichbar sein.",
        type: "boolean",
        severity: "critical",
      },
      {
        id: "backup-3",
        text: "Wird die Wiederherstellung aus Backups regelmäßig getestet?",
        hint: "Ein Backup, das nicht wiederhergestellt werden kann, ist wertlos.",
        type: "boolean",
        severity: "critical",
      },
      {
        id: "backup-4",
        text: "Sind Backup-Daten verschlüsselt?",
        type: "boolean",
        severity: "medium",
      },
      {
        id: "backup-5",
        text: "Ist eine maximale Wiederherstellungszeit (RTO) für kritische Systeme definiert?",
        hint: "Wie lange darf ein System maximal ausfallen, bevor es geschäftskritisch wird?",
        type: "boolean",
        severity: "high",
      },
    ],
  },
  {
    id: 5,
    title: "Endgeräte & Endpoint-Security",
    description: "Laptops, Smartphones und Arbeitsgeräte sind oft das schwächste Glied.",
    icon: "device",
    questions: [
      {
        id: "endpoint-1",
        text: "Ist Endpoint-Protection (Antivirus/EDR) auf allen Geräten aktiv?",
        type: "boolean",
        severity: "high",
      },
      {
        id: "endpoint-2",
        text: "Werden alle Endgeräte zentral verwaltet (MDM/Endpoint Management)?",
        type: "boolean",
        severity: "medium",
      },
      {
        id: "endpoint-3",
        text: "Sind Festplatten auf allen Geräten verschlüsselt?",
        hint: "Bei Verlust oder Diebstahl sind unverschlüsselte Daten sofort kompromittiert.",
        type: "boolean",
        severity: "high",
      },
      {
        id: "endpoint-4",
        text: "Gibt es Richtlinien für die Nutzung privater Geräte (BYOD)?",
        type: "boolean",
        severity: "medium",
      },
      {
        id: "endpoint-5",
        text: "Werden nicht mehr genutzte Geräte sicher gelöscht und entsorgt?",
        type: "boolean",
        severity: "medium",
      },
    ],
  },
  {
    id: 6,
    title: "Webanwendungen & APIs",
    description: "Ihre nach außen sichtbaren Anwendungen sind das Hauptziel von Angreifern.",
    icon: "web",
    questions: [
      {
        id: "web-1",
        text: "Werden Webanwendungen regelmäßig auf Schwachstellen getestet?",
        hint: "Mindestens einmal jährlich oder nach größeren Änderungen.",
        type: "boolean",
        severity: "critical",
      },
      {
        id: "web-2",
        text: "Sind alle Webanwendungen ausschließlich über HTTPS erreichbar?",
        type: "boolean",
        severity: "high",
      },
      {
        id: "web-3",
        text: "Werden API-Zugriffe authentifiziert und autorisiert?",
        hint: "Offene APIs ohne Authentifizierung sind ein häufiger Befund in Audits.",
        type: "boolean",
        severity: "critical",
      },
      {
        id: "web-4",
        text: "Wird Benutzereingabe serverseitig validiert (gegen Injection, XSS)?",
        type: "boolean",
        severity: "critical",
      },
      {
        id: "web-5",
        text: "Gibt es einen Prozess für Security-Reviews bei Code-Änderungen?",
        type: "boolean",
        severity: "medium",
      },
    ],
  },
  {
    id: 7,
    title: "Organisatorische Sicherheit",
    description: "Technik allein reicht nicht – es braucht Prozesse und Verantwortlichkeiten.",
    icon: "org",
    questions: [
      {
        id: "org-1",
        text: "Gibt es eine klar definierte Verantwortlichkeit für IT-Sicherheit?",
        hint: "Jemand muss den Hut aufhaben – auch in kleinen Unternehmen.",
        type: "boolean",
        severity: "high",
      },
      {
        id: "org-2",
        text: "Existiert ein dokumentierter Incident-Response-Plan?",
        hint: "Was passiert, wenn Sie morgen früh einen Sicherheitsvorfall entdecken?",
        type: "boolean",
        severity: "high",
      },
      {
        id: "org-3",
        text: "Gibt es eine IT-Sicherheitsrichtlinie, die allen Mitarbeitenden bekannt ist?",
        type: "boolean",
        severity: "medium",
      },
      {
        id: "org-4",
        text: "Werden Sicherheitsvorfälle dokumentiert und nachbereitet?",
        type: "boolean",
        severity: "high",
      },
      {
        id: "org-5",
        text: "Sind Mitarbeitende für Phishing und Social Engineering sensibilisiert?",
        type: "boolean",
        severity: "medium",
      },
    ],
  },
  {
    id: 8,
    title: "DSGVO & Compliance",
    description: "Regulatorische Anforderungen, die unabhängig von der Unternehmensgröße gelten.",
    icon: "compliance",
    questions: [
      {
        id: "dsgvo-1",
        text: "Ist ein Verzeichnis aller Verarbeitungstätigkeiten vorhanden?",
        hint: "Pflicht nach Art. 30 DSGVO – unabhängig von der Unternehmensgröße.",
        type: "boolean",
        severity: "high",
      },
      {
        id: "dsgvo-2",
        text: "Sind Auftragsverarbeitungsverträge mit allen Dienstleistern abgeschlossen?",
        hint: "Cloud-Anbieter, E-Mail-Provider, Tracking-Tools – alle brauchen einen AV-Vertrag.",
        type: "boolean",
        severity: "high",
      },
      {
        id: "dsgvo-3",
        text: "Gibt es einen Prozess für Datenschutz-Auskunftsersuchen (Art. 15 DSGVO)?",
        type: "boolean",
        severity: "medium",
      },
      {
        id: "dsgvo-4",
        text: "Wurde geprüft, ob Ihr Unternehmen unter die NIS2-Richtlinie fällt?",
        hint: "NIS2 betrifft seit 2024 deutlich mehr Unternehmen als die Vorgängerregelung.",
        type: "boolean",
        severity: "high",
      },
      {
        id: "dsgvo-5",
        text: "Werden personenbezogene Daten verschlüsselt gespeichert und übertragen?",
        type: "boolean",
        severity: "high",
      },
    ],
  },
];
