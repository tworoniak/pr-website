import Container from '@/components/layout/Container';
import { mediaFacts } from '@/data/mediaKit';
import styles from './MediaKitFacts.module.scss';

export default function MediaKitFacts() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.kicker}>Quick Facts</p>
          <h2>Essential information at a glance.</h2>
        </div>

        <div className={styles.grid}>
          {mediaFacts.map((item) => (
            <article key={item.label} className={styles.card}>
              <p className={styles.label}>{item.label}</p>
              <h3>{item.value}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
