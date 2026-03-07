'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className={styles.kicker}>
            Music PR • Artist Campaigns • Media Strategy
          </p>

          <h1>
            Modern PR for heavy music, bold artists, and campaigns that deserve
            attention.
          </h1>

          <p className={styles.lead}>
            We help bands, labels, and music-driven brands cut through the noise
            with focused messaging, strong media relationships, and strategic
            campaign support.
          </p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <Link href='/contact' className={styles.primary}>
              Start a Campaign
            </Link>
            <Link href='/roster' className={styles.secondary}>
              View Current Roster
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
