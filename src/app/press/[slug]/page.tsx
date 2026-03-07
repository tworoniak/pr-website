// import Image from 'next/image';
// import type { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import Container from '@/components/layout/Container';
// import PressArticleNav from '@/components/press/PressArticleNav';
// import PageIntro from '@/components/shared/PageIntro';
// // import {
// //   getAdjacentPressReleases,
// //   getPressReleaseBySlug,
// //   pressReleases,
// // } from '@/data/press';
// import styles from './PressDetailPage.module.scss';
// import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
// import { MDXRemote } from 'next-mdx-remote/rsc';
// import {
//   getAdjacentPressArticles,
//   getPressArticleBySlug,
//   getPressSlugs,
// } from '@/lib/press';
// import { formatDisplayDate } from '@/lib/format-date';

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// export async function generateStaticParams() {
//   return getPressSlugs().map((slug) => ({ slug }));
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;

//   try {
//     const article = getPressArticleBySlug(slug);

//     return {
//       title: `${article.meta.title} | Press`,
//       description: article.meta.excerpt,
//       openGraph: {
//         title: article.meta.title,
//         description: article.meta.excerpt,
//         images: [
//           {
//             url: article.meta.image,
//             alt: article.meta.imageAlt,
//           },
//         ],
//       },
//     };
//   } catch {
//     return {
//       title: 'Press Article Not Found',
//     };
//   }
// }

// export default async function PressDetailPage({ params }: Props) {
//   const { slug } = await params;

//   let article;
//   try {
//     article = getPressArticleBySlug(slug);
//   } catch {
//     notFound();
//   }

//   const { previous, next } = getAdjacentPressArticles(slug);

//   return (
//     <main>
//       <PageIntro
//         eyebrow={`Press • ${formatDisplayDate(article.meta.date)}`}
//         title={article.meta.title}
//         description={article.meta.excerpt}
//         maxWidth='lg'
//       />

//       <section className={styles.mediaSection}>
//         <Container>
//           <div className={styles.imageWrap}>
//             <Image
//               src={article.meta.image}
//               alt={article.meta.imageAlt}
//               fill
//               priority
//               sizes='(max-width: 1200px) 100vw, 1200px'
//             />
//           </div>
//         </Container>
//       </section>

//       <section className='pageSection'>
//         <Container>
//           <article className='prose'>
//             <MDXRemote source={article.content} />
//           </article>
//         </Container>
//       </section>

//       <PressArticleNav previous={previous} next={next} />
//       <ScrollToTopButton />
//     </main>
//   );
// }

import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Container from '@/components/layout/Container';
import PressArticleNav from '@/components/press/PressArticleNav';
import PressTableOfContents from '@/components/press/PressTableOfContents';
import PageIntro from '@/components/shared/PageIntro';
import { formatDisplayDate } from '@/lib/format-date';
import { extractHeadingsFromMdx, slugifyHeading } from '@/lib/press-headings';
import {
  getAdjacentPressArticles,
  getPressArticleBySlug,
  getPressSlugs,
} from '@/lib/press';
import styles from './PressDetailPage.module.scss';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPressSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const article = getPressArticleBySlug(slug);

    return {
      title: `${article.meta.title} | Press`,
      description: article.meta.excerpt,
      openGraph: {
        title: article.meta.title,
        description: article.meta.excerpt,
        images: [
          {
            url: article.meta.image,
            alt: article.meta.imageAlt,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Press Article Not Found',
    };
  }
}

export default async function PressDetailPage({ params }: Props) {
  const { slug } = await params;

  let article;
  try {
    article = getPressArticleBySlug(slug);
  } catch {
    notFound();
  }

  const { previous, next } = getAdjacentPressArticles(slug);
  const headings = extractHeadingsFromMdx(article.content);

  return (
    <main>
      <PageIntro
        eyebrow={`Press • ${formatDisplayDate(article.meta.date)}`}
        title={article.meta.title}
        description={article.meta.excerpt}
        maxWidth='lg'
      />

      <section className={styles.mediaSection}>
        <Container>
          <div className={styles.imageWrap}>
            <Image
              src={article.meta.image}
              alt={article.meta.imageAlt}
              fill
              priority
              sizes='(max-width: 1200px) 100vw, 1200px'
            />
          </div>
        </Container>
      </section>

      <section className='pageSection'>
        <Container>
          <div className={styles.articleLayout}>
            <div className={styles.articleBody}>
              <article className='prose'>
                <MDXRemote
                  source={article.content}
                  components={{
                    h2: ({ children }) => {
                      const text = String(children);
                      const id = slugifyHeading(text);
                      return <h2 id={id}>{children}</h2>;
                    },
                    h3: ({ children }) => {
                      const text = String(children);
                      const id = slugifyHeading(text);
                      return <h3 id={id}>{children}</h3>;
                    },
                  }}
                />
              </article>
            </div>

            <div className={styles.sidebar}>
              <PressTableOfContents headings={headings} />
            </div>
          </div>
        </Container>
      </section>

      <PressArticleNav previous={previous} next={next} />
    </main>
  );
}
