import Link from "next/link";
import { footerNavigation } from "@/data/navigation";

const columns = [
  { title: "Leistungen", links: footerNavigation.leistungen },
  { title: "Unternehmen", links: footerNavigation.unternehmen },
  { title: "Rechtliches", links: footerNavigation.rechtliches },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block font-mono text-lg font-bold tracking-tight text-slate-900"
            >
              Net<span className="text-[#00875a]">-</span>Evolution
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              IT-Sicherheit für den deutschen Mittelstand. Security Audits,
              Penetration Testing und NIS2-Compliance-Beratung.
            </p>
            <div className="space-y-2 text-sm text-slate-500">
              <a
                href="mailto:info@net-evolution.de"
                className="block transition-colors hover:text-[#00875a]"
              >
                info@net-evolution.de
              </a>
              <a
                href="tel:+4915679708019"
                className="block transition-colors hover:text-[#00875a]"
              >
                +49 15679 708019
              </a>
            </div>
          </div>

          {/* Footer columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-[#00875a]"
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
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; 2026 Net-Evolution. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-slate-400 font-mono">
            Methodisch. Dokumentiert. Verwertbar.
          </p>
        </div>
      </div>
    </footer>
  );
}
