import Link from 'next/link';
import Container from '@/components/layout/Container';
import styles from './AboutPreview.module.scss';

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.kicker}>About</p>
            <h2>
              Artist-focused PR built around story, strategy, and long-term
              momentum.
            </h2>
          </div>

          <div className={styles.right}>
            <p>
              We work with heavy bands, forward-thinking artists, labels, and
              music-driven brands to create campaigns that feel clear,
              intentional, and culturally relevant.
            </p>

            <p>
              From album announcements and tour cycles to media outreach and
              artist positioning, our approach is built to help great work get
              the attention it deserves.
            </p>

            <Link href='/about' className={styles.link}>
              Learn more about us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
