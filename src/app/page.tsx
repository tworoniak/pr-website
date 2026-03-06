import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ServicesCarousel from '@/components/home/ServicesCarousel';
import RosterCarousel from '@/components/home/RosterCarousel';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesCarousel />
        <RosterCarousel />
      </main>
      <Footer />
    </>
  );
}
