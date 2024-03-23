'use client';

import { useEffect, useState } from 'react';

//Styles
import styles from './styles.module.css';

//Components
import DarkModeToggler from '@components/specificUse/DarkModeToggler';
import LanguageSelection from '@components/specificUse/LanguageSelection/LanguageSelection';

type Props = {
  locale: string;
  navTranslations: {
    home: string;
    skills: string;
    projects: string;
    languages: string;
    certificates: string;
    hobbies: string;
  };
};

function HeaderContent({ locale, navTranslations }: Props) {
  //Translations
  const { home, skills, projects, languages, certificates, hobbies } =
    navTranslations;

  //States
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  //Highlight nav link when section is in viewport (only when screen is big)
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('header nav ul li a');

    //Avoid highlighting nav links when screen is small
    if (window.innerWidth < 767) return;

    window.onscroll = () => {
      sections.forEach((section) => {
        //Distance from top of the page
        let top = window.scrollY;
        //Distance from top of the section
        let offset = (section as HTMLElement).offsetTop - 70;
        //Section height
        let height = (section as HTMLElement).offsetHeight;
        //Section id
        let id = section.getAttribute('id');

        //If the distance from top of the page is between the distance from top of the section and the distance from top of the section + the section height, then the section is in the viewport
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            //The active class is removed from all nav links always, and then added to the corresponding nav link
            link.classList.remove('active_nav_link');
            //If there is a nav link with the same href as the current section id, then add the active class to that nav link
            document
              .querySelector(`header nav ul li a[href*=${id}]`)
              ?.classList.add('active_nav_link');
          });
        }
      });
    };
  }, []);

  //Functions
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuWhenHeaderClicked = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      {/* Burger button (767 screen) */}
      <i onClick={() => toggleMenu()} className={styles.burger_button}>
        <div className={styles.burger_button_line} />
        <div
          className={` ${styles.burger_button_line} ${styles.burger_button_line2}`}
        />
        <div className={styles.burger_button_line} />
      </i>

      <header
        onClick={() => closeMenuWhenHeaderClicked()}
        className={`${styles.header} ${isMenuOpen ? styles.header_open : ''}`}
      >
        <div className={`${styles.header_container} container`}>
          <nav className={`${styles.menu}`}>
            <ul className={styles.menu_list}>
              <li className={styles.menu_item}>
                <a href='#home'>{home}</a>
              </li>
              <li className={styles.menu_item}>
                <a href='#skills'>{skills}</a>
              </li>
              <li className={styles.menu_item}>
                <a href='#projects'>{projects}</a>
              </li>
              <li className={styles.menu_item}>
                <a href='#languages'>{languages}</a>
              </li>
              <li className={styles.menu_item}>
                <a href='#certificates'>{certificates}</a>
              </li>
              <li className={styles.menu_item}>
                <a href='#hobbies'>{hobbies}</a>
              </li>
            </ul>
          </nav>

          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.options_container}
          >
            <DarkModeToggler />
            <LanguageSelection locale={locale} />
          </div>
        </div>
      </header>
      {/* Avoidin overlap. Height has to match header height */}
      <div className={styles.avoid_overlap_div}></div>
    </>
  );
}

export default HeaderContent;
