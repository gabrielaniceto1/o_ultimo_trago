import creatorImage from '../../imagens/Gabriel Aniceto - o ultimo trago.png';
import styles from './LandingSections.module.css';

export function CreatorSection() {
  return (
    <section id="criador" className={styles.sectionAlt}>
      <div className={`${styles.container} ${styles.creatorGrid}`}>
        <div className={styles.creatorMedia}>
          <img src={creatorImage} alt="Gabriel Aniceto, criador do método O Último Trago" loading="lazy" />
        </div>

        <div className={styles.creatorCopy}>
          <p className={styles.eyebrow}>Criador do método</p>
          <h2>Conheça Gabriel Aniceto.</h2>

          <p>
            Oi, eu sou Gabriel, um jovem adulto de 22 anos que conheceu o cigarro aos 15. Foi a experiência mais sedutora e
            destrutiva da minha vida.
          </p>

          <p>
            Assim como milhões de pessoas, eu acreditava que parar de fumar era quase impossível, que a força de vontade
            nunca seria suficiente e que a dependência sempre seria maior. Eu tentei de tudo: adesivos, remédios, terapias.
            Nada parecia funcionar de forma definitiva.
          </p>

          <p>
            Até que, cansado de recaídas e frustrações, decidi fazer algo diferente: entender profundamente o que acontecia
            dentro do meu próprio cérebro. Em 2024, depois de duas pneumonias sucessivas, diversos episódios de asma, apatia
            e sensação de impotência, entendi que minhas escolhas me levaram até esse ponto.
          </p>

          <p>
            Essa busca me levou a mergulhar em neurociência aplicada, mudança de hábitos e comportamento humano. Estudei,
            testei, apliquei e refinei métodos até conseguir reprogramar minha mente e me libertar do vício de forma
            definitiva.
          </p>
        </div>
      </div>
    </section>
  );
}