import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section
          style={{
            padding: '5rem 0 2rem',
          }}
        >
          <Container>
            <p
              style={{
                margin: '0 0 0.75rem',
                fontSize: '0.85rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              Contact
            </p>

            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                maxWidth: '14ch',
              }}
            >
              Let’s talk about your next campaign.
            </h1>

            <p
              style={{
                maxWidth: '42rem',
                margin: '1.25rem 0 0',
                color: 'var(--muted)',
                lineHeight: 1.8,
                fontSize: '1.05rem',
              }}
            >
              Tell us about your band, release, tour, timeline, or media goals.
              We’ll review your inquiry and get back to you as soon as possible.
            </p>
          </Container>
        </section>

        <section style={{ padding: '1rem 0 5rem' }}>
          <Container>
            <ContactForm />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
