import { checkoutUrl } from '../data/landingContent';
import styles from './CtaButton.module.css';

type CtaButtonProps = {
  children: string;
  className?: string;
  compact?: boolean;
  href?: string;
};

export function CtaButton({ children, className, compact = false, href = checkoutUrl }: CtaButtonProps) {
  const classes = [styles.button, compact ? styles.compact : '', className ?? ''].filter(Boolean).join(' ');

  return (
    <a className={classes} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}