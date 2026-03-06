import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import LogoStrip from '@/components/home/LogoStrip';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesCarousel from '@/components/home/ServicesCarousel';
import RosterCarousel from '@/components/home/RosterCarousel';
import TestimonialsGrid from '@/components/home/TestimonialsGrid';
import CTASection from '@/components/home/CTASection';
// import { Scroll } from 'lucide-react';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <AboutPreview />
        <ServicesCarousel />
        <RosterCarousel />
        <TestimonialsGrid />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
