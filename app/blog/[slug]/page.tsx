import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import mdxComponents from "@/components/blog/MDXComponents";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artikel nicht gefunden" };

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: `${post.meta.title} | Net-Evolution`,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
    },
  };
}

function formatDateGerman(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    author: {
      "@type": "Person",
      name: post.meta.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Net-Evolution",
      url: "https://www.net-evolution.de",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.net-evolution.de/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,135,90,0.03)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Link
              href="/blog"
              className="hover:text-[var(--color-accent-cyan)] transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-[var(--color-text-secondary)] truncate">
              {post.meta.title}
            </span>
          </nav>

          {/* Category Badge */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent-cyan)] text-[var(--color-bg-primary)] mb-4">
            {post.meta.category}
          </span>

          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] leading-tight">
            {post.meta.title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {post.meta.author}
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <time dateTime={post.meta.date}>
                {formatDateGerman(post.meta.date)}
              </time>
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                width="16"
                height="16"
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
              {post.meta.readingTime} Min. Lesezeit
            </span>
          </div>

          <div className="mt-8 h-px bg-gradient-to-r from-[var(--color-border-default)] via-[var(--color-accent-green)] to-[var(--color-border-default)] opacity-30" />
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <article className="prose-custom">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-[var(--color-border-default)]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-cyan)] hover:text-[var(--color-accent-green)] transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Alle Artikel anzeigen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
