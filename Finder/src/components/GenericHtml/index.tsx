import { motion } from 'motion/react';
import styles from './styles.module.css';

type GenericHtmlProps = {
  titulo: string;
  tituloGrifado: string;
  children: React.ReactNode
};

export function GenericHtml({ titulo, tituloGrifado, children }: GenericHtmlProps) {
  return (
    <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}  
        className={styles.GenericHtml}
        >

      <h2 className={styles.subTitle}>{titulo} <span className={styles.subTitleSpan}>{tituloGrifado}</span></h2>
      {children}
    </motion.div>
  );
}