import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { getAllPressArticles } from '@/lib/press';
import { formatDisplayDate } from '@/lib/format-date';
import styles from './FeaturedCoverage.module.scss';

export default function FeaturedCoverage() {
  const featured = getAllPressArticles().slice(0, 3);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.kicker}>Featured Coverage</p>
          <h2>Recent announcements and campaign highlights.</h2>
        </div>

        <div className={styles.grid}>
          {featured.map((item) => (
            <article key={item.slug} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes='(max-width: 900px) 100vw, 33vw'
                />
              </div>

              <div className={styles.content}>
                <p className={styles.date}>{formatDisplayDate(item.date)}</p>

                <h3>{item.title}</h3>

                <p>{item.excerpt}</p>

                <Link href={`/press/${item.slug}`}>Read article</Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
