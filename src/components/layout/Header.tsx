import Link from 'next/link';
import Container from './Container';
import MobileMenu from './MobileMenu';
import NavLink from './NavLink';
import styles from './Header.module.scss';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/roster', label: 'Roster' },
  { href: '/press', label: 'Press' },
  { href: '/media-kit', label: 'Media Kit' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href='/' className={styles.logo}>
          <span>ANTIHERO PR</span>
        </Link>

        <nav className={styles.nav} aria-label='Primary navigation'>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href='/contact' className={styles.cta}>
            Start a Campaign
          </Link>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
