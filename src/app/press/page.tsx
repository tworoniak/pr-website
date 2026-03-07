import CTASection from '@/components/home/CTASection';
import FeaturedCoverage from '@/components/press/FeaturedCoverage';
import PressReleaseList from '@/components/press/PressReleaseList';
import PressStats from '@/components/press/PressStats';
import PageIntro from '@/components/shared/PageIntro';
import { buildSEO } from '@/lib/seo';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';

export const metadata = buildSEO({
  title: 'Press | Antihero PR',
  description:
    'Public relations campaigns, artist positioning, media outreach, and strategic promotion for heavy music artists.',
  path: '/press',
});

export default function PressPage() {
  return (
    <>
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
      <ScrollToTopButton />
    </>
  );
}
