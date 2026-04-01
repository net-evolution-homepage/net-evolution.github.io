import { cn } from "@/lib/utils";

const trustItems = [
  {
    label: "Methodische Prüfung",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 1.5L2 4v4.5c0 3.5 2.5 5.5 6 7 3.5-1.5 6-3.5 6-7V4L8 1.5z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 8L7 9.5L10.5 6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "OWASP-Standard",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "DSGVO-konform",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 8h4M8 6v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Dokumentierte Ergebnisse",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M4 2.5h5.5L12 5v8.5a1 1 0 01-1 1H4a1 1 0 01-1-1v-10a1 1 0 011-1z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5.5 9h5M5.5 11h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function TrustSignals() {
  return (
    <section
      className={cn(
        "bg-white border-t border-b border-[var(--color-border-default)]"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item) => (
            <span
              key={item.label}
              className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] whitespace-nowrap"
            >
              <span className="text-[var(--color-text-muted)]">{item.icon}</span>
              <span>{item.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
