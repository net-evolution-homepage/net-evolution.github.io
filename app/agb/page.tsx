import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen (AGB) von Net-Evolution für IT-Sicherheitsdienstleistungen.",
};

export default function AGBPage() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="mb-12 text-sm text-[var(--color-text-muted)]">
          Stand: 22.09.2024
        </p>

        <div className="space-y-10 text-base leading-7 text-[var(--color-text-secondary)]">
          {/* §1 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 1 Geltungsbereich
            </h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend
              &quot;AGB&quot;) gelten für alle Verträge zwischen
              Net-Evolution, Inhaber Marvin Henrich, Weinbergstraße 17,
              55452 Dorsheim (nachfolgend &quot;Auftragnehmer&quot;) und dem
              jeweiligen Auftraggeber (nachfolgend &quot;Auftraggeber&quot;)
              über die Erbringung von IT-Sicherheitsdienstleistungen.
            </p>
            <p className="mt-3">
              (2) Abweichende, entgegenstehende oder ergänzende Allgemeine
              Geschäftsbedingungen des Auftraggebers werden nur dann
              Vertragsbestandteil, wenn und soweit der Auftragnehmer ihrer
              Geltung ausdrücklich schriftlich zugestimmt hat. Dieses
              Zustimmungserfordernis gilt in jedem Fall, beispielsweise auch
              dann, wenn der Auftragnehmer in Kenntnis der AGB des
              Auftraggebers die Leistung vorbehaltlos erbringt.
            </p>
            <p className="mt-3">
              (3) Diese AGB gelten ausschließlich gegenüber Unternehmern im
              Sinne von § 14 BGB, juristischen Personen des öffentlichen
              Rechts oder öffentlich-rechtlichen Sondervermögen.
            </p>
          </div>

          {/* §2 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 2 Vertragsgegenstand
            </h2>
            <p>
              (1) Gegenstand des Vertrages ist die Erbringung von
              IT-Sicherheitsdienstleistungen durch den Auftragnehmer. Der
              genaue Umfang der Leistungen ergibt sich aus dem jeweiligen
              Angebot, der Leistungsbeschreibung oder dem individuellen
              Vertrag.
            </p>
            <p className="mt-3">
              (2) Der Auftragnehmer erbringt seine Leistungen nach dem
              aktuellen Stand der Technik und unter Beachtung der
              einschlägigen gesetzlichen Vorschriften, insbesondere des
              IT-Sicherheitsrechts und des Datenschutzrechts.
            </p>
            <p className="mt-3">
              (3) Die Leistungen des Auftragnehmers stellen
              Dienstleistungen dar, sofern nicht ausdrücklich ein bestimmter
              Erfolg geschuldet wird. Der Auftragnehmer schuldet die
              sorgfältige und fachgerechte Durchführung der vereinbarten
              Tätigkeiten.
            </p>
          </div>

          {/* §3 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 3 Leistungskatalog
            </h2>
            <p>
              Der Auftragnehmer bietet insbesondere folgende
              IT-Sicherheitsdienstleistungen an:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 pl-4">
              <li>
                <span className="font-medium text-[var(--color-text-primary)]">
                  Security Audits und Schwachstellenanalysen:
                </span>{" "}
                Systematische Überprüfung von IT-Systemen, Netzwerken und
                Anwendungen auf Sicherheitslücken und Schwachstellen,
                einschließlich der Erstellung detaillierter Berichte mit
                Handlungsempfehlungen.
              </li>
              <li>
                <span className="font-medium text-[var(--color-text-primary)]">
                  Penetration Testing (Webanwendungen, APIs, Infrastruktur):
                </span>{" "}
                Simulierte Angriffe auf IT-Systeme zur Identifizierung von
                Sicherheitslücken, die von Angreifern ausgenutzt werden
                könnten. Umfasst externe und interne Tests, Black-Box-,
                Grey-Box- und White-Box-Ansätze.
              </li>
              <li>
                <span className="font-medium text-[var(--color-text-primary)]">
                  NIS2- und Compliance-Beratung (ISO 27001, SOC 2):
                </span>{" "}
                Beratung und Unterstützung bei der Umsetzung regulatorischer
                Anforderungen, einschließlich NIS2-Richtlinie, ISO 27001
                und SOC 2. Gap-Analysen, Maßnahmenpläne und Begleitung bei
                Zertifizierungsprozessen.
              </li>
              <li>
                <span className="font-medium text-[var(--color-text-primary)]">
                  Security Retainer (laufende Sicherheitsbegleitung):
                </span>{" "}
                Kontinuierliche Sicherheitsbetreuung mit festem
                Stundenkontingent, regelmäßigen Reviews und priorisierten
                Reaktionszeiten bei Sicherheitsvorfällen.
              </li>
              <li>
                <span className="font-medium text-[var(--color-text-primary)]">
                  IT-Sicherheitsberatung für Unternehmen:
                </span>{" "}
                Individuelle Beratung zu Sicherheitsstrategien,
                Architektur-Reviews, Risikoanalysen und Erstellung von
                Sicherheitskonzepten.
              </li>
            </ul>
            <p className="mt-4">
              Der konkrete Leistungsumfang wird im jeweiligen Angebot
              individuell festgelegt.
            </p>
          </div>

          {/* §4 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 4 Angebot und Vertragsschluss
            </h2>
            <p>
              (1) Die Darstellung der Leistungen auf der Website des
              Auftragnehmers stellt kein rechtlich bindendes Angebot,
              sondern eine unverbindliche Aufforderung zur Abgabe eines
              Angebots dar.
            </p>
            <p className="mt-3">
              (2) Nach Eingang einer Anfrage erstellt der Auftragnehmer ein
              individuelles Angebot. Dieses Angebot ist, sofern nicht
              anders angegeben, 30 Kalendertage gültig.
            </p>
            <p className="mt-3">
              (3) Der Vertrag kommt durch schriftliche Auftragsbestätigung
              des Auftragnehmers oder durch Beginn der Leistungserbringung
              zustande. Die Schriftform ist auch durch E-Mail gewahrt.
            </p>
            <p className="mt-3">
              (4) Nachträgliche Änderungen oder Erweiterungen des
              Leistungsumfangs bedürfen einer gesonderten schriftlichen
              Vereinbarung. Der Auftragnehmer wird dem Auftraggeber hierfür
              ein separates Angebot unterbreiten.
            </p>
          </div>

          {/* §5 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 5 Leistungsumfang und Durchführung
            </h2>
            <p>
              (1) Der Auftragnehmer erbringt die vertraglich vereinbarten
              Leistungen nach bestem Wissen und Gewissen unter Anwendung
              anerkannter Methoden und Standards der IT-Sicherheit
              (insbesondere OWASP, BSI-Grundschutz, PTES, OSSTMM).
            </p>
            <p className="mt-3">
              (2) Der Auftragnehmer bestimmt die Art und Weise der
              Leistungserbringung nach eigenem fachlichem Ermessen, soweit
              nicht im Einzelvertrag abweichende Vereinbarungen getroffen
              wurden.
            </p>
            <p className="mt-3">
              (3) Leistungstermine und -fristen sind nur dann verbindlich,
              wenn sie ausdrücklich als solche vereinbart wurden. Der
              Auftragnehmer wird den Auftraggeber unverzüglich informieren,
              wenn absehbar ist, dass vereinbarte Termine nicht eingehalten
              werden können.
            </p>
            <p className="mt-3">
              (4) Die Ergebnisse der Leistungserbringung werden dem
              Auftraggeber in Form eines schriftlichen Berichts
              (Abschlussbericht) übergeben, sofern nicht anders vereinbart.
              Der Bericht enthält eine Zusammenfassung der Ergebnisse,
              eine Risikoeinschätzung sowie konkrete Handlungsempfehlungen.
            </p>
            <p className="mt-3">
              (5) Teilleistungen sind zulässig, soweit sie für den
              Auftraggeber zumutbar sind.
            </p>
          </div>

          {/* §6 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 6 Mitwirkungspflichten des Auftraggebers
            </h2>
            <p>
              (1) Der Auftraggeber ist verpflichtet, die für die
              Durchführung der Leistungen erforderlichen Mitwirkungshandlungen
              rechtzeitig und vollständig zu erbringen. Insbesondere hat der
              Auftraggeber:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 pl-4">
              <li>
                alle für die Leistungserbringung erforderlichen
                Informationen, Unterlagen und Zugänge rechtzeitig und
                unentgeltlich zur Verfügung zu stellen;
              </li>
              <li>
                Ansprechpartner zu benennen, die fachlich qualifiziert und
                entscheidungsbefugt sind;
              </li>
              <li>
                vor Beginn der Tests eine schriftliche Autorisierung
                (Permission to Test) zu erteilen;
              </li>
              <li>
                sicherzustellen, dass die zu prüfenden Systeme in einem
                Zustand vorliegen, der eine sinnvolle Prüfung ermöglicht;
              </li>
              <li>
                den Auftragnehmer unverzüglich über Änderungen an den zu
                prüfenden Systemen zu informieren, die während der
                Testdurchführung vorgenommen werden.
              </li>
            </ul>
            <p className="mt-3">
              (2) Kommt der Auftraggeber seinen Mitwirkungspflichten nicht
              oder nicht rechtzeitig nach, verlängern sich vereinbarte
              Leistungsfristen entsprechend. Der Auftragnehmer ist
              berechtigt, den durch die Verzögerung entstehenden Mehraufwand
              nach den vereinbarten Konditionen in Rechnung zu stellen.
            </p>
            <p className="mt-3">
              (3) Für Schäden, die auf die Verletzung der
              Mitwirkungspflichten zurückzuführen sind, haftet der
              Auftragnehmer nicht.
            </p>
          </div>

          {/* §7 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 7 Vergütung und Zahlung
            </h2>
            <p>
              (1) Die Vergütung richtet sich nach dem individuellen Angebot.
              Alle genannten Preise verstehen sich als Nettopreise
              zuzüglich der gesetzlichen Umsatzsteuer.
            </p>
            <p className="mt-3">
              (2) Sofern nicht anders vereinbart, wird die Vergütung nach
              Abschluss der Leistung und Übergabe des Abschlussberichts in
              Rechnung gestellt. Bei umfangreicheren Projekten kann eine
              Abschlagszahlung oder Aufteilung in Teilrechnungen vereinbart
              werden.
            </p>
            <p className="mt-3">
              (3) Rechnungen sind innerhalb von 14 Kalendertagen nach
              Rechnungserhalt ohne Abzug zur Zahlung fällig, sofern nicht
              anders vereinbart.
            </p>
            <p className="mt-3">
              (4) Im Falle des Zahlungsverzugs ist der Auftragnehmer
              berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über
              dem Basiszinssatz gemäß § 288 Abs. 2 BGB zu verlangen. Die
              Geltendmachung eines weitergehenden Verzugsschadens bleibt
              vorbehalten.
            </p>
            <p className="mt-3">
              (5) Reise- und Übernachtungskosten werden, sofern nicht im
              Angebot enthalten, gesondert nach tatsächlichem Aufwand
              abgerechnet.
            </p>
          </div>

          {/* §8 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 8 Vertraulichkeit und Geheimhaltung
            </h2>
            <p>
              (1) Beide Vertragsparteien verpflichten sich, alle im Rahmen
              der Vertragsanbahnung und -durchführung erlangten Kenntnisse
              von vertraulichen Informationen und Geschäftsgeheimnissen der
              jeweils anderen Partei zeitlich unbegrenzt vertraulich zu
              behandeln und nur für die Zwecke der Vertragsdurchführung zu
              verwenden.
            </p>
            <p className="mt-3">
              (2) Vertrauliche Informationen im Sinne dieser AGB sind
              sämtliche Informationen, die als vertraulich gekennzeichnet
              sind oder nach den Umständen als vertraulich anzusehen sind.
              Hierzu gehören insbesondere Sicherheitsberichte,
              Schwachstellenanalysen, Penetrationstestergebnisse, technische
              Dokumentationen, Netzwerkpläne, Zugangsdaten und sonstige
              sicherheitsrelevante Informationen.
            </p>
            <p className="mt-3">
              (3) Die Geheimhaltungspflicht gilt nicht für Informationen,
              die:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
              <li>
                zum Zeitpunkt der Mitteilung bereits öffentlich bekannt
                waren oder danach ohne Verschulden der empfangenden Partei
                öffentlich bekannt werden;
              </li>
              <li>
                der empfangenden Partei vor Erhalt von der offenlegenden
                Partei bereits nachweislich bekannt waren;
              </li>
              <li>
                von der empfangenden Partei unabhängig entwickelt wurden;
              </li>
              <li>
                aufgrund gesetzlicher Verpflichtung oder behördlicher bzw.
                gerichtlicher Anordnung offengelegt werden müssen.
              </li>
            </ul>
            <p className="mt-3">
              (4) Der Auftragnehmer ist berechtigt, den Auftraggeber als
              Referenzkunden zu nennen, sofern der Auftraggeber dem nicht
              ausdrücklich widerspricht. Inhaltliche Details der
              Zusammenarbeit werden dabei nicht offengelegt.
            </p>
          </div>

          {/* §9 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 9 Haftung
            </h2>
            <p>
              (1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der
              Verletzung des Lebens, des Körpers oder der Gesundheit, die
              auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung
              des Auftragnehmers beruhen, sowie für Schäden, die auf
              vorsätzlichem oder grob fahrlässigem Verhalten beruhen.
            </p>
            <p className="mt-3">
              (2) Für leichte Fahrlässigkeit haftet der Auftragnehmer nur
              bei Verletzung wesentlicher Vertragspflichten
              (Kardinalpflichten). Wesentliche Vertragspflichten sind
              solche, deren Erfüllung die ordnungsgemäße Durchführung des
              Vertrages überhaupt erst ermöglicht und auf deren Einhaltung
              der Auftraggeber regelmäßig vertrauen darf.
            </p>
            <p className="mt-3">
              (3) Bei Verletzung wesentlicher Vertragspflichten durch
              leichte Fahrlässigkeit ist die Haftung auf den
              vertragstypischen, vorhersehbaren Schaden begrenzt. Die
              Haftung ist in jedem Fall auf die Höhe der vereinbarten
              Vergütung für den jeweiligen Einzelauftrag beschränkt.
            </p>
            <p className="mt-3">
              (4) Der Auftragnehmer haftet nicht für Schäden, die durch die
              Ausnutzung der im Rahmen von Penetrationstests aufgedeckten
              Schwachstellen durch Dritte entstehen, sofern der
              Auftragnehmer die Schwachstellen ordnungsgemäß dokumentiert
              und dem Auftraggeber mitgeteilt hat.
            </p>
            <p className="mt-3">
              (5) Der Auftragnehmer haftet nicht für Betriebsunterbrechungen
              oder Datenverluste, die im Rahmen von vereinbarten und
              autorisierten Sicherheitstests auftreten, sofern der
              Auftraggeber zuvor über die möglichen Risiken informiert wurde
              und seine Zustimmung erteilt hat.
            </p>
            <p className="mt-3">
              (6) Die vorstehenden Haftungsbeschränkungen gelten auch
              zugunsten der Erfüllungsgehilfen des Auftragnehmers.
            </p>
          </div>

          {/* §10 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 10 Datenschutz
            </h2>
            <p>
              (1) Beide Vertragsparteien verpflichten sich, die
              anwendbaren datenschutzrechtlichen Bestimmungen,
              insbesondere die DSGVO und das BDSG, einzuhalten.
            </p>
            <p className="mt-3">
              (2) Soweit der Auftragnehmer im Rahmen der
              Leistungserbringung Zugang zu personenbezogenen Daten des
              Auftraggebers erhält, wird der Auftragnehmer diese Daten nur
              im Rahmen des Auftrags und nach Weisung des Auftraggebers
              verarbeiten.
            </p>
            <p className="mt-3">
              (3) Sofern eine Auftragsverarbeitung im Sinne von Art. 28
              DSGVO vorliegt, schließen die Parteien einen gesonderten
              Auftragsverarbeitungsvertrag ab. Ein Muster hierfür wird vom
              Auftragnehmer bereitgestellt.
            </p>
            <p className="mt-3">
              (4) Weitere Informationen zur Datenverarbeitung finden Sie in
              unserer Datenschutzerklärung.
            </p>
          </div>

          {/* §11 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 11 Laufzeit und Kündigung
            </h2>
            <p>
              (1) Die Laufzeit des Vertrages ergibt sich aus dem jeweiligen
              Angebot bzw. der individuellen Vereinbarung.
            </p>
            <p className="mt-3">
              (2) Einzelaufträge (z. B. einzelne Penetrationstests oder
              Security Audits) enden mit der Erbringung der vereinbarten
              Leistung und Übergabe des Abschlussberichts.
            </p>
            <p className="mt-3">
              (3) Dauerschuldverhältnisse (z. B. Security Retainer) können
              von beiden Parteien mit einer Frist von drei Monaten zum
              Monatsende ordentlich gekündigt werden, sofern im
              Einzelvertrag keine abweichende Regelung getroffen wurde.
            </p>
            <p className="mt-3">
              (4) Das Recht zur außerordentlichen Kündigung aus wichtigem
              Grund bleibt unberührt. Ein wichtiger Grund liegt
              insbesondere vor, wenn:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
              <li>
                eine Vertragspartei trotz Mahnung und angemessener
                Nachfristsetzung wesentliche Vertragspflichten verletzt;
              </li>
              <li>
                über das Vermögen einer Vertragspartei ein
                Insolvenzverfahren eröffnet oder die Eröffnung mangels
                Masse abgelehnt wird;
              </li>
              <li>
                der Auftraggeber die Autorisierung für die
                Sicherheitstests widerruft.
              </li>
            </ul>
            <p className="mt-3">
              (5) Die Kündigung bedarf der Schriftform. Die Schriftform ist
              auch durch E-Mail gewahrt.
            </p>
          </div>

          {/* §12 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 12 Schlussbestimmungen
            </h2>
            <p>
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter
              Ausschluss des UN-Kaufrechts (CISG).
            </p>
            <p className="mt-3">
              (2) Gerichtsstand für alle Streitigkeiten aus oder im
              Zusammenhang mit dem Vertragsverhältnis ist, soweit gesetzlich
              zulässig, der Geschäftssitz des Auftragnehmers (Amtsgericht
              Bad Kreuznach).
            </p>
            <p className="mt-3">
              (3) Änderungen und Ergänzungen dieser AGB bedürfen der
              Schriftform. Dies gilt auch für die Aufhebung dieses
              Schriftformerfordernisses.
            </p>
            <p className="mt-3">
              (4) Der Auftragnehmer behält sich das Recht vor, diese AGB
              mit angemessener Vorankündigung zu ändern. Bestehende
              Verträge bleiben von Änderungen unberührt.
            </p>
          </div>

          {/* §13 */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              § 13 Salvatorische Klausel
            </h2>
            <p>
              (1) Sollten einzelne Bestimmungen dieser AGB ganz oder
              teilweise unwirksam sein oder werden, so wird die Wirksamkeit
              der übrigen Bestimmungen hierdurch nicht berührt.
            </p>
            <p className="mt-3">
              (2) Anstelle der unwirksamen Bestimmung gilt diejenige
              wirksame Bestimmung als vereinbart, die dem wirtschaftlichen
              Zweck der unwirksamen Bestimmung am nächsten kommt.
              Entsprechendes gilt für etwaige Regelungslücken.
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
