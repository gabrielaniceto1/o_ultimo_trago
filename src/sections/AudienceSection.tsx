import { CtaButton } from '../components/CtaButton';
import { audienceItems } from '../data/landingContent';
import styles from './LandingSections.module.css';

export function AudienceSection() {
  return (
    <section id="metodo" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Para quem é</p>
          <h2>Este método é para você se...</h2>
          <p>Se você se reconhece em algum desses pontos, O Último Trago pode mudar sua relação com o cigarro.</p>
        </div>

        <div className={styles.cardGrid}>
          {audienceItems.map((item) => (
            <article className={styles.checkCard} key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className={styles.centerAction}>
          <CtaButton>ESSE MÉTODO É PARA MIM</CtaButton>
        </div>
      </div>
    </section>
  );
}