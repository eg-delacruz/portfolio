import Image from 'next/image';

//Styles
import styles from './Styles.module.scss';

//Assets
import profilePic from '@assets/images/Gerardo_2.jpg';
import GD_Logo from '@assets/images/Light yellow.svg';

import CV_icon from '@assets/icons/CV_icon.svg';
import GitHub_icon from '@assets/icons/Github_icon.svg';
import LinkedIn_icon from '@assets/icons/LinkedIn_icon.svg';
import Email_icon from '@assets/icons/Email_icon.svg';

import lightblue_particle from '@assets/particles/lightblue.svg';
import purple_particle from '@assets/particles/purple.svg';
import red_particle from '@assets/particles/red.svg';
import yellow_particle from '@assets/particles/yellow.svg';

type Props = {
  locale: string;
  translations: {
    quote_strong: string;
    quote_rest: string;
    description: string;
  };
};

export const Main = ({ locale, translations }: Props) => {
  return (
    <main id={'home'} className={`${styles.main} section`}>
      <div className={`${styles.main_container} container`}>
        <div className={styles.picture_container}>
          {/* particles */}
          <Image
            className={`${styles.particle} ${styles.particle1}`}
            src={purple_particle}
            alt='particle'
          />
          <Image
            className={`${styles.particle} ${styles.particle2}`}
            src={lightblue_particle}
            alt='particle'
          />
          <Image
            className={`${styles.particle} ${styles.particle3}`}
            src={red_particle}
            alt='particle'
          />
          <Image
            className={`${styles.particle} ${styles.particle4}`}
            src={yellow_particle}
            alt='particle'
          />
          <Image
            className={`${styles.particle} ${styles.particle5}`}
            src={purple_particle}
            alt='particle'
          />
          <Image
            className={`${styles.particle} ${styles.particle6}`}
            src={lightblue_particle}
            alt='particle'
          />
          <Image
            className={`${styles.particle} ${styles.particle7}`}
            src={red_particle}
            alt='particle'
          />
          <Image
            className={`${styles.particle} ${styles.particle8}`}
            src={yellow_particle}
            alt='particle'
          />
          <Image
            className={`${styles.particle} ${styles.particle9}`}
            src={purple_particle}
            alt='particle'
          />

          <Image
            src={profilePic}
            alt='Photo of Gerardo De La Cruz'
            width={280}
            className={styles.profile_picture}
            priority
          />
        </div>
        <div className={styles.presentation_upper}>
          <Image src={GD_Logo} alt='Logo Gerardo De La Cruz' />
          <div>
            <h1>Gerardo De La Cruz</h1>
            <h3>Full Stack developer</h3>
          </div>
        </div>
        <div className={styles.hero_description_and_buttons}>
          <p className={styles.presentation_quote}>
            <strong>{translations.quote_strong}</strong>{' '}
            {translations.quote_rest}
          </p>
          <p className={styles.presentation_description}>
            {translations.description}
          </p>
          <div className={`${styles.buttons} ${styles.bg_blur}`}>
            {locale === 'en' ? (
              <a href='/documents/CV_Gerardo_De_La_Cruz_EN.pdf' target='_blank'>
                <Image src={CV_icon} alt='CV icon' />
              </a>
            ) : locale === 'es' ? (
              <a href='/documents/CV_Gerardo_De_La_Cruz_ES.pdf' target='_blank'>
                <Image src={CV_icon} alt='CV icon' />
              </a>
            ) : (
              <a href='/documents/CV_Gerardo_De_La_Cruz_DE.pdf' target='_blank'>
                <Image src={CV_icon} alt='CV icon' />
              </a>
            )}
            <a href='https://www.github.com/eg-delacruz' target='_blank'>
              <Image src={GitHub_icon} alt='GitHub icon' />
            </a>
            <a href='https://www.linkedin.com/in/eg-delacruz/' target='_blank'>
              <Image src={LinkedIn_icon} alt='LinkedIn icon' />
            </a>
            <a href='mailto:eg.cruzvalle@gmail.com'>
              <Image src={Email_icon} alt='Email icon' />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
