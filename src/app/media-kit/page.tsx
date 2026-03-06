import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/home/CTASection';
import MediaKitBio from '@/components/media-kit/MediaKitBio';
import MediaKitDownloads from '@/components/media-kit/MediaKitDownloads';
import MediaKitFacts from '@/components/media-kit/MediaKitFacts';
import PageIntro from '@/components/shared/PageIntro';

export default function MediaKitPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow='Media Kit'
          title='Editorial assets, approved messaging, and essential information.'
          description='A central resource for journalists, promoters, partners, and media contacts looking for official files, company information, and approved text.'
          maxWidth='lg'
        />

        <MediaKitDownloads />
        <MediaKitBio />
        <MediaKitFacts />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
