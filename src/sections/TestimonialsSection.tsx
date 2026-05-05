
import { useState } from 'react';

import { testimonials } from '../data/landingContent';
import styles from './TestimonialsSection.module.css';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="relatos" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Prova social</p>
          <h2>Relatos de quem encontrou um novo caminho.</h2>
        </div>

        <article className={styles.testimonialCard}>
          <blockquote>"{activeTestimonial.quote}"</blockquote>
          <footer>
            <strong>{activeTestimonial.author}</strong>
            <span>{activeTestimonial.detail}</span>
          </footer>
        </article>

        <div className={styles.controls}>
          <button type="button" onClick={goToPrevious} aria-label="Depoimento anterior">
            <span className={styles.arrowLeft} aria-hidden="true" />
          </button>
          <button type="button" onClick={goToNext} aria-label="Próximo depoimento">
            <span className={styles.arrowRight} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
