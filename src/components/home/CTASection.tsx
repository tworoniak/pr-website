import Link from 'next/link';
import Container from '@/components/layout/Container';
import styles from './CTASection.module.scss';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.kicker}>Ready to work together?</p>
            <h2>
              Let’s build a campaign that gets your artists seen and heard.
            </h2>
            <p className={styles.copy}>
              Whether you are planning an album rollout, tour announcement,
              media push, or long-term artist strategy, we’d love to hear what
              you’re working on.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href='/contact' className={styles.primary}>
              Contact Us
            </Link>
            <Link href='/services' className={styles.secondary}>
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
