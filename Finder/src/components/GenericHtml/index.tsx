import styles from './styles.module.css';

type GenericHtmlProps = {
  titulo: string;
  tituloGrifado: string;
  children: React.ReactNode
};

export function GenericHtml({ titulo, tituloGrifado, children }: GenericHtmlProps) {
  return (
    <div className={styles.GenericHtml}>
      <h2 className={styles.subTitle}>{titulo} <span className={styles.subTitleSpan}>{tituloGrifado}</span></h2>
      {children}
    </div>
  );
}