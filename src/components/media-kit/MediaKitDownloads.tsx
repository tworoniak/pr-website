import Link from 'next/link';
import Container from '@/components/layout/Container';
import { mediaKitDownloads } from '@/data/mediaKit';
import styles from './MediaKitDownloads.module.scss';

export default function MediaKitDownloads() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.kicker}>Downloads</p>
          <h2>Approved assets for editorial and promotional use.</h2>
        </div>

        <div className={styles.grid}>
          {mediaKitDownloads.map((item) => (
            <article key={item.id} className={styles.card}>
              <p className={styles.fileType}>{item.fileType}</p>
              <h3>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>

              <Link href={item.href} className={styles.link}>
                Download
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
