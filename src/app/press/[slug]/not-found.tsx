import Link from 'next/link';

import Container from '@/components/layout/Container';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';

export default function PressArticleNotFound() {
  return (
    <>
      <main>
        <section className='pageSection'>
          <Container>
            <div
              style={{
                maxWidth: '42rem',
              }}
            >
              <p
                style={{
                  margin: '0 0 0.75rem',
                  fontSize: '0.85rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}
              >
                Press
              </p>

              <h1
                style={{
                  margin: 0,
                  fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                }}
              >
                That press article could not be found.
              </h1>

              <p
                style={{
                  margin: '1.25rem 0 0',
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                }}
              >
                The page may have been moved, removed, or the link may be
                incorrect.
              </p>

              <Link
                href='/press'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '48px',
                  marginTop: '1.5rem',
                  padding: '0.95rem 1.2rem',
                  borderRadius: '999px',
                  background: '#fff',
                  color: '#111',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Back to Press
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <ScrollToTopButton />
    </>
  );
}
