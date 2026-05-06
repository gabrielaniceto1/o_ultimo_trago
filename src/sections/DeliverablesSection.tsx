import bookCover from '../../imagens/capa_definitiva.png';
import { CtaButton } from '../components/CtaButton';
import { bonuses, deliverables, differentials, finalSummary, methodPillars } from '../data/landingContent';
import styles from './LandingSections.module.css';

export function DeliverablesSection() {
  return (
    <section id="entregaveis" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>O que você recebe</p>
          <h2>Você não está comprando apenas um livro digital.</h2>
          <p>
            Você está recebendo um protocolo neurocomportamental completo para reprogramar a maneira como o seu cérebro
            interpreta o cigarro e libertar você, em 21 dias, do ciclo da dependência.
          </p>
        </div>

        <div className={styles.bookLayout}>
          <img src={bookCover} alt="Capa do livro O Último Trago" loading="lazy" />
          <div>
            <h3>Como funciona o método?</h3>
            <p>
              O protocolo é dividido em três fases progressivas, para tirar o cigarro do centro da sua rotina e reconstruir
              sua identidade como uma pessoa livre.
            </p>
          </div>
        </div>

        <div className={styles.pillarGrid}>
          {methodPillars.map((pillar, index) => (
            <article className={styles.pillarCard} key={pillar.title}>
              <span>{index + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <strong>Resultado: {pillar.result}</strong>
            </article>
          ))}
        </div>

        <div className={styles.threeColumns}>
          <ListBlock title="O que você recebe" items={deliverables} />
          <ListBlock title="Por que é diferente" items={differentials} />
          <ListBlock title="Bônus exclusivos" items={bonuses} />
        </div>

        <div className={styles.summaryPanel}>
          <h3>Em resumo, você vai levar:</h3>
          <ul>
            {finalSummary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>Isso não é um livro para ler. É um processo para viver. E uma vida nova te espera logo ali, na próxima página.</p>
          <CtaButton>QUERO ACESSAR O MÉTODO</CtaButton>
        </div>
      </div>
    </section>
  );
}

type ListBlockProps = {
  title: string;
  items: readonly string[];
};

function ListBlock({ title, items }: ListBlockProps) {
  return (
    <article className={styles.listBlock}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}