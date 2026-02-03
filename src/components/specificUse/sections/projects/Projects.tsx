import Image from 'next/image';

//Styles
import styles from './Styles.module.css';

//Assets
import html_icon from '@assets/icons/skills/html.svg';
import js_icon from '@assets/icons/skills/js.svg';
import ts_icon from '@assets/icons/skills/ts.svg';
import react_icon from '@assets/icons/skills/react.svg';
import next_black_icon from '@assets/icons/skills/next_black.svg';
import sass_icon from '@assets/icons/skills/sass.svg';
import redux_icon from '@assets/icons/skills/redux.svg';
import react_query_icon from '@assets/icons/skills/react_query.svg';
import styled_components_black_icon from '@assets/icons/skills/styles_components.svg';
import graph_ql_icon from '@assets/icons/skills/graph_ql.svg';
import node_icon from '@assets/icons/skills/node.svg';
import express_black_icon from '@assets/icons/skills/express_black.svg';
import mongoose_icon from '@assets/icons/skills/mongoose.svg';
import mongo_icon from '@assets/icons/skills/mongo.svg';
import figma_icon from '@assets/icons/skills/figma.svg';
import git_icon from '@assets/icons/skills/git.svg';
import github_black_icon from '@assets/icons/skills/github_black.svg';
import firebase_icon from '@assets/icons/skills/firebase.svg';
import tailwind_icon from '@assets/icons/skills/tailwind.svg';
import projects_icon from '@assets/icons/portfolio_icon.svg';
import scheduler from '@assets/images/scheduler.png';
import campuscanvas_web from '@assets/images/campuscanvas_web.png';
import campuscanvas_node_server from '@assets/images/campuscanvas_node_server.png';
import petgram from '@assets/images/petgram.png';
import hp from '@assets/images/harry_potter.png';

import { MoreProjectsCarrousel } from '@components/specificUse/MoreProjectsCarrousel/MoreProjectsCarrousel';

type Props = {
  translations: {
    title: string;
    code_btn: string;
    site_btn: string;
    projects_info: {
      project_1: {
        title: string;
        description: string;
      };
      project_2: {
        title: string;
        description: string;
      };
      project_3: {
        title: string;
        description: string;
      };
      project_4: {
        title: string;
        description: string;
      };
      project_5: {
        title: string;
        description: string;
      };
    };
  };
};

