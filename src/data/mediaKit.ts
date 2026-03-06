export type MediaKitDownload = {
  id: string;
  title: string;
  description: string;
  href: string;
  fileType: string;
};

export type MediaFact = {
  label: string;
  value: string;
};

export const mediaKitDownloads: MediaKitDownload[] = [
  {
    id: 'media-kit-pdf',
    title: 'Media Kit PDF',
    description:
      'A concise overview of services, roster, positioning, and contact information.',
    href: '/media-kit/antihero-pr-media-kit.pdf',
    fileType: 'PDF',
  },
  {
    id: 'logos',
    title: 'Logo Pack',
    description:
      'Approved logos in multiple formats for editorial, promotional, and partner use.',
    href: '/media-kit/antihero-pr-logos.zip',
    fileType: 'ZIP',
  },
  {
    id: 'press-photos',
    title: 'Press Photos',
    description:
      'High-resolution images cleared for editorial and promotional use.',
    href: '/media-kit/press-photos.zip',
    fileType: 'ZIP',
  },
];

export const mediaFacts: MediaFact[] = [
  { label: 'Company', value: 'Antihero PR' },
  { label: 'Focus', value: 'Heavy music, artist campaigns, media strategy' },
  {
    label: 'Services',
    value: 'Media relations, campaigns, artist positioning, tour PR',
  },
  { label: 'Primary Contact', value: 'hello@antiheropr.com' },
  { label: 'Location', value: 'United States' },
  { label: 'Availability', value: 'Campaign-based and long-term support' },
];

export const mediaKitBio = `
Antihero PR is a modern public relations and campaign strategy studio focused on heavy music, artist development, and culturally aligned storytelling.

We work with bands, labels, and music-driven brands to shape messaging, support releases, strengthen media visibility, and build momentum around the moments that matter most. Our approach combines strategy, editorial awareness, and strong industry relationships to help artists cut through the noise with clarity and purpose.

From album rollouts and tour announcements to long-term positioning and press outreach, Antihero PR builds campaigns that feel intentional, credible, and connected to the audience they are meant to reach.
`.trim();
