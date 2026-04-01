import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Aktuelle Artikel zu IT-Sicherheit, NIS2-Compliance, Penetration Testing und Cyber Security. Fachwissen aus der Praxis von Net-Evolution.",
  openGraph: {
    title: "Blog | Net-Evolution",
    description:
      "Aktuelle Artikel zu IT-Sicherheit, NIS2-Compliance, Penetration Testing und Cyber Security.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,135,90,0.03)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent-cyan)] mb-4">
            Wissen & Insights
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] leading-tight">
            Blog
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Aktuelle Artikel zu IT-Sicherheit, Compliance und Penetration Testing
          </p>
          <div className="mt-8 h-1 w-16 rounded-full bg-[var(--color-accent-green)] mx-auto" />
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  category={post.category}
                  slug={post.slug}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-[var(--color-text-muted)]">
                Noch keine Artikel vorhanden.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
