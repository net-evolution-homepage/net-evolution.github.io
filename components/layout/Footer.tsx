import Link from "next/link";
import { footerNavigation } from "@/data/navigation";

const columns = [
  { title: "Leistungen", links: footerNavigation.leistungen },
  { title: "Unternehmen", links: footerNavigation.unternehmen },
  { title: "Rechtliches", links: footerNavigation.rechtliches },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block font-mono text-lg font-bold tracking-tight text-[var(--color-text-primary)]"
            >
              Net<span className="text-[var(--color-accent-green)]">-</span>Evolution
            </Link>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              IT-Sicherheit für den deutschen Mittelstand. Security Audits,
              Penetration Testing und NIS2-Compliance-Beratung.
            </p>
            <div className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <a
                href="mailto:info@net-evolution.de"
                className="block transition-colors hover:text-[var(--color-accent-green)]"
              >
                info@net-evolution.de
              </a>
              <a
                href="tel:+4915679708019"
                className="block transition-colors hover:text-[var(--color-accent-green)]"
              >
                +49 15679 708019
              </a>
            </div>
          </div>

          {/* Footer columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)]">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-green)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border-default)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © 2026 Net-Evolution. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] font-mono">
            Methodisch. Dokumentiert. Verwertbar.
          </p>
        </div>
      </div>
    </footer>
  );
}
