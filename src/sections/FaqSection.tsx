import { useState } from 'react';

import { faqs } from '../data/landingContent';
import styles from './FaqSection.module.css';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>FAQ</p>
          <h2>Perguntas frequentes</h2>
        </div>

        <div className={styles.items}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article className={styles.item} key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <strong aria-hidden="true">{isOpen ? '-' : '+'}</strong>
                </button>
                <div id={answerId} className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}