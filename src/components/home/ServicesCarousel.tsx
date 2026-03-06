'use client';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@/components/layout/Container';
import ServiceCard from '@/components/services/ServiceCard';
import { services } from '@/data/services';
import styles from './ServicesCarousel.module.scss';

export default function ServicesCarousel() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.kicker}>Services</p>
          <h2>
            Strategic PR support built for artists, releases, tours, and
            momentum.
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.4 },
            900: { slidesPerView: 2.2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
