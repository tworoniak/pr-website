import Image from 'next/image';
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
              <div className={styles.thumb}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes='(max-width: 900px) 100vw, 240px'
                />
              </div>

              <div className={styles.contentWrap}>
                <div className={styles.date}>{item.date}</div>

                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </div>

                <div className={styles.action}>
                  <Link href={`/press/${item.slug}`}>Read more</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