export const Projects = ({ translations }: Props) => {
  return (
    <section id='projects' className={`${styles.projects} section`}>
      <div className={`${styles.projects_container} home_section_container`}>
        <div className='home_section_title_container'>
          <Image src={projects_icon} alt='Skills icon' />
          <h2>{translations.title}</h2>
        </div>
        <div className={styles.project_cards_container}>
          {/* #MARK: Project 1 */}
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
                <h5>{translations.projects_info.project_1.title}</h5>
                <p>{translations.projects_info.project_1.description}</p>
                <div className={styles.buttons}>
                  <a
                    className='btn_primary'
                    href='https://www.github.com/eg-delacruz/campuscanvas'
                    target='_blank'
                  >
                    {translations.code_btn}
                  </a>
                  <a
                    className='btn_primary'
                    href='https://www.campuscanvas.net/'
                    target='_blank'
                  >
                    {translations.site_btn}
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

          {/* #MARK: Project 2 */}
          <article
            className={`${styles.project_card} ${styles.scheduler_card}`}
          >
            <div className={styles.project_image_container}>
              <Image src={scheduler} alt='Scheduler web app' loading='lazy' />
            </div>
            <div className={styles.project_info_container}>
              <div className={styles.project_info_details}>
                <h5>{translations.projects_info.project_2.title}</h5>
                <p>{translations.projects_info.project_2.description}</p>
                <div className={styles.buttons}>
                  <a
                    className='btn_primary'
                    href='https://github.com/eg-delacruz/scheduler'
                    target='_blank'
                  >
                    {translations.code_btn}
                  </a>
                  <a
                    className='btn_primary'
                    href='https://scheduler-six-mu.vercel.app/'
                    target='_blank'
                  >
                    {translations.site_btn}
                  </a>
                </div>
              </div>
              <div className={styles.project_technologies}>
                <Image src={react_icon} alt='React icon' width={20} />
                <Image src={next_black_icon} alt='Next JS icon' width={20} />
                <Image src={ts_icon} alt='TypeScript icon' width={20} />
                <Image src={sass_icon} alt='SASS icon' width={20} />
                <Image src={tailwind_icon} alt='Tailwind icon' width={28} />
                <Image src={firebase_icon} alt='Firebase icon' width={17} />
                <Image src={git_icon} alt='Git icon' width={20} />
                <Image src={github_black_icon} alt='GitHub icon' width={20} />
              </div>
            </div>
          </article>

          {/* #MARK: Project 3 */}
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
                <h5>{translations.projects_info.project_3.title}</h5>
                <p>{translations.projects_info.project_3.description}</p>
                <div className={styles.buttons}>
                  <a
                    className='btn_primary'
                    href='https://www.github.com/eg-delacruz/cc_nodeserver'
                    target='_blank'
                  >
                    {translations.code_btn}
                  </a>
                </div>
              </div>
              <div className={styles.project_technologies}>
                <Image src={js_icon} alt='JavaScript icon' width={20} />
                <Image src={node_icon} alt='Node icon' width={20} />
                <Image
                  src={express_black_icon}
                  alt='Express icon'
                  height={18}
                />
                <Image src={mongoose_icon} alt='Mongoose icon' height={16} />
                <Image src={mongo_icon} alt='Mongo DB icon' height={22} />
                <Image src={git_icon} alt='Git icon' width={20} />
                <Image src={github_black_icon} alt='GitHub icon' width={20} />
              </div>
            </div>
          </article>

          {/* #MARK: Project 4 */}
          <article className={`${styles.project_card} ${styles.petgram_card}`}>
            <div className={styles.project_image_container}>
              <Image src={petgram} alt='Petgram platform' loading='lazy' />
            </div>
            <div className={styles.project_info_container}>
              <div className={styles.project_info_details}>
                <h5>{translations.projects_info.project_4.title}</h5>
                <p>{translations.projects_info.project_4.description}</p>
                <div className={styles.buttons}>
                  <a
                    className='btn_primary'
                    href='https://www.github.com/eg-delacruz/petgram-exercise'
                    target='_blank'
                  >
                    {translations.code_btn}
                  </a>
                  <a
                    className='btn_primary'
                    href='https://petgram-exercise.vercel.app/'
                    target='_blank'
                  >
                    {translations.site_btn}
                  </a>
                </div>
              </div>
              <div className={styles.project_technologies}>
                <Image src={html_icon} alt='HTML icon' width={20} />
                <Image
                  src={styled_components_black_icon}
                  alt='Styled Components icon'
                  width={40}
                />
                <Image src={ts_icon} alt='TypeScript icon' width={20} />
                <Image src={react_icon} alt='React icon' width={20} />
                <Image src={next_black_icon} alt='Next icon' width={20} />
                <Image src={graph_ql_icon} alt='Graph QL icon' width={20} />
                <Image src={git_icon} alt='Git icon' width={20} />
                <Image src={github_black_icon} alt='GitHub icon' width={20} />
              </div>
            </div>
          </article>

          {/* #MARK: Project 5 */}
          <article className={`${styles.project_card} ${styles.hp_card}`}>
            <div className={styles.project_image_container}>
              <Image src={hp} alt='Harry Potter Platform' loading='lazy' />
            </div>
            <div className={styles.project_info_container}>
              <div className={styles.project_info_details}>
                <h5>{translations.projects_info.project_5.title}</h5>
                <p>{translations.projects_info.project_5.description}</p>
                <div className={styles.buttons}>
                  <a
                    className='btn_primary'
                    href='https://www.github.com/eg-delacruz/harry-potter'
                    target='_blank'
                  >
                    {translations.code_btn}
                  </a>
                  <a
                    className='btn_primary'
                    href='https://harry-potter-dun-eta.vercel.app/'
                    target='_blank'
                  >
                    {translations.site_btn}
                  </a>
                </div>
              </div>
              <div className={styles.project_technologies}>
                <Image src={html_icon} alt='HTML icon' width={20} />
                <Image src={ts_icon} alt='TypeScript icon' width={20} />
                <Image src={react_icon} alt='React icon' width={20} />
                <Image src={next_black_icon} alt='Next icon' width={20} />
                <Image src={sass_icon} alt='SASS icon' width={20} />
                <Image src={redux_icon} alt='Redux icon' width={20} />
                <Image src={git_icon} alt='Git icon' width={20} />
                <Image src={github_black_icon} alt='GitHub icon' width={20} />
                <Image src={figma_icon} alt='Figma icon' width={14} />
              </div>
            </div>
          </article>
        </div>

        {/* #MARK: Other projects */}
        {/* <div className={styles.more_projects_carrousel_container}>
          <MoreProjectsCarrousel />
        </div> */}
      </div>
    </section>
  );
};
