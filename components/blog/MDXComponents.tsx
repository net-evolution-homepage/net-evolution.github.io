import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1
      className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mt-12 mb-6 leading-tight"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mt-10 mb-4 leading-tight"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mt-8 mb-3 leading-tight"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2"
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5
      className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--color-text-primary)] mt-4 mb-2"
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6
      className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-text-secondary)] mt-4 mb-2 uppercase tracking-wide"
      {...props}
    >
      {children}
    </h6>
  ),
  p: ({ children, ...props }) => (
    <p
      className="text-[var(--color-text-secondary)] leading-relaxed mb-5"
      {...props}
    >
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan-dim)] underline underline-offset-2 transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="text-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan-dim)] underline underline-offset-2 transition-colors"
        {...props}
      >
        {children}
      </Link>
    );
  },
  ul: ({ children, ...props }) => (
    <ul
      className="list-disc list-outside ml-6 mb-5 space-y-2 text-[var(--color-text-secondary)]"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal list-outside ml-6 mb-5 space-y-2 text-[var(--color-text-secondary)]"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-[var(--color-accent-green)] pl-4 my-6 italic text-[var(--color-text-secondary)]"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }) => {
    return (
      <code
        className="bg-[var(--color-bg-card)] text-[var(--color-accent-cyan)] px-1.5 py-0.5 rounded text-sm font-[family-name:var(--font-mono)]"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }) => (
    <pre
      className={cn(
        "bg-[#f1f5f9] rounded-lg p-4 mb-5 overflow-x-auto",
        "font-[family-name:var(--font-mono)] text-sm leading-relaxed",
        "border border-[var(--color-border-default)]"
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto mb-5">
      <table
        className="w-full border-collapse text-sm text-[var(--color-text-secondary)]"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border border-[var(--color-border-default)] bg-[var(--color-bg-card)] px-4 py-2 text-left font-semibold text-[var(--color-text-primary)]"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      className="border border-[var(--color-border-default)] px-4 py-2"
      {...props}
    >
      {children}
    </td>
  ),
  img: ({ src, alt, ...props }) => (
    <figure className="my-6">
      <img
        src={src}
        alt={alt || ""}
        className="rounded-lg border border-[var(--color-border-default)] w-full"
        loading="lazy"
        {...props}
      />
      {alt && (
        <figcaption className="mt-2 text-center text-sm text-[var(--color-text-muted)]">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  hr: () => (
    <hr className="my-8 border-t border-[var(--color-border-default)]" />
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-[var(--color-text-primary)]" {...props}>
      {children}
    </strong>
  ),
};

export default mdxComponents;
