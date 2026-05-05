import { CtaButton } from '../components/CtaButton';
import { painQuestions } from '../data/landingContent';
import styles from './LandingSections.module.css';

export function IntroSection() {
  return (
    <section id="introducao" className={styles.sectionAlt}>
      <div className={`${styles.container} ${styles.narrow}`}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>O problema real</p>
          <h2>O cigarro não prende apenas o corpo. Ele cria associações no seu cérebro.</h2>
        </div>

        <div className={styles.storyFlow}>
          <p>
            Você sabe que o cigarro está roubando sua saúde, sua energia e seus sonhos. Você sente isso toda vez que acende
            um cigarro e se pergunta: até quando vou continuar me sabotando? Você já tentou parar, talvez mais de uma vez,
            mas algo mais forte sempre te puxou de volta.
          </p>

          <ul className={styles.questionList}>
            {painQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>

          <p>
            A verdade é que o cigarro não prende apenas o seu corpo. Ele reprogramou seu cérebro para te manter preso nesse
            ciclo de ilusões, onde cada tentativa de parar parece mais difícil do que deveria ser.
          </p>

          <p>
            Se você falhou até agora, a culpa não é sua. Você não falhou porque é fraco. Você falhou porque tentou da maneira
            errada: usando força bruta, adesivos, substituições temporárias, e não onde a verdadeira mudança acontece: no seu
            cérebro.
          </p>

          <p className={styles.callout}>
            É por isso que nasceu <strong>O Último Trago</strong>: um método de reprogramação mental e emocional baseado em
            neurociência aplicada para ajudar você a romper, em 21 dias, as associações falsas que seu cérebro criou com o
            cigarro.
          </p>

          <p>
            Não é mágica. Não é remédio. É ciência, transformação pessoal e o início de uma vida onde você respira liberdade
            a cada escolha.
          </p>
        </div>

        <div className={styles.centerAction}>
          <CtaButton>QUERO REPROGRAMAR MEU CÉREBRO</CtaButton>
        </div>
      </div>
    </section>
  );
}