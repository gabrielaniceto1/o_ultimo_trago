import { CtaButton } from '../components/CtaButton';
import { conquestItems, emotionalBenefits, rationalBenefits } from '../data/landingContent';
import styles from './LandingSections.module.css';

export function TransformationSection() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Depois do último trago</p>
          <h2>Imagine como sua vida pode mudar após parar de fumar.</h2>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.textStack}>
            {emotionalBenefits.map((benefit) => (
              <p key={benefit}>{benefit}</p>
            ))}
          </div>

          <div className={styles.statsGrid}>
            {rationalBenefits.map((benefit) => (
              <article className={styles.statCard} key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <h3>Resumo do que você vai conquistar</h3>
        </div>

        <div className={styles.resultGrid}>
          {conquestItems.map((item) => (
            <article className={styles.resultItem} key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </article>
          ))}
        </div>

        <p className={styles.closingLine}>
          Agora imagine tudo isso sendo sua realidade em apenas <strong>21 dias</strong>. O Último Trago não é apenas um
          método para parar de fumar. É o primeiro passo para uma <strong>vida inteira de conquistas</strong>.
        </p>

        <div className={styles.centerAction}>
          <CtaButton>QUERO MUDAR DE VIDA</CtaButton>
        </div>
      </div>
    </section>
  );
}