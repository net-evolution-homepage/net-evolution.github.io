import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Net-Evolution – Angaben gemäß § 5 DDG. IT-Sicherheitsdienstleistungen von Marvin Henrich, Dorsheim.",
};

export default function ImpressumPage() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-12 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Impressum
        </h1>

        <div className="space-y-10 text-base leading-7 text-[var(--color-text-secondary)]">
          {/* Angaben gemäß § 5 DDG */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
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
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Kontakt
            </h2>
            <p>
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

          {/* Umsatzsteuer-ID */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              [wird nachgetragen]
            </p>
          </div>

          {/* Verantwortlich */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Marvin Henrich
              <br />
              Weinbergstraße 17
              <br />
              55452 Dorsheim
            </p>
          </div>

          {/* Streitschlichtung */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <Link
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-cyan)] underline decoration-[var(--color-accent-cyan)]/30 transition-colors hover:text-[var(--color-accent-cyan-dim)]"
              >
                https://ec.europa.eu/consumers/odr/
              </Link>
              .
            </p>
            <p className="mt-3">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          {/* Verbraucherstreitbeilegung */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          {/* Haftung für Inhalte */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </div>

          {/* Haftung für Links */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir
              für diese fremden Inhalte auch keine Gewähr übernehmen. Für
              die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
              waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-3">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten
              ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
              nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          {/* Urheberrecht */}
          <div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke
              auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
              der schriftlichen Zustimmung des jeweiligen Autors bzw.
              Erstellers. Downloads und Kopien dieser Seite sind nur für
              den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-3">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber
              erstellt wurden, werden die Urheberrechte Dritter beachtet.
              Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
              Sollten Sie trotzdem auf eine Urheberrechtsverletzung
              aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
