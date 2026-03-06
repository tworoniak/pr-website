import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import PageIntro from '@/components/shared/PageIntro';
import BandCard from '@/components/roster/BandCard';
import { roster } from '@/data/roster';

export default function RosterPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow='Roster'
          title='Artists and bands we’re proud to represent.'
          description='Our roster reflects a commitment to strong identity, compelling work, and campaigns built with intention.'
          maxWidth='md'
        />

        <section style={{ padding: '1rem 0 5rem' }}>
          <Container>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
              }}
            >
              {roster.map((band) => (
                <BandCard key={band.id} band={band} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
