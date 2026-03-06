// import Container from '@/components/layout/Container';
// import { testimonials } from '@/data/testimonials';
// import styles from './TestimonialsGrid.module.scss';

// export default function TestimonialsGrid() {
//   return (
//     <section className={styles.section}>
//       <Container>
//         <div className={styles.heading}>
//           <p className={styles.kicker}>Testimonials</p>
//           <h2>What artists, teams, and partners say about working with us.</h2>
//         </div>

//         <div className={styles.grid}>
//           {testimonials.map((item) => (
//             <article key={item.id} className={styles.card}>
//               <p className={styles.quote}>“{item.quote}”</p>

//               <div className={styles.meta}>
//                 <h3>{item.name}</h3>
//                 <p>
//                   {item.role}
//                   {item.company ? ` • ${item.company}` : ''}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

import Container from '@/components/layout/Container';
import { testimonials } from '@/data/testimonials';
import styles from './TestimonialsGrid.module.scss';

export default function TestimonialsGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.kicker}>Testimonials</p>
          <h2>What artists, teams, and partners say about working with us.</h2>
        </div>

        <div className={styles.masonry}>
          {testimonials.map((item, index) => (
            <article
              key={item.id}
              className={`${styles.card} ${styles[`variant${(index % 4) + 1}`]}`}
            >
              <span className={styles.quoteMark} aria-hidden='true'>
                “
              </span>

              <p className={styles.quote}>{item.quote}</p>

              <div className={styles.meta}>
                <h3>{item.name}</h3>
                <p>
                  {item.role}
                  {item.company ? ` • ${item.company}` : ''}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
