import { useEffect, useState } from 'react';

import { navLinks } from '../data/landingContent';
import { CtaButton } from './CtaButton';
import styles from './Header.module.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.menuOpen = isOpen ? 'true' : 'false';

    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <a className={styles.brand} href="#top" onClick={closeMenu} aria-label="Voltar ao topo">
          <span className={styles.brandMain}>The Last Drag</span>
          <span className={styles.brandSub}>O Último Trago</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <CtaButton compact>Comprar agora</CtaButton>
          <button
            className={styles.menuButton}
            type="button"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ''}`} onClick={closeMenu} />

      <nav id="mobile-menu" className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`} aria-label="Menu mobile">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <CtaButton>Comprar agora</CtaButton>
      </nav>
    </header>
  );
}