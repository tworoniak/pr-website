import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { pressFrontmatterSchema, type PressFrontmatter } from './press-schema';

let cachedArticles: PressArticleMeta[] | null = null;

const pressDirectory = path.join(process.cwd(), 'content/press');

export type PressArticleMeta = PressFrontmatter & {
  slug: string;
};

export type PressArticle = {
  slug: string;
  meta: PressArticleMeta;
  content: string;
};

export function getPressSlugs(): string[] {
  return fs
    .readdirSync(pressDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

function normalizeDate(value: string | Date): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return value;
}

export function getPressArticleBySlug(slug: string): PressArticle {
  const fullPath = path.join(pressDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const parsed = pressFrontmatterSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in "${slug}.mdx": ${parsed.error.issues
        .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
        .join(', ')}`,
    );
  }

  return {
    slug,
    meta: {
      slug,
      ...parsed.data,
      date: normalizeDate(parsed.data.date),
    },
    content,
  };
}

export function getAllPressArticles(): PressArticleMeta[] {
  if (cachedArticles) return cachedArticles;

  cachedArticles = getPressSlugs()
    .map((slug) => getPressArticleBySlug(slug).meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return cachedArticles;
}

export function getAdjacentPressArticles(slug: string) {
  const articles = getAllPressArticles();
  const index = articles.findIndex((article) => article.slug === slug);

  return {
    previous: index > 0 ? articles[index - 1] : null,
    next: index < articles.length - 1 ? articles[index + 1] : null,
  };
}
