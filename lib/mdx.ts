import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  slug: string;
  readingTime: number;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(contentDirectory)) return [];

  const files = fs.readdirSync(contentDirectory).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const filePath = path.join(contentDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      author: data.author,
      slug: data.slug || filename.replace(".mdx", ""),
      readingTime: Math.ceil(stats.minutes),
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    meta: {
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      author: data.author,
      slug,
      readingTime: Math.ceil(stats.minutes),
    } as BlogPostMeta,
    content,
  };
}
