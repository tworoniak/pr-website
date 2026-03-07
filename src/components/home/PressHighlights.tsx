import Link from 'next/link';
import Container from '@/components/layout/Container';
// import { pressReleases } from '@/data/press';
import { formatDisplayDate } from '@/lib/format-date';
import { getAllPressArticles } from '@/lib/press';
import { StaggerGroup, StaggerItem } from '@/components/shared/StaggerGroup';
import styles from './PressHighlights.module.scss';

// export default function PressHighlights() {
//   const latest = getAllPressArticles().slice(0, 3);

//   return (
//     <section className={styles.section}>
//       <Container>
//         <div className={styles.top}>
//           <div className={styles.heading}>
//             <p className={styles.kicker}>Latest Press</p>
//             <h2>Recent campaign updates, announcements, and media momentum.</h2>
//           </div>

//           <Link href='/press' className={styles.allLink}>
//             View all press
//           </Link>
//         </div>

//         <StaggerGroup className={styles.grid}>
//           {latest.map((item) => (
//             <StaggerItem key={item.id}>
//               <article className={styles.card}>
//                 <p className={styles.date}>{formatDisplayDate(item.date)}</p>
//                 <h3>{item.title}</h3>
//                 <p className={styles.excerpt}>{item.excerpt}</p>
//                 <Link href={`/press/${item.slug}`} className={styles.readMore}>
//                   Read more
//                 </Link>
//               </article>
//             </StaggerItem>
//           ))}
//         </StaggerGroup>
//       </Container>
//     </section>
//   );
// }

export default function PressHighlights() {
  const latest = getAllPressArticles().slice(0, 3);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <p className={styles.kicker}>Latest Press</p>
            <h2>Recent campaign updates, announcements, and media momentum.</h2>
          </div>

          <Link href='/press' className={styles.allLink}>
            View all press
          </Link>
        </div>

        <StaggerGroup className={styles.grid}>
          {latest.map((item) => (
            <StaggerItem key={item.slug}>
              <article className={styles.card}>
                <p className={styles.date}>{formatDisplayDate(item.date)}</p>
                <h3>{item.title}</h3>
                <p className={styles.excerpt}>{item.excerpt}</p>
                <Link href={`/press/${item.slug}`} className={styles.readMore}>
                  Read more
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
