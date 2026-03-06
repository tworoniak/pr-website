'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@/components/layout/Container';
import BandCard from '@/components/roster/BandCard';
import { roster } from '@/data/roster';
import styles from './RosterCarousel.module.scss';

export default function RosterCarousel() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.kicker}>Current Roster</p>
          <h2>Artists and bands we’re proud to represent.</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.4 },
            900: { slidesPerView: 2.2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {roster.map((band) => (
            <SwiperSlide key={band.id}>
              <BandCard band={band} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
