import type { Metadata } from 'next';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const SITE_URL = 'https://antiheropr.com';

export function buildSEO({
  title,
  description,
  path = '',
  image = '/images/og-default.jpg',
}: SEOProps): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
