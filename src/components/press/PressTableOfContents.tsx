import type { PressHeading } from '@/lib/press-headings';
import styles from './PressTableOfContents.module.scss';

type PressTableOfContentsProps = {
  headings: PressHeading[];
};

export default function PressTableOfContents({
  headings,
}: PressTableOfContentsProps) {
  if (!headings.length) return null;

  return (
    <aside className={styles.toc} aria-label='Table of contents'>
      <p className={styles.kicker}>On this page</p>

      <nav>
        <ul className={styles.list}>
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === 3 ? styles.level3 : styles.level2}
            >
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
