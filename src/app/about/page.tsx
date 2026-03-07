import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import PageIntro from '@/components/shared/PageIntro';
import { buildSEO } from '@/lib/seo';

export const metadata = buildSEO({
  title: 'About | Antihero PR',
  description:
    'Public relations campaigns, artist positioning, media outreach, and strategic promotion for heavy music artists.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow='About'
          title='PR for heavy music, forward-thinking artists, and campaigns with purpose.'
          description='We help bands, labels, and music-driven brands shape their story, connect with the right media, and build momentum around releases, tours, and defining career moments.'
          maxWidth='lg'
        />

        <section style={{ padding: '1rem 0 5rem' }}>
          <Container>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.05fr 0.95fr',
                gap: '2rem',
                alignItems: 'start',
              }}
            >
              <div>
                <h2
                  style={{
                    marginTop: 0,
                    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                    lineHeight: 1.05,
                  }}
                >
                  Built on relationships, strategy, and cultural understanding.
                </h2>
              </div>

              <div>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
                  Great PR is not just about sending emails. It is about knowing
                  how to position an artist, frame a release, and connect that
                  story to the outlets, writers, and audiences most likely to
                  care.
                </p>

                <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
                  We work closely with artists and teams to shape messaging,
                  identify opportunities, and build campaigns that feel focused,
                  credible, and aligned with the music.
                </p>

                <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
                  Whether you are rolling out a single, launching a full album
                  cycle, announcing a tour, or building long-term visibility, we
                  bring clarity and direction to the process.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
