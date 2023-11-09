'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
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

import skills_icon from '@assets/icons/tools_icon.svg';
import html_icon from '@assets/icons/skills/html.svg';
import css_icon from '@assets/icons/skills/css.svg';
import js_icon from '@assets/icons/skills/js.svg';
import ts_icon from '@assets/icons/skills/ts.svg';
import react_icon from '@assets/icons/skills/react.svg';
import next_black_icon from '@assets/icons/skills/next_black.svg';
import next_white_icon from '@assets/icons/skills/next_white.svg';
import sass_icon from '@assets/icons/skills/sass.svg';
import redux_icon from '@assets/icons/skills/redux.svg';
import react_query_icon from '@assets/icons/skills/react_query.svg';
import graph_ql_icon from '@assets/icons/skills/graph_ql.svg';
import git_icon from '@assets/icons/skills/git.svg';
import github_black_icon from '@assets/icons/skills/github_black.svg';
import github_white_icon from '@assets/icons/skills/github_white.svg';
import node_icon from '@assets/icons/skills/node.svg';
import express_black_icon from '@assets/icons/skills/express_black.svg';
import express_white_icon from '@assets/icons/skills/express_white.svg';
import mongoose_icon from '@assets/icons/skills/mongoose.svg';
import mongo_icon from '@assets/icons/skills/mongo.svg';
import sql_icon from '@assets/icons/skills/sql.svg';
import illustrator_icon from '@assets/icons/skills/illustrator.svg';
import photoshop_icon from '@assets/icons/skills/photoshop.svg';
import figma_icon from '@assets/icons/skills/figma.svg';
import xd_icon from '@assets/icons/skills/xd.svg';

import projects_icon from '@assets/icons/portfolio_icon.svg';
import campuscanvas_web from '@assets/images/campuscanvas_web.png';
import campuscanvas_web2 from '@assets/images/campuscanvas_web_2.png';

import languages_icon from '@assets/icons/world_icon.svg';
import certificates_icon from '@assets/icons/pad_pen_icon.svg';
import hobbies_icon from '@assets/icons//video_controller_icon.svg';

//Types
//imported
//local
type Props = {};

