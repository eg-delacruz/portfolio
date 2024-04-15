"use client";
import Image from "next/image";

import { useTranslations } from "next-intl";

//Styles
import styles from "./styles.module.css";

//Assets
import white_click_icon from "@assets/icons/click_white.svg";
import black_click_icon from "@assets/icons/click_black.svg";

//Types
//Local
type Props = {
  title: string;
  issue_date: string;
  issued_by: string;
  url: string;
  purple_bg?: boolean;
  blue_bg?: boolean;
};

const Index = ({
  title,
  issue_date,
  issued_by,
  url,
  purple_bg = false,
  blue_bg = false,
}: Props) => {
  //Translations
  const t = useTranslations();

  return (
    <a
      className={`${styles.certificate} ${purple_bg ? styles.purple_bg : ""} ${
        blue_bg ? styles.blue_bg : ""
      }`}
      href={url}
      target="_blank"
    >
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className="small_paragraph">
          <strong>{t(`Page.certificates.issued_by`)}</strong>
          {": "}
          {issued_by}
        </p>
        <p className="small_paragraph">
          <strong>{t(`Page.certificates.date`)}</strong>
          {": "}
          {issue_date}
        </p>
      </div>

      <Image
        className={`${styles.click_icon} data-hide-on-theme-light`}
        alt="click icon"
        src={white_click_icon}
        width={20}
      />
      <Image
        className={`${styles.click_icon} data-hide-on-theme-dark`}
        alt="click icon"
        src={black_click_icon}
        width={20}
      />
    </a>
  );
};

export default Index;
