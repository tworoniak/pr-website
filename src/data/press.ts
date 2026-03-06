export type CoverageItem = {
  id: string;
  outlet: string;
  headline: string;
  type: string;
  href: string;
};

export type PressReleaseItem = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
};

export const featuredCoverage: CoverageItem[] = [
  {
    id: 'coverage-1',
    outlet: 'Decibel',
    headline: 'Band Name Shares Crushing New Single Ahead of Fall Release',
    type: 'Premiere',
    href: '#',
  },
  {
    id: 'coverage-2',
    outlet: 'Metal Injection',
    headline: 'Tour Announcement Puts Rising Heavy Act on the Map',
    type: 'News',
    href: '#',
  },
  {
    id: 'coverage-3',
    outlet: 'Kerrang!',
    headline: 'An Artist Positioning Campaign That Broke Through the Noise',
    type: 'Feature',
    href: '#',
  },
  {
    id: 'coverage-4',
    outlet: 'BrooklynVegan',
    headline:
      'Post-Metal Standout Unveils New Album Details and Visual Rollout',
    type: 'Album News',
    href: '#',
  },
];

export const pressReleases: PressReleaseItem[] = [
  {
    id: 'press-1',
    date: 'March 2026',
    title: 'Obsidian Throne Announces New Album and Lead Single',
    excerpt:
      'The band begins its next campaign cycle with a new single, updated visuals, and a full-length announcement.',
    href: '#',
  },
  {
    id: 'press-2',
    date: 'February 2026',
    title: 'Grave Static Confirms Spring Tour Dates',
    excerpt:
      'A targeted live campaign supporting new material and expanded regional press outreach.',
    href: '#',
  },
  {
    id: 'press-3',
    date: 'January 2026',
    title: 'Serpent Choir Signs With New Label Partner',
    excerpt:
      'A new chapter for the band with strategic positioning around the signing announcement and next release.',
    href: '#',
  },
  {
    id: 'press-4',
    date: 'December 2025',
    title: 'Vanta Collapse Releases New Visual and Campaign Assets',
    excerpt:
      'A visual-forward release strategy built to support long-tail media attention and audience growth.',
    href: '#',
  },
];
