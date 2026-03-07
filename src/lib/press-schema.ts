import { z } from 'zod';

export const pressFrontmatterSchema = z.object({
  title: z.string().min(1, 'Missing title'),
  date: z.union([z.string(), z.date()]),
  excerpt: z.string().min(1, 'Missing excerpt'),
  image: z.string().startsWith('/', 'Image must start with "/"'),
  imageAlt: z.string().min(1, 'Missing imageAlt'),
});

export type PressFrontmatterInput = z.infer<typeof pressFrontmatterSchema>;

export type PressFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};
