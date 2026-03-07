'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { testimonials } from '@/data/testimonials';
import styles from './TestimonialsGrid.module.scss';

export default function TestimonialsGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.kicker}>Testimonials</p>
          <h2>What artists, teams, and partners say about working with us.</h2>
        </div>

        <div className={styles.masonry}>
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              className={`${styles.card} ${styles[`variant${(index % 4) + 1}`]}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                ease: 'easeOut',
                delay: index * 0.06,
              }}
            >
              <span className={styles.quoteMark} aria-hidden='true'>
                “
              </span>

              <p className={styles.quote}>{item.quote}</p>

              <div className={styles.meta}>
                <h3>{item.name}</h3>
                <p>
                  {item.role}
                  {item.company ? ` • ${item.company}` : ''}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
