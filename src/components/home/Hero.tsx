import Link from 'next/link';
import Container from '@/components/layout/Container';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <p className={styles.kicker}>
            Music PR • Artist Campaigns • Media Strategy
          </p>

          <h1>
            Modern PR for heavy music, bold artists, and campaigns that deserve
            attention.
          </h1>

          <p className={styles.lead}>
            We help bands, labels, and music-driven brands cut through the noise
            with focused messaging, strong media relationships, and strategic
            campaign support.
          </p>

          <div className={styles.actions}>
            <Link href='/contact' className={styles.primary}>
              Start a Campaign
            </Link>
            <Link href='/roster' className={styles.secondary}>
              View Current Roster
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
