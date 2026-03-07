export type PressHeading = {
  level: 2 | 3;
  text: string;
  id: string;
};

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function extractHeadingsFromMdx(source: string): PressHeading[] {
  const lines = source.split('\n');

  const headings: PressHeading[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith('## ')) {
      const text = trimmed.replace(/^##\s+/, '').trim();
      if (text) {
        headings.push({
          level: 2,
          text,
          id: slugifyHeading(text),
        });
      }
    }

    if (trimmed.startsWith('### ')) {
      const text = trimmed.replace(/^###\s+/, '').trim();
      if (text) {
        headings.push({
          level: 3,
          text,
          id: slugifyHeading(text),
        });
      }
    }
  }

  return headings;
}
