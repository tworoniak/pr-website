import Link from 'next/link';
import Container from './Container';
import styles from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div>
          <p className={styles.brand}>ANTIHERO PR</p>
          <p className={styles.copy}>
            Modern PR for artists, heavy music, and campaigns that need impact.
          </p>
        </div>

        <nav aria-label='Footer navigation' className={styles.nav}>
          <Link href='/about'>About</Link>
          <Link href='/services'>Services</Link>
          <Link href='/roster'>Roster</Link>
          <Link href='/press'>Press</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
      </Container>

      <Container>
        <div className={styles.bottom}>
          <p>© {year} Antihero PR. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
