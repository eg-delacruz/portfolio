import Image from 'next/image';

//Styles
import styles from './Styles.module.css';

//Assets
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
import aws_white_icon from '@assets/icons/skills/aws_white.svg';
import aws_black_icon from '@assets/icons/skills/aws_black.svg';
import styled_components_black_icon from '@assets/icons/skills/styles_components.svg';
import styles_components_white_icon from '@assets/icons/skills/styles_components_white.svg';
import graph_ql_icon from '@assets/icons/skills/graph_ql.svg';
import node_icon from '@assets/icons/skills/node.svg';
import express_black_icon from '@assets/icons/skills/express_black.svg';
import express_white_icon from '@assets/icons/skills/express_white.svg';
import mongoose_icon from '@assets/icons/skills/mongoose.svg';
import c_icon from '@assets/icons/skills/c.svg';
import mongo_icon from '@assets/icons/skills/mongo.svg';
import sql_icon from '@assets/icons/skills/sql.svg';
import illustrator_icon from '@assets/icons/skills/illustrator.svg';
import photoshop_icon from '@assets/icons/skills/photoshop.svg';
import figma_icon from '@assets/icons/skills/figma.svg';
import xd_icon from '@assets/icons/skills/xd.svg';
import git_icon from '@assets/icons/skills/git.svg';
import github_black_icon from '@assets/icons/skills/github_black.svg';
import github_white_icon from '@assets/icons/skills/github_white.svg';
import scrum_icon from '@assets/icons/skills/scrum.svg';
import cypress_icon from '@assets/icons/skills/cypress.svg';
import firebase_icon from '@assets/icons/skills/firebase.svg';
import c_plus_plus_icon from '@assets/icons/skills/c_plus_plus.svg';
import docker_icon from '@assets/icons/skills/docker.svg';
import nginx_icon from '@assets/icons/skills/nginx.svg';
import python_icon from '@assets/icons/skills/python.svg';
import tailwind_icon from '@assets/icons/skills/tailwind.svg';

type Props = {
  translations: {
    title: string;
    database: string;
    design: string;
    others: string;
  };
};

export const Skills = ({ translations }: Props) => {
  return (
    <section
      id='skills'
      className={`${styles.skills} secondary_bg_color_section section`}
    >
      <div className={`${styles.skills_container} home_section_container`}>
        <div className='home_section_title_container'>
          <Image src={skills_icon} alt='Skills icon' />
          <h2>{translations.title}</h2>
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
                <Image
                  className='data-hide-on-theme-dark'
                  src={next_black_icon}
                  alt='NextJS icon'
                />

                <Image
                  className='data-hide-on-theme-light'
                  src={next_white_icon}
                  alt='NextJS icon'
                />
              </div>
              <p>Next JS</p>
            </div>
            <div className={styles.skill_card}>
              <div className={styles.skill_icon}>
                <Image src={tailwind_icon} alt='Tailwind CSS icon' />
              </div>
              <p>Tailwind</p>
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
            <div
              className={`${styles.skill_card} ${styles.styled_components_bg_stain}`}
            >
              <div className={styles.skill_icon}>
                <Image
                  className='data-hide-on-theme-dark'
                  src={styled_components_black_icon}
                  alt='Styled Components icon'
                />

                <Image
                  className='data-hide-on-theme-light'
                  src={styles_components_white_icon}
                  alt='Styled Components icon'
                />
              </div>
              <p>Styled Components</p>
            </div>
            <div className={styles.skill_card}>
              <div className={styles.skill_icon}>
                <Image src={react_query_icon} alt='React Query icon' />
              </div>
              <p>React Query</p>
            </div>
            <div className={`${styles.skill_card} ${styles.graph_ql_bg_stain}`}>
              <div className={styles.skill_icon}>
                <Image src={graph_ql_icon} alt='Graph QL icon' />
              </div>
              <p>Graph QL</p>
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
            <div className={`${styles.skill_card}`}>
              <div className={styles.skill_icon}>
                <Image src={c_icon} alt='C language icon' />
              </div>
              <p>C</p>
            </div>
            <div className={`${styles.skill_card}`}>
              <div className={styles.skill_icon}>
                <Image src={c_plus_plus_icon} alt='C++ language icon' />
              </div>
              <p>C++</p>
            </div>
            <div className={`${styles.skill_card}`}>
              <div className={styles.skill_icon}>
                <Image src={python_icon} alt='Python icon' />
              </div>
              <p>Python</p>
            </div>
            <div className={styles.skill_card}>
              <div className={styles.skill_icon}>
                <Image
                  className='data-hide-on-theme-dark'
                  src={express_black_icon}
                  alt='Express icon'
                />

                <Image
                  className='data-hide-on-theme-light'
                  src={express_white_icon}
                  alt='Express icon'
                />
              </div>
              <p>Express</p>
            </div>
            <div className={`${styles.skill_card} ${styles.mongoose_bg_stain}`}>
              <div className={styles.skill_icon}>
                <Image src={mongoose_icon} alt='Mongoose icon' />
              </div>
              <p>Mongoose</p>
            </div>
            <div className={`${styles.skill_card}`}>
              <div className={styles.skill_icon}>
                <Image src={nginx_icon} alt='Nginx icon' />
              </div>
              <p>Nginx</p>
            </div>
            <div className={`${styles.skill_card}`}>
              <div className={styles.skill_icon}>
                <Image
                  className='data-hide-on-theme-dark'
                  src={aws_black_icon}
                  alt='AWS icon'
                />

                <Image
                  className='data-hide-on-theme-light'
                  src={aws_white_icon}
                  alt='AWS icon'
                />
              </div>
              <p>AWS</p>
            </div>
            <div className={`${styles.skill_card}`}>
              <div className={styles.skill_icon}>
                <Image src={firebase_icon} alt='Firebase icon' />
              </div>
              <p>Firebase</p>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.database_section}`}>
          <h3>{translations.database}</h3>
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
          <h3>{translations.design}</h3>
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
        <div className={`${styles.section} ${styles.others_section}`}>
          <h3>{translations.others}</h3>
          <div className={styles.skills_grid}>
            <div className={styles.skill_card}>
              <div className={styles.skill_icon}>
                <Image src={git_icon} alt='Git icon' />
              </div>
              <p>Git</p>
            </div>
            <div className={styles.skill_card}>
              <div className={styles.skill_icon}>
                <Image
                  className='data-hide-on-theme-dark'
                  src={github_black_icon}
                  alt='GitHub icon'
                />

                <Image
                  className='data-hide-on-theme-light'
                  src={github_white_icon}
                  alt='GitHub icon'
                />
              </div>
              <p>GitHub</p>
            </div>
            <div className={styles.skill_card}>
              <div className={styles.skill_icon}>
                <Image src={docker_icon} alt='Docker icon' />
              </div>
              <p>Docker</p>
            </div>
            <div className={styles.skill_card}>
              <div className={styles.skill_icon}>
                <Image src={scrum_icon} alt='Scrum icon' />
              </div>
              <p>Scrum</p>
            </div>
            <div className={styles.skill_card}>
              <div className={styles.skill_icon}>
                <Image src={cypress_icon} alt='Cypress icon' />
              </div>
              <p>Cypress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
