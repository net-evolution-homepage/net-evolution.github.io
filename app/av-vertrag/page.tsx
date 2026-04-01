import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auftragsverarbeitungsvertrag",
  description:
    "Auftragsverarbeitungsvertrag (AV-Vertrag) nach Art. 28 DSGVO von Net-Evolution für IT-Sicherheitsdienstleistungen.",
};

export default function AVVertragPage() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Auftragsverarbeitungsvertrag
        </h1>
        <p className="mb-12 text-sm text-[var(--color-text-muted)]">
          nach Art. 28 DSGVO
        </p>

        <div className="space-y-10 text-base leading-7 text-[var(--color-text-secondary)]">
          {/* Präambel */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Präambel
            </h2>
            <p>
              Dieser Auftragsverarbeitungsvertrag (nachfolgend
              &quot;AV-Vertrag&quot;) wird geschlossen zwischen dem
              Auftraggeber (nachfolgend &quot;Verantwortlicher&quot;) und:
            </p>
            <p className="mt-3">
              Net-Evolution
              <br />
              Inhaber: Marvin Henrich
              <br />
              Weinbergstraße 17
              <br />
              55452 Dorsheim
              <br />
              Deutschland
              <br />
              E-Mail:{" "}
              <Link
                href="mailto:info@net-evolution.de"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                info@net-evolution.de
              </Link>
            </p>
            <p className="mt-3">(nachfolgend &quot;Auftragsverarbeiter&quot;)</p>
            <p className="mt-3">
              Der AV-Vertrag ergänzt den zwischen den Parteien bestehenden
              Hauptvertrag über die Erbringung von
              IT-Sicherheitsdienstleistungen (nachfolgend
              &quot;Hauptvertrag&quot;) und konkretisiert die
              datenschutzrechtlichen Rechte und Pflichten der Parteien im
              Zusammenhang mit der Auftragsverarbeitung personenbezogener
              Daten gemäß Art. 28 DSGVO.
            </p>
          </div>

          {/* §1 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 1 Gegenstand und Dauer
            </h2>
            <p>
              (1) Der Auftragsverarbeiter verarbeitet personenbezogene Daten
              im Auftrag des Verantwortlichen im Rahmen der im Hauptvertrag
              vereinbarten IT-Sicherheitsdienstleistungen.
            </p>
            <p className="mt-3">
              (2) Die Dauer dieses AV-Vertrags richtet sich nach der
              Laufzeit des Hauptvertrags. Er endet automatisch mit
              Beendigung des Hauptvertrags, sofern nicht darüber
              hinausgehende Aufbewahrungspflichten bestehen.
            </p>
            <p className="mt-3">
              (3) Der Verantwortliche ist im Rahmen dieses AV-Vertrags für
              die Einhaltung der datenschutzrechtlichen Bestimmungen,
              insbesondere für die Rechtmäßigkeit der Datenverarbeitung,
              verantwortlich (Art. 4 Nr. 7 DSGVO).
            </p>
          </div>

          {/* §2 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 2 Art und Zweck der Verarbeitung
            </h2>
            <p>
              Die Verarbeitung personenbezogener Daten durch den
              Auftragsverarbeiter erfolgt im Rahmen folgender Tätigkeiten:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 pl-4">
              <li>
                Durchführung von Security Audits und Penetrationstests, bei
                denen der Auftragsverarbeiter Zugang zu Systemen erhält, die
                personenbezogene Daten enthalten können;
              </li>
              <li>
                Analyse von Logdateien, Konfigurationen und
                Netzwerkverkehr, die personenbezogene Daten enthalten
                können;
              </li>
              <li>
                Erstellung von Sicherheitsberichten, die Verweise auf
                personenbezogene Daten enthalten können;
              </li>
              <li>
                Verarbeitung von Kontaktdaten des Verantwortlichen und
                seiner Mitarbeiter im Rahmen der Projektdurchführung;
              </li>
            </ul>
            <p className="mt-3">
              Der Zweck der Verarbeitung besteht ausschließlich in der
              Erbringung der im Hauptvertrag vereinbarten
              IT-Sicherheitsdienstleistungen.
            </p>
          </div>

          {/* §3 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 3 Art der personenbezogenen Daten
            </h2>
            <p>
              Im Rahmen der Auftragsverarbeitung können folgende Arten
              personenbezogener Daten verarbeitet werden:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 pl-4">
              <li>
                Stammdaten (z. B. Name, Vorname, Firma, Position)
              </li>
              <li>
                Kontaktdaten (z. B. E-Mail-Adresse, Telefonnummer,
                Anschrift)
              </li>
              <li>
                Zugangsdaten und Authentifizierungsdaten (z. B.
                Benutzernamen, Passwort-Hashes, Zertifikate)
              </li>
              <li>
                Nutzungsdaten und Protokolldaten (z. B. IP-Adressen,
                Log-Dateien, Zugriffsprotokolle)
              </li>
              <li>
                Kommunikationsdaten (z. B. E-Mail-Inhalte,
                Chat-Nachrichten im Rahmen der Projektdurchführung)
              </li>
              <li>
                IT-Systemdaten (z. B. Konfigurationsdaten,
                Netzwerkarchitektur, Vulnerability-Scans)
              </li>
            </ul>
          </div>

          {/* §4 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 4 Kategorien betroffener Personen
            </h2>
            <p>
              Die von der Verarbeitung betroffenen Personengruppen umfassen:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 pl-4">
              <li>Mitarbeiter des Verantwortlichen</li>
              <li>
                Kunden und Geschäftspartner des Verantwortlichen (soweit
                deren Daten in den geprüften Systemen enthalten sind)
              </li>
              <li>
                Nutzer der IT-Systeme des Verantwortlichen
              </li>
              <li>
                Ansprechpartner und Projektbeteiligte beim
                Verantwortlichen
              </li>
            </ul>
          </div>

          {/* §5 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 5 Pflichten des Auftragsverarbeiters
            </h2>
            <p>Der Auftragsverarbeiter verpflichtet sich:</p>
            <p className="mt-3">
              (1) Personenbezogene Daten ausschließlich auf dokumentierte
              Weisung des Verantwortlichen zu verarbeiten, es sei denn, er
              ist nach dem Recht der Union oder der Mitgliedstaaten, dem er
              unterliegt, zu einer anderen Verarbeitung verpflichtet. In
              einem solchen Fall teilt der Auftragsverarbeiter dem
              Verantwortlichen diese rechtlichen Anforderungen vor der
              Verarbeitung mit, sofern das betreffende Recht dies nicht
              verbietet.
            </p>
            <p className="mt-3">
              (2) Zu gewährleisten, dass sich die zur Verarbeitung der
              personenbezogenen Daten befugten Personen zur Vertraulichkeit
              verpflichtet haben oder einer angemessenen gesetzlichen
              Verschwiegenheitspflicht unterliegen.
            </p>
            <p className="mt-3">
              (3) Alle gemäß Art. 32 DSGVO erforderlichen technischen und
              organisatorischen Maßnahmen zu ergreifen (siehe Anlage 1).
            </p>
            <p className="mt-3">
              (4) Die in § 7 genannten Bedingungen für die Inanspruchnahme
              der Dienste eines weiteren Auftragsverarbeiters einzuhalten.
            </p>
            <p className="mt-3">
              (5) Den Verantwortlichen nach Möglichkeit mit geeigneten
              technischen und organisatorischen Maßnahmen dabei zu
              unterstützen, seiner Pflicht zur Beantwortung von Anträgen
              auf Wahrnehmung der Rechte der betroffenen Personen
              nachzukommen.
            </p>
            <p className="mt-3">
              (6) Den Verantwortlichen unter Berücksichtigung der Art der
              Verarbeitung und der ihm zur Verfügung stehenden
              Informationen bei der Einhaltung der in den Art. 32 bis 36
              DSGVO genannten Pflichten zu unterstützen.
            </p>
            <p className="mt-3">
              (7) Nach Abschluss der Erbringung der Verarbeitungsleistungen
              alle personenbezogenen Daten nach Wahl des Verantwortlichen
              entweder zu löschen oder zurückzugeben und bestehende Kopien
              zu vernichten, sofern nicht nach dem Unionsrecht oder dem
              Recht der Mitgliedstaaten eine Verpflichtung zur Speicherung
              der personenbezogenen Daten besteht.
            </p>
            <p className="mt-3">
              (8) Dem Verantwortlichen alle erforderlichen Informationen zum
              Nachweis der Einhaltung der in Art. 28 DSGVO niedergelegten
              Pflichten zur Verfügung zu stellen und Überprüfungen
              einschließlich Inspektionen, die vom Verantwortlichen oder
              einem von diesem beauftragten Prüfer durchgeführt werden, zu
              ermöglichen und dazu beizutragen.
            </p>
            <p className="mt-3">
              (9) Den Verantwortlichen unverzüglich zu informieren, falls
              er der Auffassung ist, dass eine Weisung gegen die DSGVO oder
              andere Datenschutzbestimmungen verstößt.
            </p>
            <p className="mt-3">
              (10) Den Verantwortlichen unverzüglich über jede Verletzung
              des Schutzes personenbezogener Daten zu benachrichtigen (Art.
              33 Abs. 2 DSGVO). Die Benachrichtigung muss mindestens
              folgende Informationen enthalten:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
              <li>Beschreibung der Art der Verletzung;</li>
              <li>
                Kategorien und ungefähre Anzahl der betroffenen Personen
                und Datensätze;
              </li>
              <li>
                Beschreibung der wahrscheinlichen Folgen der Verletzung;
              </li>
              <li>
                Beschreibung der ergriffenen oder vorgeschlagenen
                Maßnahmen.
              </li>
            </ul>
          </div>

          {/* §6 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 6 Technische und organisatorische Maßnahmen
            </h2>
            <p>
              (1) Der Auftragsverarbeiter hat die Umsetzung der im Vorfeld
              der Auftragsvergabe dargelegten und erforderlichen technischen
              und organisatorischen Maßnahmen vor Beginn der Verarbeitung,
              insbesondere hinsichtlich der konkreten Auftragsdurchführung,
              zu dokumentieren und dem Verantwortlichen zur Prüfung zu
              übergeben. Bei Akzeptanz durch den Verantwortlichen werden
              die dokumentierten Maßnahmen Grundlage des Auftrags.
            </p>
            <p className="mt-3">
              (2) Der Auftragsverarbeiter hat die Sicherheit gem. Art. 28
              Abs. 3 lit. c, 32 DSGVO insbesondere in Verbindung mit Art.
              5 Abs. 1, Abs. 2 DSGVO herzustellen. Insgesamt handelt es
              sich bei den zu treffenden Maßnahmen um Maßnahmen der
              Datensicherheit und zur Gewährleistung eines dem Risiko
              angemessenen Schutzniveaus hinsichtlich der Vertraulichkeit,
              der Integrität, der Verfügbarkeit sowie der Belastbarkeit der
              Systeme. Dabei sind der Stand der Technik, die
              Implementierungskosten und die Art, der Umfang und die Zwecke
              der Verarbeitung sowie die unterschiedliche
              Eintrittswahrscheinlichkeit und Schwere des Risikos für die
              Rechte und Freiheiten natürlicher Personen im Sinne von Art.
              32 Abs. 1 DSGVO zu berücksichtigen.
            </p>
            <p className="mt-3">
              (3) Die technischen und organisatorischen Maßnahmen
              unterliegen dem technischen Fortschritt und der
              Weiterentwicklung. Insoweit ist es dem Auftragsverarbeiter
              gestattet, alternative adäquate Maßnahmen umzusetzen, wobei
              das Sicherheitsniveau der festgelegten Maßnahmen nicht
              unterschritten werden darf. Wesentliche Änderungen sind zu
              dokumentieren und dem Verantwortlichen mitzuteilen.
            </p>
            <p className="mt-3">
              (4) Die konkreten Maßnahmen sind in Anlage 1 (TOM)
              beschrieben.
            </p>
          </div>

          {/* §7 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 7 Unterauftragsverarbeitung
            </h2>
            <p>
              (1) Der Auftragsverarbeiter darf Unterauftragsverarbeiter nur
              nach vorheriger allgemeiner schriftlicher Genehmigung des
              Verantwortlichen einsetzen. Die aktuell genehmigten
              Unterauftragsverarbeiter sind in Anlage 2 aufgeführt.
            </p>
            <p className="mt-3">
              (2) Der Auftragsverarbeiter informiert den Verantwortlichen
              über jede beabsichtigte Änderung in Bezug auf die
              Hinzuziehung oder Ersetzung von Unterauftragsverarbeitern,
              wobei der Verantwortliche die Möglichkeit hat, gegen
              derartige Änderungen Einspruch zu erheben. Der Einspruch muss
              innerhalb von 14 Kalendertagen nach Mitteilung erfolgen.
            </p>
            <p className="mt-3">
              (3) Der Auftragsverarbeiter hat bei der Einschaltung von
              Unterauftragsverarbeitern diesen dieselben
              Datenschutzpflichten aufzuerlegen, die in diesem AV-Vertrag
              festgelegt sind, insbesondere hinreichende Garantien dafür,
              dass die geeigneten technischen und organisatorischen
              Maßnahmen so durchgeführt werden, dass die Verarbeitung
              entsprechend den Anforderungen der DSGVO erfolgt.
            </p>
            <p className="mt-3">
              (4) Kommt der Unterauftragsverarbeiter seinen
              Datenschutzpflichten nicht nach, so haftet der
              Auftragsverarbeiter gegenüber dem Verantwortlichen für die
              Einhaltung der Pflichten des Unterauftragsverarbeiters.
            </p>
          </div>

          {/* §8 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 8 Rechte der Betroffenen
            </h2>
            <p>
              (1) Der Auftragsverarbeiter unterstützt den Verantwortlichen
              nach Möglichkeit mit geeigneten technischen und
              organisatorischen Maßnahmen bei der Erfüllung von Anträgen
              betroffener Personen auf Ausübung ihrer Rechte gemäß Kapitel
              III der DSGVO (Auskunft, Berichtigung, Löschung,
              Einschränkung, Datenübertragbarkeit, Widerspruch).
            </p>
            <p className="mt-3">
              (2) Wendet sich eine betroffene Person mit einem Antrag auf
              Ausübung ihrer Rechte direkt an den Auftragsverarbeiter,
              leitet dieser den Antrag unverzüglich an den Verantwortlichen
              weiter.
            </p>
            <p className="mt-3">
              (3) Der Auftragsverarbeiter stellt dem Verantwortlichen die
              erforderlichen Informationen zur Verfügung, soweit sie in
              seinem Einflussbereich liegen und der Verantwortliche nicht
              selbst über diese Informationen verfügt.
            </p>
          </div>

          {/* §9 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 9 Kontrollrechte
            </h2>
            <p>
              (1) Der Verantwortliche hat das Recht, im Benehmen mit dem
              Auftragsverarbeiter Überprüfungen durchzuführen oder durch
              im Einzelfall benannte Prüfer durchführen zu lassen. Er hat
              das Recht, sich durch Stichprobenkontrollen, die in der Regel
              rechtzeitig anzumelden sind, von der Einhaltung dieses
              AV-Vertrags durch den Auftragsverarbeiter in dessen
              Geschäftsbetrieb zu überzeugen.
            </p>
            <p className="mt-3">
              (2) Der Auftragsverarbeiter stellt sicher, dass sich der
              Verantwortliche von der Einhaltung der Pflichten des
              Auftragsverarbeiters nach Art. 28 DSGVO überzeugen kann. Der
              Auftragsverarbeiter verpflichtet sich, dem Verantwortlichen
              auf Anforderung die erforderlichen Auskünfte zu erteilen und
              insbesondere die Umsetzung der technischen und
              organisatorischen Maßnahmen nachzuweisen.
            </p>
            <p className="mt-3">
              (3) Der Nachweis der Umsetzung der technischen und
              organisatorischen Maßnahmen kann auch durch Vorlage eines
              aktuellen Testats, eines Berichts oder Berichtsauszugs eines
              unabhängigen Dritten (z. B. Wirtschaftsprüfer, Datenschutz-
              auditor) oder einer geeigneten Zertifizierung durch ein
              IT-Sicherheits- oder Datenschutzaudit erbracht werden.
            </p>
          </div>

          {/* §10 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 10 Löschung und Rückgabe
            </h2>
            <p>
              (1) Nach Abschluss der vertraglich vereinbarten Leistungen
              oder nach Aufforderung durch den Verantwortlichen, spätestens
              mit Beendigung des Hauptvertrags, hat der
              Auftragsverarbeiter sämtliche in seinen Besitz gelangten
              Unterlagen, erstellte Verarbeitungs- und Nutzungsergebnisse
              sowie Datenbestände, die im Zusammenhang mit dem
              Auftragsverhältnis stehen, nach Wahl des Verantwortlichen
              entweder zu vernichten oder an den Verantwortlichen zu
              übergeben.
            </p>
            <p className="mt-3">
              (2) Dokumentationen, die dem Nachweis der auftrags- und
              ordnungsgemäßen Datenverarbeitung dienen, sind durch den
              Auftragsverarbeiter über das Vertragsende hinaus
              entsprechend den jeweiligen Aufbewahrungsfristen
              aufzubewahren. Er kann sie nach Vertragsende dem
              Verantwortlichen zu seiner Entlastung aushändigen.
            </p>
            <p className="mt-3">
              (3) Die Löschung ist zu dokumentieren und dem
              Verantwortlichen auf Anfrage nachzuweisen.
            </p>
          </div>

          {/* §11 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 11 Haftung
            </h2>
            <p>
              (1) Die Haftung der Parteien richtet sich nach Art. 82 DSGVO
              sowie den einschlägigen nationalen Haftungsregelungen. Im
              Innenverhältnis gelten die Haftungsregelungen des
              Hauptvertrags.
            </p>
            <p className="mt-3">
              (2) Der Auftragsverarbeiter haftet gegenüber betroffenen
              Personen gemäß Art. 82 Abs. 2 DSGVO nur für Schäden, die
              durch eine nicht den rechtmäßig erteilten Anweisungen des
              Verantwortlichen entsprechende Verarbeitung oder durch ein
              Handeln entgegen oder unter Verstoß gegen die speziell den
              Auftragsverarbeitern auferlegten Pflichten der DSGVO
              verursacht wurden.
            </p>
            <p className="mt-3">
              (3) Wird eine Partei von einer betroffenen Person auf
              Schadensersatz nach Art. 82 DSGVO in Anspruch genommen, wird
              sie die andere Partei unverzüglich informieren.
            </p>
          </div>

          {/* Anlage 1: TOM */}
          <div className="border-t border-[var(--color-border-default)] pt-10">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-text-primary)]">
              Anlage 1: Technische und Organisatorische Maßnahmen (TOM)
            </h2>
            <p className="mb-6">
              Der Auftragsverarbeiter hat folgende technische und
              organisatorische Maßnahmen gemäß Art. 32 DSGVO implementiert:
            </p>

            {/* Zutrittskontrolle */}
            <h3 className="mb-3 mt-6 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              1. Zutrittskontrolle
            </h3>
            <p className="mb-2">
              Maßnahmen, die Unbefugten den Zutritt zu
              Datenverarbeitungsanlagen verwehren:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4">
              <li>Abschließbare Büroräume</li>
              <li>Sicherheitsschlösser</li>
              <li>
                Sorgfältige Auswahl von Reinigungspersonal und
                Dienstleistern
              </li>
              <li>
                Separater, gesicherter Bereich für Arbeitsgeräte mit
                sensiblen Daten
              </li>
              <li>
                Kein Publikumsverkehr in Räumlichkeiten der
                Datenverarbeitung
              </li>
            </ul>

            {/* Zugangskontrolle */}
            <h3 className="mb-3 mt-6 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              2. Zugangskontrolle
            </h3>
            <p className="mb-2">
              Maßnahmen, die verhindern, dass Unbefugte Zugang zu
              Datenverarbeitungssystemen erhalten:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4">
              <li>
                Starke Passwortrichtlinien (Mindestlänge, Komplexität)
              </li>
              <li>
                Multi-Faktor-Authentifizierung (MFA) für alle kritischen
                Systeme
              </li>
              <li>Automatische Bildschirmsperre bei Inaktivität</li>
              <li>Verschlüsselung aller Festplatten (Full Disk Encryption)</li>
              <li>Verschlüsselung mobiler Datenträger</li>
              <li>
                Einsatz aktueller Antiviren- und Endpoint-Protection-Software
              </li>
              <li>
                Regelmäßige Sicherheitsupdates und Patch-Management
              </li>
              <li>VPN für Fernzugriff auf interne Systeme</li>
            </ul>

            {/* Zugriffskontrolle */}
            <h3 className="mb-3 mt-6 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              3. Zugriffskontrolle
            </h3>
            <p className="mb-2">
              Maßnahmen, die gewährleisten, dass Zugriffsberechtigte nur
              auf die ihrer Zugriffsberechtigung unterliegenden Daten
              zugreifen:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4">
              <li>Berechtigungskonzept nach dem Least-Privilege-Prinzip</li>
              <li>
                Individuelle Benutzerkonten (keine geteilten Accounts)
              </li>
              <li>
                Regelmäßige Überprüfung und Aktualisierung von
                Zugriffsrechten
              </li>
              <li>Protokollierung von Zugriffen auf sensible Daten</li>
              <li>Sichere Löschung von Datenträgern vor Entsorgung</li>
            </ul>

            {/* Weitergabekontrolle */}
            <h3 className="mb-3 mt-6 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              4. Weitergabekontrolle
            </h3>
            <p className="mb-2">
              Maßnahmen, die gewährleisten, dass Daten bei der Übertragung
              nicht unbefugt gelesen, kopiert oder verändert werden:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4">
              <li>
                TLS/SSL-Verschlüsselung für alle Datenübertragungen
              </li>
              <li>
                Verschlüsselte E-Mail-Kommunikation (PGP/S-MIME bei Bedarf)
              </li>
              <li>
                Verschlüsselte Übermittlung von Berichten und
                Testergebnissen
              </li>
              <li>
                Sichere Dateifreigabe über verschlüsselte Plattformen
              </li>
              <li>
                Dokumentation aller Empfänger von Daten und der
                vereinbarten Löschfristen
              </li>
            </ul>

            {/* Eingabekontrolle */}
            <h3 className="mb-3 mt-6 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              5. Eingabekontrolle
            </h3>
            <p className="mb-2">
              Maßnahmen, die gewährleisten, dass nachträglich überprüft
              werden kann, ob und von wem Daten eingegeben, verändert oder
              entfernt worden sind:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4">
              <li>Protokollierung von Dateneingaben und -änderungen</li>
              <li>Nachvollziehbarkeit durch individuelle Benutzerkonten</li>
              <li>
                Versionskontrollsysteme für technische Dokumentation
              </li>
            </ul>

            {/* Auftragskontrolle */}
            <h3 className="mb-3 mt-6 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              6. Auftragskontrolle
            </h3>
            <p className="mb-2">
              Maßnahmen, die gewährleisten, dass Daten nur entsprechend
              den Weisungen des Verantwortlichen verarbeitet werden:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4">
              <li>
                Schriftliche Weisungen durch den Verantwortlichen (z. B.
                durch diesen AV-Vertrag)
              </li>
              <li>
                Formalisierter Auftragserteilungsprozess
              </li>
              <li>
                Verpflichtung der Mitarbeiter auf das Datengeheimnis
              </li>
              <li>
                Regelmäßige Datenschutzschulungen der Mitarbeiter
              </li>
              <li>
                Sorgfältige Auswahl von Unterauftragsverarbeitern
              </li>
            </ul>

            {/* Verfügbarkeitskontrolle */}
            <h3 className="mb-3 mt-6 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              7. Verfügbarkeitskontrolle
            </h3>
            <p className="mb-2">
              Maßnahmen, die gewährleisten, dass Daten gegen zufällige
              Zerstörung oder Verlust geschützt sind:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4">
              <li>
                Regelmäßige Backups nach dem 3-2-1-Prinzip
              </li>
              <li>
                Verschlüsselte Backup-Speicherung an getrenntem Standort
              </li>
              <li>
                Unterbrechungsfreie Stromversorgung (USV)
              </li>
              <li>
                Regelmäßige Tests der Datenwiederherstellung
              </li>
              <li>
                Aktuelle Firewall- und Intrusion-Detection-Systeme
              </li>
              <li>
                Notfallplan und Wiederanlaufkonzept
              </li>
            </ul>

            {/* Trennungsgebot */}
            <h3 className="mb-3 mt-6 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              8. Trennungsgebot
            </h3>
            <p className="mb-2">
              Maßnahmen, die gewährleisten, dass zu unterschiedlichen
              Zwecken erhobene Daten getrennt verarbeitet werden:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4">
              <li>
                Logische Mandantentrennung (getrennte Projektverzeichnisse
                pro Auftraggeber)
              </li>
              <li>
                Trennung von Produktiv- und Testumgebungen
              </li>
              <li>
                Separate Speicherung von Daten verschiedener Auftraggeber
              </li>
              <li>
                Differenziertes Berechtigungskonzept je Auftrag
              </li>
              <li>
                Verschlüsselte und getrennte Aufbewahrung von
                Pentest-Ergebnissen je Kunde
              </li>
            </ul>
          </div>

          {/* Anlage 2: Unterauftragsverarbeiter */}
          <div className="border-t border-[var(--color-border-default)] pt-10">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-text-primary)]">
              Anlage 2: Genehmigte Unterauftragsverarbeiter
            </h2>
            <p className="mb-6">
              Der Verantwortliche stimmt dem Einsatz folgender
              Unterauftragsverarbeiter zu:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border-default)]">
                    <th className="px-4 py-3 text-left font-[family-name:var(--font-display)] font-semibold text-[var(--color-text-primary)]">
                      Firma
                    </th>
                    <th className="px-4 py-3 text-left font-[family-name:var(--font-display)] font-semibold text-[var(--color-text-primary)]">
                      Zweck
                    </th>
                    <th className="px-4 py-3 text-left font-[family-name:var(--font-display)] font-semibold text-[var(--color-text-primary)]">
                      Standort
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--color-border-default)]/50">
                    <td className="px-4 py-3 text-[var(--color-text-primary)]">
                      Formspree Inc.
                    </td>
                    <td className="px-4 py-3">
                      Kontaktformular-Verarbeitung
                    </td>
                    <td className="px-4 py-3">USA</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border-default)]/50">
                    <td className="px-4 py-3 text-[var(--color-text-primary)]">
                      Google LLC
                    </td>
                    <td className="px-4 py-3">
                      Webanalyse (Google Analytics 4)
                    </td>
                    <td className="px-4 py-3">USA</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border-default)]/50">
                    <td className="px-4 py-3 text-[var(--color-text-primary)]">
                      Vercel Inc.
                    </td>
                    <td className="px-4 py-3">Website-Hosting</td>
                    <td className="px-4 py-3">USA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[var(--color-text-primary)]">
                      Hetzner Online GmbH
                    </td>
                    <td className="px-4 py-3">Website-Hosting</td>
                    <td className="px-4 py-3">Deutschland</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6">
              Für die Übermittlung personenbezogener Daten an
              Unterauftragsverarbeiter in Drittstaaten (USA) wurden
              geeignete Garantien gemäß Art. 46 DSGVO sichergestellt,
              insbesondere durch den Abschluss von
              EU-Standardvertragsklauseln (Standard Contractual Clauses –
              SCC).
            </p>
          </div>

          {/* Footer info */}
          <div className="border-t border-[var(--color-border-default)] pt-8">
            <p className="text-sm text-[var(--color-text-muted)]">
              Net-Evolution · Inhaber: Marvin Henrich · Weinbergstraße 17,
              55452 Dorsheim · info@net-evolution.de
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
