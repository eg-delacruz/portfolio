import Image from "next/image";

//Styles
import styles from "./Styles.module.css";

//Assets
import languages_icon from "@assets/icons/world_icon.svg";

type Props = {
  translations: {
    title: string;
    spanish: string;
    spanish_level: string;
    english: string;
    german: string;
  };
};
export const Languages = ({ translations }: Props) => {
  return (
    <section
      id="languages"
      className={`${styles.languajes} secondary_bg_color_section section`}
    >
      <div className={`${styles.languajes_container} home_section_container`}>
        <div className="home_section_title_container">
          <Image src={languages_icon} alt="Skills icon" />
          <h2>{translations.title}</h2>
        </div>
        <div className={styles.bars_container}>
          <div>
            <h5>{translations.spanish}</h5>
            <div className={styles.bar_container}>
              <div className={`${styles.bar} ${styles.spanish_bar}`}>
                {translations.spanish_level}
              </div>
            </div>
          </div>
          <div>
            <h5>{translations.english}</h5>
            <div className={styles.bar_container}>
              <a
                href="/certificates/english.pdf"
                className={`${styles.bar} ${styles.english_bar}`}
                target="_blank"
              >
                <div>C1</div>
              </a>
            </div>
          </div>
          <div>
            <h5>{translations.german}</h5>
            <div className={styles.bar_container}>
              <a
                href="/certificates/german.pdf"
                className={`${styles.bar} ${styles.german_bar}`}
                target="_blank"
              >
                <div>C1</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
