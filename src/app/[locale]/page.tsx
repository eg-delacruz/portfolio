'use client';

import { useTranslations } from 'next-intl';

//Styles
import styles from './page.module.css';

//Types
//imported
//local
type Props = {};

export default function Home() {
  //TODO: Poner los ids de cada sección en elementos hijos para que al hacer click en el a del header no quede el header encima de la sección
  return (
    <div className={styles.container}>
      <main id={'home'} className={`${styles.main} section`}>
        <div className={`${styles.main_container} container`}>Home</div>
      </main>
      <section id='skills' className={`${styles.skills} section`}>
        <div className={`${styles.skills_container} container`}>Skills</div>
      </section>
      <section id='projects' className={`${styles.projects} section`}>
        <div className={`${styles.projects_container} container`}>projects</div>
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
  );
}
