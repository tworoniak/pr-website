'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavLink.module.scss';

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavLink({ href, label, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  );
}
