import Image from "next/image";

//Styles
import styles from "./Styles.module.css";

//Assets
import hobbies_icon from "@assets/icons//video_controller_icon.svg";
import code_icon from "@assets/icons/hobbies/code_icon.svg";
import bicicle_icon from "@assets/icons/hobbies/bicicle_icon.svg";
import padel_icon from "@assets/icons/hobbies/padel_icon.svg";
import videogames_icon from "@assets/icons/hobbies/videogames_icon.svg";
import skateboard_icon from "@assets/icons/hobbies/skateboard_icon.svg";
import badminton_icon from "@assets/icons/hobbies/badminton_icon.svg";
import music_icon from "@assets/icons/hobbies/music_icon.svg";

type Props = {
  translations: {
    title: string;
  };
};

export const Hobbies = ({ translations }: Props) => {
  return (
    <section
      id="hobbies"
      className={`${styles.hobbies} secondary_bg_color_section section`}
    >
      <div className={`${styles.hobbies_container} home_section_container`}>
        <div className="home_section_title_container">
          <Image src={hobbies_icon} alt="Skills icon" />
          <h2>{translations.title}</h2>
        </div>

        <div className={styles.hobbies_icons}>
          <Image src={code_icon} alt="Code icon" />
          <Image src={bicicle_icon} alt="Bicicle icon" />
          <Image src={padel_icon} alt="Padel icon" />
          <Image src={videogames_icon} alt="Videogames icon" />
          <Image src={skateboard_icon} alt="Skateboard icon" />
          <Image src={badminton_icon} alt="Badminton icon" />
          <Image src={music_icon} alt="Music icon" />
        </div>
      </div>
    </section>
  );
};
