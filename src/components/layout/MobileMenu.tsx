'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavLink from './NavLink';
import styles from './MobileMenu.module.scss';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/roster', label: 'Roster' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className={styles.mobileOnly}>
      <button
        type='button'
        className={styles.toggle}
        aria-expanded={isOpen}
        aria-controls='mobile-nav'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
        <nav
          id='mobile-nav'
          className={styles.panel}
          aria-label='Mobile navigation'
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  onClick={closeMenu}
                />
              </li>
            ))}
          </ul>

          <Link href='/contact' className={styles.cta} onClick={closeMenu}>
            Start a Campaign
          </Link>
        </nav>
      </div>
    </div>
  );
}
