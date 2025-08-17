import styles from './styles.module.css';
import { Footer } from '../../components/Footer';
import type React from 'react';

type MainTemplatesProps = {
  children: React.ReactNode;
};

export function MainTemplates({ children }: MainTemplatesProps) {
  return (
    <div className={styles.contentWrapper}>
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
}