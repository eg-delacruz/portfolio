import Link from 'next/link';
import Image from 'next/image';

//Styles
import styles from './styles.module.css';

//Assets
import SpainFlag from '@assets/icons/SpainFlag.svg';
import USFlag from '@assets/icons/USFlag.svg';
import GermanFlag from '@assets/icons/GermanFlag.svg';

//Types
//locals
type Props = {
  locale: string;
};

const LanguageSelection = ({ locale }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.selector_container}>
        {locale === 'en' ? (
          <Image src={USFlag} alt='US Flag' />
        ) : locale === 'es' ? (
          <Image src={SpainFlag} alt='Spain Flag' />
        ) : (
          <Image src={GermanFlag} alt='Germany Flag' />
        )}
        <svg width='16' height='10' viewBox='0 0 16 10' fill='none'>
          <path
            d='M2 2L8 8L14 2'
            stroke='black'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      <ul className={styles.language_options}>
        <li className={`${locale === 'en' ? styles.selected : ''}`}>
          <Link href='/en'>
            <Image src={USFlag} alt='US Flag' />
          </Link>
        </li>
        <li
          className={`${locale === 'es' ? styles.selected : ''} ${
            styles.spain
          }`}
        >
          <Link href='/es'>
            <Image src={SpainFlag} alt='Spain Flag' />
          </Link>
        </li>
        <li className={`${locale === 'de' ? styles.selected : ''}`}>
          <Link href='/de'>
            <Image src={GermanFlag} alt='Germany Flag' />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelection;
