import heroBackground from '../../imagens/fundo sem eu - pagina de vendas.png';
import { CtaButton } from '../components/CtaButton';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section
      id="top"
      className={styles.hero}
      style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 9, 10, 0.88), rgba(3, 9, 10, 0.66) 48%, rgba(3, 9, 10, 0.3)), url(${heroBackground})` }}
    >
      <div className={styles.content}>
        <p className={styles.kicker}>Método digital de 21 dias</p>
        <h1>Seu cérebro foi programado para te manter preso ao cigarro.</h1>
        <p className={styles.subheadline}>
          Agora, descubra como reprogramá-lo para conquistar liberdade definitiva, sem força bruta e sem métodos caros.
        </p>

        <div className={styles.actions}>
          <CtaButton>QUERO REPROGRAMAR MEU CÉREBRO</CtaButton>
          <a className={styles.secondaryAction} href="#video">
            Assistir apresentação
          </a>
        </div>

        <dl className={styles.metrics} aria-label="Destaques do método">
          <div>
            <dt>21 dias</dt>
            <dd>protocolo guiado</dd>
          </div>
          <div>
            <dt>100% digital</dt>
            <dd>comece hoje</dd>
          </div>
          <div>
            <dt>7 dias</dt>
            <dd>garantia total</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}