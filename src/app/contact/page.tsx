import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import ContactForm from '@/components/contact/ContactForm';
import PageIntro from '@/components/shared/PageIntro';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow='Contact'
          title='Let’s talk about your next campaign.'
          description='Tell us about your band, release, tour, timeline, or media goals. We’ll review your inquiry and get back to you as soon as possible.'
          maxWidth='md'
        />

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
