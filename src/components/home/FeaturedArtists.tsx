import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { roster } from '@/data/roster';
import styles from './FeaturedArtists.module.scss';

const featured = roster.slice(0, 3);

export default function FeaturedArtists() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.kicker}>Featured Artists</p>
          <h2>
            Campaigns built around artists with identity, vision, and momentum.
          </h2>
        </div>

        <div className={styles.grid}>
          {featured.map((band, index) => (
            <article
              key={band.id}
              className={`${styles.card} ${index === 0 ? styles.featured : ''}`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={band.image}
                  alt={band.name}
                  fill
                  sizes='(max-width: 900px) 100vw, 50vw'
                />
              </div>

              <div className={styles.overlay}>
                <p className={styles.genre}>{band.genre}</p>
                <h3>{band.name}</h3>
                <p className={styles.blurb}>{band.blurb}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href='/roster' className={styles.link}>
            View Full Roster
          </Link>
        </div>
      </Container>
    </section>
  );
}
