import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import PageIntro from '@/components/shared/PageIntro';
import ServiceCard from '@/components/services/ServiceCard';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow='Services'
          title='Flexible PR support for releases, tours, artist development, and long-term visibility.'
          description='We build campaigns around your goals, timeline, and audience — from targeted media outreach to larger strategic rollouts.'
          maxWidth='lg'
        />

        <section style={{ padding: '1rem 0 5rem' }}>
          <Container>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1rem',
              }}
            >
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
