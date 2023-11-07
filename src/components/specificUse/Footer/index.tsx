'use client';

import { useTranslations } from 'next-intl';

//Styles
import styles from './styles.module.css';
//Types
//imported
//local
type Props = {};

const Index = () => {
  const t = useTranslations();

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footer_container} container`}>
        <p>Gerardo De La Cruz {new Date().getFullYear()}</p>
        <p>{t(`Page.footer.description`)}</p>
      </div>
    </footer>
  );
};

export default Index;
