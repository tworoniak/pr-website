import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import PressArticleNav from '@/components/press/PressArticleNav';
import PageIntro from '@/components/shared/PageIntro';
import {
  getAdjacentPressReleases,
  getPressReleaseBySlug,
  pressReleases,
} from '@/data/press';

type PressDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return pressReleases.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PressDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getPressReleaseBySlug(slug);

  if (!article) {
    return {
      title: 'Press Article Not Found',
    };
  }

  return {
    title: `${article.title} | Press`,
    description: article.excerpt,
  };
}

export default async function PressDetailPage({
  params,
}: PressDetailPageProps) {
  const { slug } = await params;
  const article = getPressReleaseBySlug(slug);

  if (!article) {
    notFound();
  }

  const { previous, next } = getAdjacentPressReleases(slug);

  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow={`Press • ${article.date}`}
          title={article.title}
          description={article.excerpt}
          maxWidth='lg'
        />

        <section className='pageSection'>
          <Container>
            <article className='prose'>
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          </Container>
        </section>

        <PressArticleNav previous={previous} next={next} />
      </main>
      <Footer />
    </>
  );
}
