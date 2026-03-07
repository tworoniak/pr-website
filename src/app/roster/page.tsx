import Container from '@/components/layout/Container';
import PageIntro from '@/components/shared/PageIntro';
import BandCard from '@/components/roster/BandCard';
import { roster } from '@/data/roster';
import { buildSEO } from '@/lib/seo';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';

export const metadata = buildSEO({
  title: 'Roster | Antihero PR',
  description:
    'Public relations campaigns, artist positioning, media outreach, and strategic promotion for heavy music artists.',
  path: '/roster',
});

export default function RosterPage() {
  return (
    <>
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
      <ScrollToTopButton />
    </>
  );
}