export default function Home() {
  //States
  const { resolvedTheme } = useTheme();

  //TODO: Poner los ids de cada sección en elementos hijos para que al hacer click en el a del header no quede el header encima de la sección
  //Translations
  const t = useTranslations();

  return (
    <>
      <title>{t(`Page.meta_data.title`)}</title>
      <meta name='description' content={t(`Page.meta_data.description`)} />

      {/* ------------------------- Hero ------------------------- */}

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

      {/* ------------------------- Skills ------------------------- */}

      <section id='skills' className={`${styles.skills} section`}>
        <div className={`${styles.skills_container} container`}>
          <div className={styles.title_container}>
            <Image src={skills_icon} alt='Skills icon' />
            <h2>{t(`Page.skills.title`)}</h2>
          </div>

          <div className={styles.section}>
            <h3>Front-End</h3>
            <div className={styles.skills_grid}>
              <div className={`${styles.skill_card} ${styles.html_bg_stain}`}>
                <div className={styles.skill_icon}>
                  <Image src={html_icon} alt='HTML icon' />
                </div>
                <p>HTML</p>
              </div>

              <div className={styles.skill_card}>
                <div className={styles.skill_icon}>
                  <Image src={css_icon} alt='CSS icon' />
                </div>
                <p>CSS</p>
              </div>

              <div className={styles.skill_card}>
                <div className={styles.skill_icon}>
                  <Image src={js_icon} alt='JavaScript icon' />
                </div>
                <p>JavaScript</p>
              </div>

              <div className={`${styles.skill_card} ${styles.ts_bg_stain}`}>
                <div className={styles.skill_icon}>
                  <Image src={ts_icon} alt='TypeScript icon' />
                </div>
                <p>TypeScript</p>
              </div>

              <div className={styles.skill_card}>
                <div className={styles.skill_icon}>
                  <Image src={react_icon} alt='React icon' />
                </div>
                <p>React</p>
              </div>

              <div className={`${styles.skill_card} ${styles.next_bg_stain}`}>
                <div className={styles.skill_icon}>
                  {resolvedTheme === 'dark' ? (
                    <Image src={next_white_icon} alt='NextJS icon' />
                  ) : (
                    <Image src={next_black_icon} alt='NextJS icon' />
                  )}
                </div>
                <p>Next JS</p>
              </div>

              <div className={styles.skill_card}>
                <div className={styles.skill_icon}>
                  <Image src={sass_icon} alt='SASS icon' />
                </div>
                <p>SASS</p>
              </div>

              <div className={`${styles.skill_card} ${styles.redux_bg_stain}`}>
                <div className={styles.skill_icon}>
                  <Image src={redux_icon} alt='Redux icon' />
                </div>
                <p>Redux</p>
              </div>

              <div className={styles.skill_card}>
                <div className={styles.skill_icon}>
                  <Image src={react_query_icon} alt='React Query icon' />
                </div>
                <p>React Query</p>
              </div>

              <div
                className={`${styles.skill_card} ${styles.graph_ql_bg_stain}`}
              >
                <div className={styles.skill_icon}>
                  <Image src={graph_ql_icon} alt='Graph QL icon' />
                </div>
                <p>Graph QL</p>
              </div>

              <div className={styles.skill_card}>
                <div className={styles.skill_icon}>
                  <Image src={git_icon} alt='Git icon' />
                </div>
                <p>Git</p>
              </div>

              <div className={styles.skill_card}>
                <div className={styles.skill_icon}>
                  {resolvedTheme === 'dark' ? (
                    <Image src={github_white_icon} alt='CSS icon' />
                  ) : (
                    <Image src={github_black_icon} alt='CSS icon' />
                  )}
                </div>
                <p>GitHub</p>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles.backend_section}`}>
            <h3>Back-End</h3>
            <div className={styles.skills_grid}>
              <div className={`${styles.skill_card} ${styles.node_bg_stain}`}>
                <div className={styles.skill_icon}>
                  <Image src={node_icon} alt='Node icon' />
                </div>
                <p>Node JS</p>
              </div>

              <div className={styles.skill_card}>
                <div className={styles.skill_icon}>
                  {resolvedTheme === 'dark' ? (
                    <Image src={express_white_icon} alt='Express icon' />
                  ) : (
                    <Image src={express_black_icon} alt='Express icon' />
                  )}
                </div>
                <p>Express</p>
              </div>

              <div
                className={`${styles.skill_card} ${styles.mongoose_bg_stain}`}
              >
                <div className={styles.skill_icon}>
                  <Image src={mongoose_icon} alt='Mongoose icon' />
                </div>
                <p>Mongoose</p>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles.database_section}`}>
            <h3>{t(`Page.skills.database`)}</h3>
            <div className={styles.skills_grid}>
              <div className={styles.skill_card}>
                <div className={styles.skill_icon}>
                  <Image src={mongo_icon} alt='Mongo icon' />
                </div>
                <p>Mongo DB</p>
              </div>

              <div className={`${styles.skill_card} ${styles.sql_bg_stain}`}>
                <div className={styles.skill_icon}>
                  <Image src={sql_icon} alt='SQL icon' />
                </div>
                <p>SQL</p>
              </div>
            </div>
          </div>

          <div className={`${styles.section} ${styles.design_section}`}>
            <h3>{t(`Page.skills.design`)}</h3>
            <div className={styles.skills_grid}>
              <div
                className={`${styles.skill_card} ${styles.illustrator_bg_stain}`}
              >
                <div className={styles.skill_icon}>
                  <Image src={illustrator_icon} alt='Illustrator icon' />
                </div>
                <p>Illustrator</p>
              </div>

              <div className={styles.skill_card}>
                <div className={styles.skill_icon}>
                  <Image src={photoshop_icon} alt='Photoshop icon' />
                </div>
                <p>Photoshop</p>
              </div>

              <div className={styles.skill_card}>
                <div className={styles.skill_icon}>
                  <Image src={figma_icon} alt='Figma icon' />
                </div>
                <p>Figma</p>
              </div>

              <div className={`${styles.skill_card} ${styles.xd_bg_stain}`}>
                <div className={styles.skill_icon}>
                  <Image src={xd_icon} alt='XD icon' />
                </div>
                <p>XD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- Projects ------------------------- */}

      <section id='projects' className={`${styles.projects} section`}>
        <div className={`${styles.projects_container} container`}>
          <div className={styles.title_container}>
            <Image src={projects_icon} alt='Skills icon' />
            <h2>{t(`Page.projects.title`)}</h2>
          </div>

          <div className={styles.project_cards_container}>
            <article
              className={`${styles.project_card} ${styles.campuscanvas_card}`}
            >
              <div className={styles.project_image_container}>
                <Image
                  src={campuscanvas_web2}
                  alt='Campus Canvas web app'
                  loading='lazy'
                />
              </div>

              <div className={styles.project_info_container}>
                <div className={styles.project_info_details}>
                  <h5>{t(`Page.projects.projects_info.project_1.title`)}</h5>
                  <p>
                    {t(`Page.projects.projects_info.project_1.description`)}
                  </p>
                  <div className={styles.buttons}>
                    <a
                      className='btn_primary'
                      href='https://github.com/eg-delacruz/campuscanvas'
                      target='_blank'
                    >
                      {t(`Page.projects.code_btn`)}
                    </a>
                    <a
                      className='btn_primary'
                      href='https://www.campuscanvas.net/'
                      target='_blank'
                    >
                      {t(`Page.projects.site_btn`)}
                    </a>
                  </div>
                </div>
                <div className={styles.project_technologies}>
                  <Image src={html_icon} alt='HTML icon' width={20} />
                  <Image src={sass_icon} alt='SASS icon' width={20} />
                  <Image src={js_icon} alt='JavaScript icon' width={20} />
                  <Image src={react_icon} alt='React icon' width={20} />
                  <Image src={next_black_icon} alt='Next JS icon' width={20} />
                  <Image src={redux_icon} alt='Redux icon' width={20} />
                  <Image
                    src={react_query_icon}
                    alt='React Query icon'
                    width={20}
                  />
                  <Image src={git_icon} alt='Git icon' width={20} />
                  <Image src={github_black_icon} alt='GitHub icon' width={20} />
                  <Image src={node_icon} alt='Node icon' width={20} />
                  <Image
                    src={express_black_icon}
                    alt='Express icon'
                    height={18}
                  />
                  <Image src={mongoose_icon} alt='Mongoose icon' height={16} />
                  <Image src={mongo_icon} alt='Mongo DB icon' height={22} />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ------------------------- Languages ------------------------- */}

      <section id='languages' className={`${styles.languajes} section`}>
        <div className={`${styles.languajes_container} container`}>
          <div className={styles.title_container}>
            <Image src={languages_icon} alt='Skills icon' />
            <h2>{t(`Page.languages.title`)}</h2>
          </div>

          <div className={styles.bars_container}>
            <div>
              <h5>{t(`Page.languages.spanish`)}</h5>
              <div className={styles.bar_container}>
                <div className={`${styles.bar} ${styles.spanish_bar}`}>
                  {t(`Page.languages.spanish_level`)}
                </div>
              </div>
            </div>

            <div>
              <h5>{t(`Page.languages.english`)}</h5>
              <div className={styles.bar_container}>
                <a href='#' className={`${styles.bar} ${styles.english_bar}`}>
                  <div>C1</div>
                </a>
              </div>
            </div>

            <div>
              <h5>{t(`Page.languages.german`)}</h5>
              <div className={styles.bar_container}>
                <a href='#' className={`${styles.bar} ${styles.german_bar}`}>
                  <div>C1</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- Certificates ------------------------- */}

      <section id='certificates' className={`${styles.certificates} section`}>
        <div className={`${styles.certificates_container} container`}>
          <div className={styles.title_container}>
            <Image src={certificates_icon} alt='Skills icon' />
            <h2>{t(`Page.certificates.title`)}</h2>
          </div>
        </div>
      </section>

      {/* ------------------------- Hobbies ------------------------- */}

      <section id='hobbies' className={`${styles.hobbies} section`}>
        <div className={`${styles.hobbies_container} container`}>
          <div className={styles.title_container}>
            <Image src={hobbies_icon} alt='Skills icon' />
            <h2>{t(`Page.hobbies.title`)}</h2>
          </div>
        </div>
      </section>
    </>
  );
}
