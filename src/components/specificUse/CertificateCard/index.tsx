'use client';

import { useTranslations } from 'next-intl';

//Styles
import styles from './styles.module.css';

//Types
//Local
type Props = {
  title: string;
  issue_date: string;
  issued_by: string;
  url: string;
  purple_bg?: boolean;
  blue_bg?: boolean;
};

const Index = ({
  title,
  issue_date,
  issued_by,
  url,
  purple_bg = false,
  blue_bg = false,
}: Props) => {
  //Translations
  const t = useTranslations();

  return (
    <a
      className={`${styles.certificate} ${purple_bg ? styles.purple_bg : ''} ${
        blue_bg ? styles.blue_bg : ''
      }`}
      href={url}
      target='_blank'
    >
      <h4>{title}</h4>
      <p>
        <strong>{t(`Page.certificates.issued_by`)}</strong>
        {': '}
        {issued_by}
      </p>
      <p>
        <strong>{t(`Page.certificates.date`)}</strong>
        {': '}
        {issue_date}
      </p>
    </a>
  );
};

export default Index;
