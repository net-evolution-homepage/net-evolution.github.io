import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Net-Evolution – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="mb-12 text-sm text-[var(--color-text-muted)]">
          Stand: 28.03.2026
        </p>

        <div className="space-y-10 text-base leading-7 text-[var(--color-text-secondary)]">
          {/* 1. Verantwortlicher */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung
              (DSGVO) und anderer nationaler Datenschutzgesetze sowie
              sonstiger datenschutzrechtlicher Bestimmungen ist:
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
            </p>
            <p className="mt-3">
              Telefon:{" "}
              <Link
                href="tel:+4915679708019"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                +49 15679 708019
              </Link>
              <br />
              E-Mail:{" "}
              <Link
                href="mailto:info@net-evolution.de"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                info@net-evolution.de
              </Link>
              <br />
              Web:{" "}
              <Link
                href="https://www.net-evolution.de"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                www.net-evolution.de
              </Link>
            </p>
          </div>

          {/* 2. Allgemeines zur Datenverarbeitung */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer
              grundsätzlich nur, soweit dies zur Bereitstellung einer
              funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Verarbeitung personenbezogener Daten
              unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des
              Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine
              vorherige Einholung einer Einwilligung aus tatsächlichen
              Gründen nicht möglich ist und die Verarbeitung der Daten durch
              gesetzliche Vorschriften gestattet ist.
            </p>
            <p className="mt-3">
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten
              eine Einwilligung der betroffenen Person einholen, dient Art.
              6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei der
              Verarbeitung von personenbezogenen Daten, die zur Erfüllung
              eines Vertrages erforderlich ist, dient Art. 6 Abs. 1 lit. b
              DSGVO als Rechtsgrundlage. Für Verarbeitungsvorgänge, die zur
              Wahrung eines berechtigten Interesses unsererseits oder eines
              Dritten erforderlich sind, dient Art. 6 Abs. 1 lit. f DSGVO
              als Rechtsgrundlage, sofern die Interessen, Grundrechte und
              Grundfreiheiten des Betroffenen nicht überwiegen.
            </p>
          </div>

          {/* 3. Hosting */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters
              gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
              sonstige Daten, die über eine Website generiert werden,
              handeln.
            </p>

            <h3 className="mb-3 mt-6 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              Vercel Inc.
            </h3>
            <p>
              Die Website kann über Vercel Inc., 440 N Baxter St, Coppell,
              TX 75019, USA, gehostet werden. Vercel ist ein
              Cloud-Plattform-Anbieter, der den Betrieb und die
              Skalierung von Webanwendungen ermöglicht. Beim Aufruf
              unserer Website werden durch Vercel automatisch technische
              Daten (insbesondere die IP-Adresse) verarbeitet, die für die
              Auslieferung der Website technisch notwendig sind. Vercel hat
              sich zur Einhaltung der EU-Standardvertragsklauseln
              verpflichtet. Weitere Informationen finden Sie in der{" "}
              <Link
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                Datenschutzerklärung von Vercel
              </Link>
              .
            </p>

            <h3 className="mb-3 mt-6 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              Hetzner Online GmbH
            </h3>
            <p>
              Alternativ kann die Website über Hetzner Online GmbH,
              Industriestr. 25, 91710 Gunzenhausen, Deutschland, gehostet
              werden. Hetzner betreibt zertifizierte Rechenzentren in
              Deutschland und Finnland. Beim Aufruf unserer Website werden
              durch Hetzner automatisch technische Daten verarbeitet, die
              für die Auslieferung der Website technisch notwendig sind. Die
              Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Weitere Informationen finden Sie in der{" "}
              <Link
                href="https://www.hetzner.com/de/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                Datenschutzerklärung von Hetzner
              </Link>
              .
            </p>

            <p className="mt-4">
              Die Nutzung des Hosters erfolgt auf Grundlage von Art. 6 Abs.
              1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
              möglichst zuverlässigen Darstellung unserer Website. Sofern
              eine entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO. Die Einwilligung ist jederzeit widerrufbar.
            </p>
          </div>

          {/* 4. SSL/TLS */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              4. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen,
              die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
              Sie daran, dass die Adresszeile des Browsers von
              &quot;http://&quot; auf &quot;https://&quot; wechselt und an
              dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="mt-3">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können
              die Daten, die Sie an uns übermitteln, nicht von Dritten
              mitgelesen werden.
            </p>
          </div>

          {/* 5. Server-Log-Files */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              5. Server-Log-Files
            </h2>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Files, die Ihr
              Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 pl-4">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen
              wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
              Websitebetreiber hat ein berechtigtes Interesse an der
              technisch fehlerfreien Darstellung und der Optimierung seiner
              Website – hierzu müssen die Server-Log-Files erfasst werden.
            </p>
          </div>

          {/* 6. Cookies und Consent Mode v2 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              6. Cookies und Google Consent Mode v2
            </h2>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine
              Textdateien, die auf Ihrem Endgerät gespeichert werden und die
              Ihr Browser speichert. Die meisten der von uns verwendeten
              Cookies sind sogenannte Session-Cookies, die nach Ende Ihres
              Besuchs automatisch gelöscht werden. Andere Cookies bleiben
              auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese
              Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch
              wiederzuerkennen.
            </p>
            <p className="mt-3">
              Wir setzen Google Consent Mode v2 ein. Dabei wird zwischen
              folgenden Einwilligungssignalen unterschieden:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 pl-4">
              <li>
                <span className="font-medium text-[var(--color-text-primary)]">
                  ad_storage:
                </span>{" "}
                Speicherung von Werbe-Cookies (standardmäßig deaktiviert)
              </li>
              <li>
                <span className="font-medium text-[var(--color-text-primary)]">
                  analytics_storage:
                </span>{" "}
                Speicherung von Analyse-Cookies (standardmäßig deaktiviert)
              </li>
              <li>
                <span className="font-medium text-[var(--color-text-primary)]">
                  ad_user_data:
                </span>{" "}
                Nutzung personenbezogener Daten für Werbung (standardmäßig
                deaktiviert)
              </li>
              <li>
                <span className="font-medium text-[var(--color-text-primary)]">
                  ad_personalization:
                </span>{" "}
                Personalisierung von Werbung (standardmäßig deaktiviert)
              </li>
            </ul>
            <p className="mt-3">
              Ohne Ihre ausdrückliche Einwilligung werden keine
              Analyse- oder Werbe-Cookies gesetzt. Technisch notwendige
              Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              gesetzt. Der Websitebetreiber hat ein berechtigtes Interesse
              an der Speicherung von technisch notwendigen Cookies zur
              technisch fehlerfreien und optimierten Bereitstellung seiner
              Dienste. Sofern eine Einwilligung zur Speicherung von Cookies
              und vergleichbaren Wiedererkennungstechnologien abgefragt
              wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
              dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO / § 25 Abs. 1
              TDDDG). Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Sie können Ihren Browser so einstellen, dass Sie über das
              Setzen von Cookies informiert werden und Cookies nur im
              Einzelfall erlauben, die Annahme von Cookies für bestimmte
              Fälle oder generell ausschließen sowie das automatische
              Löschen der Cookies beim Schließen des Browsers aktivieren.
              Bei der Deaktivierung von Cookies kann die Funktionalität
              dieser Website eingeschränkt sein.
            </p>
          </div>

          {/* 7. Google Analytics */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              7. Google Analytics 4
            </h2>
            <p>
              Diese Website nutzt Google Analytics 4, einen Webanalysedienst
              der Google Ireland Limited (&quot;Google&quot;), Gordon House,
              Barrow Street, Dublin 4, Irland. Google Analytics verwendet
              Cookies, die eine Analyse der Benutzung der Website durch Sie
              ermöglichen.
            </p>
            <p className="mt-3">
              Google Analytics 4 wird ausschließlich mit Ihrer Einwilligung
              aktiviert (Art. 6 Abs. 1 lit. a DSGVO / § 25 Abs. 1 TDDDG).
              Ohne Ihre Zustimmung im Cookie-Banner werden keine
              Tracking-Daten an Google übermittelt. Wir nutzen Google
              Consent Mode v2, sodass im Falle einer Ablehnung nur
              cookielose, aggregierte Signale (sog. Pings) an Google
              gesendet werden, die keine Rückschlüsse auf einzelne Personen
              zulassen.
            </p>
            <p className="mt-3">
              Wir haben die IP-Anonymisierung aktiviert. Die IP-Adresse wird
              von Google innerhalb von Mitgliedstaaten der Europäischen
              Union oder in anderen Vertragsstaaten des Abkommens über den
              Europäischen Wirtschaftsraum zuvor gekürzt. Nur in
              Ausnahmefällen wird die volle IP-Adresse an einen Server von
              Google in den USA übertragen und dort gekürzt. Google hat sich
              zur Einhaltung der EU-Standardvertragsklauseln verpflichtet.
            </p>
            <p className="mt-3">
              Measurement-ID: [wird nachgetragen]
            </p>
            <p className="mt-3">
              Weitere Informationen zum Umgang mit Nutzerdaten bei Google
              Analytics finden Sie in der{" "}
              <Link
                href="https://support.google.com/analytics/answer/6004245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                Datenschutzerklärung von Google
              </Link>
              . Sie können die Erfassung Ihrer Daten durch Google Analytics
              verhindern, indem Sie das{" "}
              <Link
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                Browser-Add-on zur Deaktivierung von Google Analytics
              </Link>{" "}
              installieren.
            </p>
          </div>

          {/* 8. Kontaktformular */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              8. Kontaktformular (Formspree)
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
              werden Ihre Angaben aus dem Anfrageformular inklusive der von
              Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>
            <p className="mt-3">
              Für die Verarbeitung der Kontaktformulardaten nutzen wir den
              Dienst Formspree (Formspree Inc., 1123 Broadway, Suite 220,
              New York, NY 10010, USA). Formspree verarbeitet die
              übermittelten Daten in unserem Auftrag und leitet die
              Formularinhalte per E-Mail an uns weiter. Dabei werden die
              Daten auf Servern in den USA verarbeitet.
            </p>
            <p className="mt-3">
              Für die Datenübermittlung in die USA hat Formspree
              EU-Standardvertragsklauseln (Standard Contractual Clauses –
              SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO abgeschlossen, um ein
              angemessenes Datenschutzniveau sicherzustellen.
            </p>
            <p className="mt-3">
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten
              erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art.
              6 Abs. 1 lit. a DSGVO) bzw. zur Durchführung vorvertraglicher
              Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO). Sie können Ihre
              Einwilligung jederzeit mit Wirkung für die Zukunft
              widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
            </p>
            <p className="mt-3">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
              bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener
              Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
              Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
              unberührt.
            </p>
          </div>

          {/* 9. WhatsApp-Button */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              9. WhatsApp-Button
            </h2>
            <p>
              Auf unserer Website befindet sich ein WhatsApp-Button, der
              Ihnen die Möglichkeit bietet, uns über den
              Messaging-Dienst WhatsApp (WhatsApp Ireland Limited, 4 Grand
              Canal Square, Grand Canal Harbour, Dublin 2, Irland) zu
              kontaktieren.
            </p>
            <p className="mt-3">
              Der Button ist als einfacher Link implementiert. Durch die
              bloße Anzeige des Buttons auf unserer Website findet keine
              automatische Datenübertragung an WhatsApp statt. Erst wenn
              Sie aktiv auf den Button klicken, werden Sie zu WhatsApp
              weitergeleitet. Ab diesem Zeitpunkt gelten die
              Datenschutzbestimmungen von WhatsApp bzw. der Meta Platforms
              Ireland Limited.
            </p>
            <p className="mt-3">
              Die Nutzung des WhatsApp-Buttons erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktiven
              Klick). Weitere Informationen finden Sie in der{" "}
              <Link
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                Datenschutzerklärung von WhatsApp
              </Link>
              .
            </p>
          </div>

          {/* 10. Schriftarten */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              10. Lokal gehostete Schriftarten
            </h2>
            <p>
              Diese Website nutzt Schriftarten, die über Next.js
              Font-Optimierung lokal eingebunden werden. Es erfolgt keine
              Verbindung zu externen Servern (z. B. Google Fonts) beim
              Laden der Schriftarten. Die Schriftdateien werden zusammen mit
              der Website ausgeliefert und direkt von unserem Server
              geladen. Dadurch wird keine IP-Adresse oder sonstige
              personenbezogene Daten an Drittanbieter von Schriftarten
              übermittelt.
            </p>
          </div>

          {/* 11. Rechte der Betroffenen */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              11. Rechte der betroffenen Personen
            </h2>
            <p>
              Als betroffene Person haben Sie nach der DSGVO folgende
              Rechte:
            </p>

            <h3 className="mb-2 mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              Auskunftsrecht (Art. 15 DSGVO)
            </h3>
            <p>
              Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
              Sie betreffende personenbezogene Daten verarbeitet werden.
              Ist dies der Fall, so haben Sie ein Recht auf Auskunft über
              diese personenbezogenen Daten und auf die in Art. 15 DSGVO
              im Einzelnen aufgeführten Informationen.
            </p>

            <h3 className="mb-2 mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              Recht auf Berichtigung (Art. 16 DSGVO)
            </h3>
            <p>
              Sie haben das Recht, unverzüglich die Berichtigung Sie
              betreffender unrichtiger personenbezogener Daten und ggf. die
              Vervollständigung unvollständiger Daten zu verlangen.
            </p>

            <h3 className="mb-2 mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              Recht auf Löschung (Art. 17 DSGVO)
            </h3>
            <p>
              Sie haben das Recht, die Löschung Sie betreffender
              personenbezogener Daten zu verlangen, sofern einer der in
              Art. 17 DSGVO genannten Gründe zutrifft, z. B. wenn die
              Daten für die verfolgten Zwecke nicht mehr benötigt werden.
            </p>

            <h3 className="mb-2 mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
            </h3>
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung zu
              verlangen, wenn eine der in Art. 18 DSGVO genannten
              Voraussetzungen gegeben ist, z. B. wenn Sie Widerspruch gegen
              die Verarbeitung eingelegt haben.
            </p>

            <h3 className="mb-2 mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
            </h3>
            <p>
              Sie haben das Recht, die Sie betreffenden personenbezogenen
              Daten, die Sie uns bereitgestellt haben, in einem
              strukturierten, gängigen und maschinenlesbaren Format zu
              erhalten, und Sie haben das Recht, diese Daten einem anderen
              Verantwortlichen ohne Behinderung zu übermitteln.
            </p>

            <h3 className="mb-2 mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              Widerspruchsrecht (Art. 21 DSGVO)
            </h3>
            <p>
              Sie haben das Recht, aus Gründen, die sich aus Ihrer
              besonderen Situation ergeben, jederzeit gegen die Verarbeitung
              Sie betreffender personenbezogener Daten, die aufgrund von
              Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch
              einzulegen. Der Verantwortliche verarbeitet die
              personenbezogenen Daten dann nicht mehr, es sei denn, er kann
              zwingende schutzwürdige Gründe für die Verarbeitung
              nachweisen, die die Interessen, Rechte und Freiheiten der
              betroffenen Person überwiegen, oder die Verarbeitung dient der
              Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen.
            </p>

            <h3 className="mb-2 mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-text-primary)]">
              Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)
            </h3>
            <p>
              Sie haben das Recht, Ihre erteilte Einwilligung jederzeit zu
              widerrufen. Der Widerruf der Einwilligung berührt nicht die
              Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf
              erfolgten Verarbeitung.
            </p>
          </div>

          {/* 12. Beschwerderecht */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              12. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
              gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf
              Beschwerde bei einer Aufsichtsbehörde zu, wenn Sie der
              Ansicht sind, dass die Verarbeitung der Sie betreffenden
              personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
            <p className="mt-3">
              Die für uns zuständige Aufsichtsbehörde ist:
            </p>
            <p className="mt-3">
              Der Landesbeauftragte für den Datenschutz und die
              Informationsfreiheit Rheinland-Pfalz
              <br />
              Postfach 30 40
              <br />
              55020 Mainz
              <br />
              Telefon: +49 6131 208-2449
              <br />
              E-Mail:{" "}
              <Link
                href="mailto:poststelle@datenschutz.rlp.de"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                poststelle@datenschutz.rlp.de
              </Link>
              <br />
              Web:{" "}
              <Link
                href="https://www.datenschutz.rlp.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                www.datenschutz.rlp.de
              </Link>
            </p>
          </div>

          {/* 13. Änderung */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              13. Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
              damit sie stets den aktuellen rechtlichen Anforderungen
              entspricht oder um Änderungen unserer Leistungen in der
              Datenschutzerklärung umzusetzen, z. B. bei der Einführung
              neuer Services. Für Ihren erneuten Besuch gilt dann die neue
              Datenschutzerklärung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
