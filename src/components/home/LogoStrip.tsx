import Container from '@/components/layout/Container';
import styles from './LogoStrip.module.scss';

const logos = [
  'Loudwire',
  'Decibel',
  'Metal Injection',
  'Kerrang!',
  'Revolver',
  'BrooklynVegan',
];

export default function LogoStrip() {
  return (
    <section className={styles.section} aria-label='Featured outlets'>
      <Container>
        <p className={styles.label}>
          Trusted relationships across music media and culture
        </p>

        <div className={styles.row}>
          {logos.map((logo) => (
            <div key={logo} className={styles.logo}>
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
