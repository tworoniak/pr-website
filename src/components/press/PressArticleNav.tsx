import Link from 'next/link';
import Container from '@/components/layout/Container';
import type { PressReleaseItem } from '@/data/press';
import styles from './PressArticleNav.module.scss';

type PressArticleNavProps = {
  previous: PressReleaseItem | null;
  next: PressReleaseItem | null;
};

export default function PressArticleNav({
  previous,
  next,
}: PressArticleNavProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.topRow}>
          <Link href='/press' className={styles.backLink}>
            ← Back to Press
          </Link>
        </div>

        <div className={styles.grid}>
          {previous ? (
            <Link href={`/press/${previous.slug}`} className={styles.card}>
              <p className={styles.label}>Newer Article</p>
              <h3>{previous.title}</h3>
              <span>{previous.date}</span>
            </Link>
          ) : (
            <div className={`${styles.card} ${styles.empty}`}>
              <p className={styles.label}>Newer Article</p>
              <h3>No newer article</h3>
            </div>
          )}

          {next ? (
            <Link href={`/press/${next.slug}`} className={styles.card}>
              <p className={styles.label}>Older Article</p>
              <h3>{next.title}</h3>
              <span>{next.date}</span>
            </Link>
          ) : (
            <div className={`${styles.card} ${styles.empty}`}>
              <p className={styles.label}>Older Article</p>
              <h3>No older article</h3>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
