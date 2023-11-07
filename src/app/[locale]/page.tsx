'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

//Styles
import styles from './page.module.css';

//Asset
import profilePic from '@assets/images/Gerardo.jpg';
import GD_Logo from '@assets/images/Light yellow.svg';
import CV_icon from '@assets/icons/CV_icon.svg';
import GitHub_icon from '@assets/icons/Github_icon.svg';
import LinkedIn_icon from '@assets/icons/LinkedIn_icon.svg';
import Email_icon from '@assets/icons/Email_icon.svg';

//Types
//imported
//local
type Props = {};

export default function Home() {
  //TODO: Poner los ids de cada sección en elementos hijos para que al hacer click en el a del header no quede el header encima de la sección
  //Translations
  const t = useTranslations();

  return (
    <>
      <title>{t(`Page.meta_data.title`)}</title>
      <meta name='description' content={t(`Page.meta_data.description`)} />
      <div className={styles.container}>
        <main id={'home'} className={`${styles.main} section`}>
          <div className={`${styles.main_container} container`}>
            <div className={styles.picture_container}>
              <Image
                src={profilePic}
                alt='Foto of Gerardo De La Cruz'
                width={280}
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
                <strong>{t(`Page.hero.quote_strong`)}</strong>{' '}
                {t(`Page.hero.quote_rest`)}
              </p>

              <p className={styles.presentation_description}>
                {t(`Page.hero.description`)}
              </p>

              <div className={`${styles.buttons} ${styles.bg_blur}`}>
                <a href='#'>
                  <Image src={CV_icon} alt='CV icon' />
                </a>
                <a href='#'>
                  <Image src={GitHub_icon} alt='GitHub icon' />
                </a>
                <a href='#'>
                  <Image src={LinkedIn_icon} alt='LinkedIn icon' />
                </a>
                <a href='#'>
                  <Image src={Email_icon} alt='Email icon' />
                </a>
              </div>
            </div>
          </div>
        </main>

        <section id='skills' className={`${styles.skills} section`}>
          <div className={`${styles.skills_container} container`}>Skills</div>
        </section>

        <section id='projects' className={`${styles.projects} section`}>
          <div className={`${styles.projects_container} container`}>
            projects
          </div>
        </section>

        <section id='languages' className={`${styles.languajes} section`}>
          <div className={`${styles.languajes_container} container`}>
            languajes
          </div>
        </section>

        <section id='certificates' className={`${styles.certificates} section`}>
          <div className={`${styles.certificates_container} container`}>
            Certificates
          </div>
        </section>

        <section id='hobbies' className={`${styles.hobbies} section`}>
          <div className={`${styles.hobbies_container} container`}>Hobbies</div>
        </section>
      </div>
    </>
  );
}
