import { CtaButton } from '../components/CtaButton';
import styles from './VideoSection.module.css';

export function VideoSection() {
  return (
    <section id="video" className={styles.videoSection}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Apresentação</p>
          <h2>Entenda por que parar de fumar começa no cérebro.</h2>
        </div>

        <div className={styles.videoFrame}>
          <iframe
            src="https://www.youtube.com/embed/hyopKozZ9lU"
            title="Apresentação do método O Último Trago"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <CtaButton>QUERO REPROGRAMAR MEU CÉREBRO</CtaButton>
      </div>
    </section>
  );
}