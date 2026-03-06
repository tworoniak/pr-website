import Link from 'next/link';
import Container from '@/components/layout/Container';
import { pressReleases } from '@/data/press';
import styles from './PressReleaseList.module.scss';

export default function PressReleaseList() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.kicker}>Press Releases & News</p>
          <h2>Recent announcements, updates, and campaign milestones.</h2>
        </div>

        <div className={styles.list}>
          {pressReleases.map((item) => (
            <article key={item.id} className={styles.item}>
              <div className={styles.date}>{item.date}</div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>

              <div className={styles.action}>
                <Link href={item.href}>Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
