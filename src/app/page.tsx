import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import LogoStrip from '@/components/home/LogoStrip';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesCarousel from '@/components/home/ServicesCarousel';
// import RosterCarousel from '@/components/home/RosterCarousel';
import TestimonialsGrid from '@/components/home/TestimonialsGrid';
import CTASection from '@/components/home/CTASection';
import PressHighlights from '@/components/home/PressHighlights';
import FeaturedArtists from '@/components/home/FeaturedArtists';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import FadeIn from '@/components/shared/FadeIn';
import { buildSEO } from '@/lib/seo';

export const metadata = buildSEO({
  title: 'Home | Antihero PR',
  description:
    'Public relations campaigns, artist positioning, media outreach, and strategic promotion for heavy music artists.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FadeIn y={16}>
          <LogoStrip />
        </FadeIn>
        <FadeIn>
          <FeaturedArtists />
        </FadeIn>
        <FadeIn>
          <AboutPreview />
        </FadeIn>
        <FadeIn>
          <ServicesCarousel />
        </FadeIn>
        {/* <RosterCarousel /> */}
        <FadeIn>
          <TestimonialsGrid />
        </FadeIn>
        <FadeIn>
          <PressHighlights />
        </FadeIn>
        <FadeIn>
          <CTASection />
        </FadeIn>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
