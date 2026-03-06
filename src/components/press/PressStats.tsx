import Container from '@/components/layout/Container';
import styles from './PressStats.module.scss';

const stats = [
  { value: '150+', label: 'Press placements' },
  { value: '40+', label: 'Campaigns supported' },
  { value: '25+', label: 'Artists represented' },
  { value: '10+', label: 'Media partners reached monthly' },
];

export default function PressStats() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <article key={stat.label} className={styles.card}>
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
