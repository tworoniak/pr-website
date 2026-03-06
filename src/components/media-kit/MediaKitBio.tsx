import Container from '@/components/layout/Container';
import { mediaKitBio } from '@/data/mediaKit';
import styles from './MediaKitBio.module.scss';

export default function MediaKitBio() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <p className={styles.kicker}>Boilerplate</p>
            <h2>Approved company description.</h2>
          </div>

          <div className={styles.card}>
            {mediaKitBio.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
