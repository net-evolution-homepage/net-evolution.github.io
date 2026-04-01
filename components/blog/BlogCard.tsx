"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  readingTime: number;
}

const categoryColors: Record<string, string> = {
  Compliance: "bg-[var(--color-severity-medium)] text-[var(--color-bg-primary)]",
  "Penetration Testing": "bg-[var(--color-severity-critical)] text-white",
  Produkt: "bg-[var(--color-accent-cyan)] text-[var(--color-bg-primary)]",
  Events: "bg-[var(--color-severity-info)] text-white",
};

function formatDateGerman(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({
  title,
  description,
  date,
  category,
  slug,
  readingTime,
}: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group h-full"
    >
      <Link href={`/blog/${slug}`} className="block h-full">
        <div
          className={cn(
            "h-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-card)] p-6",
            "transition-all duration-300",
            "hover:border-[var(--color-border-accent)] hover:shadow-sm"
          )}
        >
          {/* Category Badge */}
          <span
            className={cn(
              "inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold",
              categoryColors[category] ||
                "bg-[var(--color-accent-green)] text-[var(--color-bg-primary)]"
            )}
          >
            {category}
          </span>

          {/* Title */}
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-text-primary)] leading-tight group-hover:text-[var(--color-accent-green)] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
            <time dateTime={date}>{formatDateGerman(date)}</time>
            <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {readingTime} Min. Lesezeit
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
