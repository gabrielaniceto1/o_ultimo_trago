import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2025 THE LAST DRAG · Todos os direitos reservados.
        <br />
        Este produto é informativo e não substitui acompanhamento médico, psicológico ou psiquiátrico. Resultados podem variar
        de pessoa para pessoa, de acordo com o grau de comprometimento individual.
      </p>

      <p>
        Para dúvidas, suporte ou questões legais, entre em contato com:{' '}
        <a href="mailto:contato@thelastdrag.com">contato@thelastdrag.com</a>
      </p>

      <p>
        <a href="politica-de-privacidade.html">Política de Privacidade</a>
        <span> · </span>
        <a href="termos-de-uso.html">Termos de Uso</a>
        <br />· Conteúdo protegido por direitos autorais.
      </p>
    </footer>
  );
}