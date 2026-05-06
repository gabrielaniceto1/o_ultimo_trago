import { CtaButton } from '../components/CtaButton';
import { offerBonuses, offerItems } from '../data/landingContent';
import styles from './OfferSection.module.css';

export function OfferSection() {
  return (
    <section id="oferta" className={styles.offer}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Oferta final</p>
          <h2>O Último Trago, o protocolo de 21 dias.</h2>
          <p className={styles.lead}>
            Agora que você sabe que existe um caminho, chegou a hora de escolhê-lo. Parar de fumar não é sobre força de
            vontade: é sobre reprogramar sua mente, passo a passo.
          </p>

          <p>
            O Último Trago é mais do que um eBook. É um protocolo que vai quebrar o ciclo da dependência, reestruturar sua
            identidade e te reconectar com a liberdade de viver.
          </p>

          <div className={styles.offerLists}>
            <List title="Ao adquirir agora, você leva:" items={offerItems} />
            <List title="Bônus inclusos:" items={offerBonuses} />
          </div>

          <div className={styles.guarantee}>
            <h3>Garantia total de 7 dias</h3>
            <p>
              Você tem 7 dias para explorar o método. Se achar que não é para você, basta um e-mail e devolvemos 100% do seu
              dinheiro. Sem letras miúdas. Sem culpa. Sem pressão.
            </p>
          </div>
        </div>

        <aside className={styles.priceBox} aria-label="Resumo da oferta">
          <span className={styles.badge}>Acesso imediato</span>
          <h3>Transforme o custo do cigarro em decisão.</h3>
          <p>
            Hoje, fumar custa entre R$ 500 e R$ 800 por mês. Ao longo de um ano, são mais de R$ 6.000,00 literalmente
            queimados.
          </p>

          <div className={styles.price}>
            <span>Apenas</span>
            <strong>R$ 49,90</strong>
            <small>ou até 12x de R$ 5,16</small>
          </div>

          <CtaButton>QUERO ACESSAR SEM RISCOS</CtaButton>
          <small className={styles.safeText}>Você será redirecionado para um checkout 100% seguro.</small>
        </aside>
      </div>
    </section>
  );
}

type ListProps = {
  title: string;
  items: readonly string[];
};

function List({ title, items }: ListProps) {
  return (
    <article>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}