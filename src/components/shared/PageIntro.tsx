import Container from '@/components/layout/Container';
import styles from './PageIntro.module.scss';

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  maxWidth?: 'sm' | 'md' | 'lg';
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  maxWidth = 'md',
}: PageIntroProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.inner} ${styles[maxWidth]}`}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h1>{title}</h1>
          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
