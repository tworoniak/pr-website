import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/home/CTASection';
import FeaturedCoverage from '@/components/press/FeaturedCoverage';
import PressReleaseList from '@/components/press/PressReleaseList';
import PressStats from '@/components/press/PressStats';
import PageIntro from '@/components/shared/PageIntro';

export default function PressPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow='Press'
          title='Coverage, campaigns, and media momentum.'
          description='Explore featured placements, campaign highlights, and recent announcements that reflect how we help artists and bands cut through the noise.'
          maxWidth='lg'
        />

        <PressStats />
        <FeaturedCoverage />
        <PressReleaseList />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
