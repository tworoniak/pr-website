export type Band = {
  id: string;
  name: string;
  genre: string;
  image: string;
  blurb: string;
};

export const roster: Band[] = [
  {
    id: 'band-1',
    name: 'Obsidian Throne',
    genre: 'Progressive Metal',
    image: '/images/bands/band-1.jpg',
    blurb:
      'Technical precision, cinematic scope, and modern heavy songwriting.',
  },
  {
    id: 'band-2',
    name: 'Grave Static',
    genre: 'Blackened Hardcore',
    image: '/images/bands/band-2.jpg',
    blurb:
      'Relentless energy, bleak atmosphere, and a ferocious live presence.',
  },
  {
    id: 'band-3',
    name: 'Vanta Collapse',
    genre: 'Post-Metal',
    image: '/images/bands/band-3.jpg',
    blurb: 'Massive riffs, emotional weight, and immersive soundscapes.',
  },
  {
    id: 'band-4',
    name: 'Serpent Choir',
    genre: 'Death / Doom',
    image: '/images/bands/band-4.jpg',
    blurb: 'Crushing heaviness, dark melody, and an unmistakable identity.',
  },
];
