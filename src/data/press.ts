export type CoverageItem = {
  id: string;
  outlet: string;
  headline: string;
  type: string;
  href: string;
};

export type PressReleaseItem = {
  id: string;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
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
    slug: 'obsidian-throne-announces-new-album-and-lead-single',
    date: 'March 2026',
    title: 'Obsidian Throne Announces New Album and Lead Single',
    excerpt:
      'The band begins its next campaign cycle with a new single, updated visuals, and a full-length announcement.',
    content: [
      'Obsidian Throne has announced its upcoming full-length album, launching the campaign with a powerful lead single and a refreshed visual identity.',
      'The rollout is designed to build momentum across editorial coverage, streaming discovery, and fan engagement, with a focus on targeted media relationships and high-impact story framing.',
      'Additional campaign elements include single-focused assets, long-lead press outreach, and support for the album announcement across key music media outlets.',
    ],
  },
  {
    id: 'press-2',
    slug: 'grave-static-confirms-spring-tour-dates',
    date: 'February 2026',
    title: 'Grave Static Confirms Spring Tour Dates',
    excerpt:
      'A targeted live campaign supporting new material and expanded regional press outreach.',
    content: [
      'Grave Static has confirmed a new run of spring tour dates in support of the band’s latest material.',
      'The campaign is structured to support both ticket awareness and broader artist visibility, with regional press outreach, preview coverage, and live-focused story angles.',
      'This next phase is intended to strengthen the band’s presence in key markets while building continuity between touring activity and upcoming release plans.',
    ],
  },
  {
    id: 'press-3',
    slug: 'serpent-choir-signs-with-new-label-partner',
    date: 'January 2026',
    title: 'Serpent Choir Signs With New Label Partner',
    excerpt:
      'A new chapter for the band with strategic positioning around the signing announcement and next release.',
    content: [
      'Serpent Choir has officially signed with a new label partner, marking the start of a major new chapter for the band.',
      'The announcement campaign centers on positioning the signing as both a milestone and a launch point for the next creative era, supported by messaging development and targeted press outreach.',
      'Future updates will include release details, campaign assets, and expanded media activity tied to the band’s next record cycle.',
    ],
  },
  {
    id: 'press-4',
    slug: 'vanta-collapse-releases-new-visual-and-campaign-assets',
    date: 'December 2025',
    title: 'Vanta Collapse Releases New Visual and Campaign Assets',
    excerpt:
      'A visual-forward release strategy built to support long-tail media attention and audience growth.',
    content: [
      'Vanta Collapse has unveiled a new suite of visual assets as part of its current campaign strategy.',
      'The rollout emphasizes strong visual identity, continuity across platforms, and a release framework that supports both immediate attention and long-term discoverability.',
      'The campaign includes updated artist materials, media-facing assets, and story positioning designed to support future announcements and editorial opportunities.',
    ],
  },
];

export function getPressReleaseBySlug(slug: string) {
  return pressReleases.find((item) => item.slug === slug);
}

export function getPressReleaseIndex(slug: string) {
  return pressReleases.findIndex((item) => item.slug === slug);
}

export function getAdjacentPressReleases(slug: string) {
  const index = getPressReleaseIndex(slug);

  if (index === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: index > 0 ? pressReleases[index - 1] : null,
    next: index < pressReleases.length - 1 ? pressReleases[index + 1] : null,
  };
}
