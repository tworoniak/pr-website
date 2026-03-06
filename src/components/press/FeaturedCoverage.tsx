import Link from 'next/link';
import Container from '@/components/layout/Container';
import { featuredCoverage } from '@/data/press';
import styles from './FeaturedCoverage.module.scss';

export default function FeaturedCoverage() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.kicker}>Featured Coverage</p>
          <h2>Selected placements, premieres, and campaign highlights.</h2>
        </div>

        <div className={styles.grid}>
          {featuredCoverage.map((item) => (
            <article key={item.id} className={styles.card}>
              <p className={styles.meta}>
                <span>{item.outlet}</span>
                <span>{item.type}</span>
              </p>

              <h3>{item.headline}</h3>

              <Link href={item.href} className={styles.link}>
                View coverage
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
