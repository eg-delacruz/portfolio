'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

//Styles
import styles from './styles.module.css';

//Components
import DarkModeToggler from '@components/specificUse/DarkModeToggler';
import LanguageSelection from '@components/specificUse/LanguageSelection/LanguageSelection';

//Types
type Props = {
  locale: string;
};

const Header = ({ locale }: Props) => {
  //Highlight nav link when section is in viewport
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('header nav ul li a');

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

  const t = useTranslations();

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.header_container} container`}>
          <nav className={`${styles.menu}`}>
            <ul className={styles.menu_list}>
              <li className={styles.menu_item}>
                <a href='#home'>{t(`Navigation.home`)}</a>
              </li>
              <li className={styles.menu_item}>
                <a href='#skills'>{t(`Navigation.skills`)}</a>
              </li>
              <li className={styles.menu_item}>
                <a href='#projects'>{t(`Navigation.projects`)}</a>
              </li>
              <li className={styles.menu_item}>
                <a href='#languages'>{t(`Navigation.languages`)}</a>
              </li>
              <li className={styles.menu_item}>
                <a href='#certificates'>{t(`Navigation.certificates`)}</a>
              </li>
              <li className={styles.menu_item}>
                <a href='#hobbies'>{t(`Navigation.hobbies`)}</a>
              </li>
            </ul>
          </nav>

          <div className={styles.options_container}>
            <DarkModeToggler />
            <LanguageSelection locale={locale} />
          </div>
        </div>
      </header>
      {/* Avoidin overlap. Height has to match header height */}
      <div style={{ height: 70 }}></div>
    </>
  );
};

export default Header;
