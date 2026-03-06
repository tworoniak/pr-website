import Image from 'next/image';
import type { Band } from '@/data/roster';
import styles from './BandCard.module.scss';

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={band.image}
          alt={band.name}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      <div className={styles.content}>
        <span className={styles.genre}>{band.genre}</span>
        <h3>{band.name}</h3>
        <p>{band.blurb}</p>
      </div>
    </article>
  );
}
