'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Image from 'next/image';

//Styles
import styles from './page.module.css';

//Components
import CertificateCard from '@components/specificUse/CertificateCard';

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
import campuscanvas_node_server from '@assets/images/campuscanvas_node_server.png';

import languages_icon from '@assets/icons/world_icon.svg';
import certificates_icon from '@assets/icons/pad_pen_icon.svg';

import hobbies_icon from '@assets/icons//video_controller_icon.svg';
import code_icon from '@assets/icons/hobbies/code_icon.svg';
import bicicle_icon from '@assets/icons/hobbies/bicicle_icon.svg';
import padel_icon from '@assets/icons/hobbies/padel_icon.svg';
import videogames_icon from '@assets/icons/hobbies/videogames_icon.svg';
import skateboard_icon from '@assets/icons/hobbies/skateboard_icon.svg';
import badminton_icon from '@assets/icons/hobbies/badminton_icon.svg';
import music_icon from '@assets/icons/hobbies/music_icon.svg';

//Types
//imported
//local
type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  //States
  const { resolvedTheme } = useTheme();

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
              {locale === 'en' ? (
                <a href='/documents/CV_english.pdf' target='_blank'>
                  <Image src={CV_icon} alt='CV icon' />
                </a>
              ) : locale === 'es' ? (
                <a href='/documents/CV_español.pdf' target='_blank'>
                  <Image src={CV_icon} alt='CV icon' />
                </a>
              ) : (
                <a href='/documents/CV_deutsch.pdf' target='_blank'>
                  <Image src={CV_icon} alt='CV icon' />
                </a>
              )}

              <a href='https://github.com/eg-delacruz' target='_blank'>
                <Image src={GitHub_icon} alt='GitHub icon' />
              </a>
              <a
                href='https://www.linkedin.com/in/eg-delacruz/'
                target='_blank'
              >
                <Image src={LinkedIn_icon} alt='LinkedIn icon' />
              </a>
              <a href='mailto:eg.cruzvalle@gmail.com'>
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
                  src={campuscanvas_web}
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
                  <Image src={mongoose_icon} alt='Mongoose icon' height={16} />
                  <Image src={mongo_icon} alt='Mongo DB icon' height={22} />
                </div>
              </div>
            </article>

            <article
              className={`${styles.project_card} ${styles.cc_nodeserver_card}`}
            >
              <div className={styles.project_image_container}>
                <Image
                  src={campuscanvas_node_server}
                  alt='Campus Canvas web app'
                  loading='lazy'
                />
              </div>

              <div className={styles.project_info_container}>
                <div className={styles.project_info_details}>
                  <h5>{t(`Page.projects.projects_info.project_2.title`)}</h5>
                  <p>
                    {t(`Page.projects.projects_info.project_2.description`)}
                  </p>
                  <div className={styles.buttons}>
                    <a
                      className='btn_primary'
                      href='https://github.com/eg-delacruz/cc_nodeserver'
                      target='_blank'
                    >
                      {t(`Page.projects.code_btn`)}
                    </a>
                  </div>
                </div>
                <div className={styles.project_technologies}>
                  <Image src={js_icon} alt='JavaScript icon' width={20} />
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
                <a
                  href='/certificates/english.pdf'
                  className={`${styles.bar} ${styles.english_bar}`}
                  target='_blank'
                >
                  <div>C1</div>
                </a>
              </div>
            </div>

            <div>
              <h5>{t(`Page.languages.german`)}</h5>
              <div className={styles.bar_container}>
                <a
                  href='/certificates/german.pdf'
                  className={`${styles.bar} ${styles.german_bar}`}
                  target='_blank'
                >
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

          <h3>{t(`Page.certificates.category1`)}</h3>
          <div className={styles.certificates_block}>
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_1.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_1.date`
              )}
              issued_by='Platzi'
              url={'/certificates/profesional-nextjs.pdf'}
              purple_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_2.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_2.date`
              )}
              issued_by='Platzi'
              url={'/certificates/nextjs-jamstack.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_3.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_3.date`
              )}
              issued_by='Platzi'
              url={'/certificates/nextjs-grandes-datasets.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_4.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_4.date`
              )}
              issued_by='Platzi'
              url={'/certificates/nextjs-practico.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_5.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_5.date`
              )}
              issued_by='Platzi'
              url={'/certificates/react-typescript.pdf'}
              blue_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_6.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_6.date`
              )}
              issued_by='Platzi'
              url={'/certificates/react-2019.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_7.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_7.date`
              )}
              issued_by='Platzi'
              url={'/certificates/practico-react-js-2019.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_8.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_8.date`
              )}
              issued_by='Platzi'
              url={'/certificates/react-router-redux.pdf'}
              blue_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_9.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_9.date`
              )}
              issued_by='Platzi'
              url={'/certificates/redux.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_10.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_10.date`
              )}
              issued_by='Platzi'
              url={'/certificates/frontend-developer-2019.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_11.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_11.date`
              )}
              issued_by='Platzi'
              url={'/certificates/desarrollo-web.pdf'}
              purple_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_12.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_12.date`
              )}
              issued_by='Platzi'
              url={'/certificates/html-css.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_13.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_13.date`
              )}
              issued_by='Platzi'
              url={'/certificates/definitivo-html-css.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_14.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_14.date`
              )}
              issued_by='Platzi'
              url={'/certificates/practico-html-css.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_15.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_15.date`
              )}
              issued_by='Platzi'
              url={'/certificates/animaciones-web.pdf'}
              blue_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_16.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_16.date`
              )}
              issued_by='Platzi'
              url={'/certificates/practico-maquetacion-css.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_17.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_17.date`
              )}
              issued_by='Platzi'
              url={'/certificates/responsive-design.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_18.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_18.date`
              )}
              issued_by='Platzi'
              url={'/certificates/css-grid-layout.pdf'}
              purple_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.frontend.certificate_19.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.frontend.certificate_19.date`
              )}
              issued_by='Platzi'
              url={'/certificates/preprocesadores.pdf'}
            />
          </div>

          <h3>{t(`Page.certificates.category2`)}</h3>
          <div className={styles.certificates_block}>
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.backend.certificate_1.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.backend.certificate_1.date`
              )}
              issued_by='Platzi'
              url={'/certificates/nodejs-mongo-websockets.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.backend.certificate_2.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.backend.certificate_2.date`
              )}
              issued_by='Platzi'
              url={'/certificates/bd.pdf'}
              blue_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.backend.certificate_3.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.backend.certificate_3.date`
              )}
              issued_by='Platzi'
              url={'/certificates/fundamentos-node.pdf'}
              purple_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.backend.certificate_4.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.backend.certificate_4.date`
              )}
              issued_by='Platzi'
              url={'/certificates/oop.pdf'}
            />
          </div>

          <h3>{t(`Page.certificates.category3`)}</h3>
          <div className={styles.certificates_block}>
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.development.certificate_1.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.development.certificate_1.date`
              )}
              issued_by='Platzi'
              url={'/certificates/git-github.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.development.certificate_2.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.development.certificate_2.date`
              )}
              issued_by='Platzi'
              url={'/certificates/typescript.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.development.certificate_3.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.development.certificate_3.date`
              )}
              issued_by='Platzi'
              url={'/certificates/typescript-tipos-avanzados.pdf'}
              blue_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.development.certificate_4.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.development.certificate_4.date`
              )}
              issued_by='Platzi'
              url={'/certificates/javascript-profesional.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.development.certificate_5.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.development.certificate_5.date`
              )}
              issued_by='Platzi'
              url={'/certificates/fundamentos-javascript-2018.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.development.certificate_6.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.development.certificate_6.date`
              )}
              issued_by='Platzi'
              url={'/certificates/arrays.pdf'}
              purple_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.development.certificate_7.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.development.certificate_7.date`
              )}
              issued_by='Platzi'
              url={'/certificates/asincronismo-js-old.pdf'}
              purple_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.development.certificate_8.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.development.certificate_8.date`
              )}
              issued_by='Platzi'
              url={'/certificates/ecmascript.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.development.certificate_9.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.development.certificate_9.date`
              )}
              issued_by='Platzi'
              url={'/certificates/basico-javascript.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.development.certificate_10.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.development.certificate_10.date`
              )}
              issued_by='Platzi'
              url={'/certificates/programacion-basica.pdf'}
              blue_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.development.certificate_11.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.development.certificate_11.date`
              )}
              issued_by='SoloLearn'
              url={'/certificates/csharp-certificate.jpg'}
              blue_bg={true}
            />
          </div>

          <h3>{t(`Page.certificates.category4`)}</h3>
          <div className={styles.certificates_block}>
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.design.certificate_1.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.design.certificate_1.date`
              )}
              issued_by='Platzi'
              url={'/certificates/figma-basico.pdf'}
              purple_bg={true}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.design.certificate_2.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.design.certificate_2.date`
              )}
              issued_by='Platzi'
              url={'/certificates/illustrator.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.design.certificate_3.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.design.certificate_3.date`
              )}
              issued_by='Platzi'
              url={'/certificates/adobe-xd.pdf'}
            />
          </div>

          <h3>{t(`Page.certificates.category5`)}</h3>
          <div className={styles.certificates_block}>
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.others.certificate_1.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.others.certificate_1.date`
              )}
              issued_by='Platzi'
              url={'/certificates/google-analytics.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.others.certificate_2.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.others.certificate_2.date`
              )}
              issued_by='Hochschule Bremen'
              url={'/certificates/sap.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.others.certificate_3.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.others.certificate_3.date`
              )}
              issued_by='Microsoft'
              url={'/certificates/microsoft-dynamics.pdf'}
            />
            <CertificateCard
              title={t(
                `Page.certificates.certificates_info.others.certificate_4.title`
              )}
              issue_date={t(
                `Page.certificates.certificates_info.others.certificate_4.date`
              )}
              issued_by='Platzi'
              url={'/certificates/creacion-de-empresas.pdf'}
              blue_bg={true}
            />
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

          <div className={styles.hobbies_icons}>
            <Image src={code_icon} alt='Code icon' />
            <Image src={bicicle_icon} alt='Bicicle icon' />
            <Image src={padel_icon} alt='Padel icon' />
            <Image src={videogames_icon} alt='Videogames icon' />
            <Image src={skateboard_icon} alt='Skateboard icon' />
            <Image src={badminton_icon} alt='Badminton icon' />
            <Image src={music_icon} alt='Music icon' />
          </div>
        </div>
      </section>
    </>
  );
}
