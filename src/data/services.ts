export type Service = {
  id: string;
  title: string;
  description: string;
  icon: 'mic' | 'newspaper' | 'sparkles' | 'calendar';
};

export const services: Service[] = [
  {
    id: 'media-relations',
    title: 'Media Relations',
    description:
      'Targeted outreach to editors, writers, producers, and tastemakers across music and entertainment media.',
    icon: 'mic',
  },
  {
    id: 'press-campaigns',
    title: 'Press Campaigns',
    description:
      'Strategic campaigns for album releases, tours, announcements, and major artist milestones.',
    icon: 'newspaper',
  },
  {
    id: 'artist-positioning',
    title: 'Artist Positioning',
    description:
      'Story development, messaging, and campaign framing that helps artists stand out in a crowded space.',
    icon: 'sparkles',
  },
  {
    id: 'tour-pr',
    title: 'Tour PR',
    description:
      'Regional and national support for tour announcements, preview coverage, and live press opportunities.',
    icon: 'calendar',
  },
];
