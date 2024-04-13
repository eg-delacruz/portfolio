"use client";
import Image from "next/image";

import { useTranslations } from "next-intl";

//Styles
import styles from "./Styles.module.css";

//Assets
import certificates_icon from "@assets/icons/pad_pen_icon.svg";

//Components
import CertificateCard from "@components/specificUse/CertificateCard";

export const Certificates = () => {
  //Client side translations
  const t = useTranslations();

  const front_certificates = [
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_1.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_1.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/profesional-nextjs.pdf",
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_2.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_2.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/nextjs-jamstack.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_3.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_3.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/nextjs-grandes-datasets.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_4.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_4.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/nextjs-practico.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_5.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_5.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/react-typescript.pdf",
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_6.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_6.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/react-2019.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_7.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_7.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/practico-react-js-2019.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_8.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_8.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/react-router-redux.pdf",
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_9.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_9.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/redux.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_10.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_10.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/frontend-developer-2019.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_11.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_11.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/desarrollo-web.pdf",
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_12.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_12.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/html-css.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_13.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_13.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/definitivo-html-css.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_14.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_14.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/practico-html-css.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_15.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_15.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/animaciones-web.pdf",
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_16.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_16.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/practico-maquetacion-css.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_17.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_17.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/responsive-design.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_18.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_18.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/css-grid-layout.pdf",
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_19.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_19.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/preprocesadores.pdf",
    },
  ];

  const back_certificates = [
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_1.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_1.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/nodejs-mongo-websockets.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_2.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_2.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/nodejs-express-api.pdf",
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_3.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_3.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/introduccion-patrones-diseno-software.pdf",
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_4.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_4.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/patrones-diseno-creacionales.pdf",
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_5.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_5.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/bd.pdf",
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_6.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_6.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/fundamentos-node.pdf",
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_7.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_7.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/oop.pdf",
    },
  ];

  const development_certificates = [
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_1.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_1.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/git-github.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_2.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_2.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/typescript.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_3.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_3.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/typescript-tipos-avanzados.pdf",
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_4.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_4.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/javascript-profesional.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_5.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_5.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/fundamentos-javascript-2018.pdf",
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_6.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_6.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/arrays.pdf",
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_7.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_7.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/asincronismo-js-old.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_8.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_8.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/ecmascript.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_9.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_9.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/basico-javascript.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_10.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_10.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/programacion-basica.pdf",
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_11.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_11.date`
      ),
      issued_by: "SoloLearn",
      url: "/certificates/csharp-certificate.jpg",
      blue_bg: true,
    },
  ];

  const design_certificates = [
    {
      title: t(
        `Page.certificates.certificates_info.design.certificate_1.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.design.certificate_1.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/figma-basico.pdf",
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.design.certificate_2.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.design.certificate_2.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/illustrator.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.design.certificate_3.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.design.certificate_3.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/adobe-xd.pdf",
    },
  ];

  const other_certificates = [
    {
      title: t(
        `Page.certificates.certificates_info.others.certificate_5.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.others.certificate_5.date`
      ),
      issued_by: "CertiProf",
      url: "/certificates/scrum-certiprof.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.others.certificate_6.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.others.certificate_6.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/scrum-platzi.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.others.certificate_1.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.others.certificate_1.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/google-analytics.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.others.certificate_2.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.others.certificate_2.date`
      ),
      issued_by: "Hochschule Bremen",
      url: "/certificates/sap.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.others.certificate_3.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.others.certificate_3.date`
      ),
      issued_by: "Microsoft",
      url: "/certificates/microsoft-dynamics.pdf",
    },
    {
      title: t(
        `Page.certificates.certificates_info.others.certificate_4.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.others.certificate_4.date`
      ),
      issued_by: "Platzi",
      url: "/certificates/creacion-de-empresas.pdf",
      blue_bg: true,
    },
  ];

  return (
    <section id="certificates" className={`${styles.certificates} section`}>
      <div
        className={`${styles.certificates_container} home_section_container container`}
      >
        <div className="home_section_title_container">
          <Image src={certificates_icon} alt="Skills icon" />
          <h2>{t(`Page.certificates.title`)}</h2>
        </div>

        {/* MARK: Front End Certificates */}
        <h3>{t(`Page.certificates.category1`)}</h3>

        <div className={styles.certificates_block}>
          {front_certificates.map((certificate) => {
            return (
              <CertificateCard
                key={certificate.title}
                title={certificate.title}
                issue_date={certificate.issue_date}
                issued_by={certificate.issued_by}
                url={certificate.url}
                purple_bg={certificate.purple_bg}
                blue_bg={certificate.blue_bg}
              />
            );
          })}
        </div>

        {/* MARK: Back End Certificates */}
        <h3>{t(`Page.certificates.category2`)}</h3>

        <div className={styles.certificates_block}>
          {back_certificates.map((certificate) => {
            return (
              <CertificateCard
                key={certificate.title}
                title={certificate.title}
                issue_date={certificate.issue_date}
                issued_by={certificate.issued_by}
                url={certificate.url}
                purple_bg={certificate.purple_bg}
                blue_bg={certificate.blue_bg}
              />
            );
          })}
        </div>

        {/* MARK: Development certificates */}
        <h3>{t(`Page.certificates.category3`)}</h3>
        <div className={styles.certificates_block}>
          {development_certificates.map((certificate) => {
            return (
              <CertificateCard
                key={certificate.title}
                title={certificate.title}
                issue_date={certificate.issue_date}
                issued_by={certificate.issued_by}
                url={certificate.url}
                purple_bg={certificate.purple_bg}
                blue_bg={certificate.blue_bg}
              />
            );
          })}
        </div>

        {/* MARK: Design certificates */}
        <h3>{t(`Page.certificates.category4`)}</h3>
        <div className={styles.certificates_block}>
          {design_certificates.map((certificate) => {
            return (
              <CertificateCard
                key={certificate.title}
                title={certificate.title}
                issue_date={certificate.issue_date}
                issued_by={certificate.issued_by}
                url={certificate.url}
                purple_bg={certificate.purple_bg}
                //blue_bg={certificate.blue_bg}
              />
            );
          })}
        </div>

        {/* MARK: Other certificates */}
        <h3>{t(`Page.certificates.category5`)}</h3>
        <div className={styles.certificates_block}>
          {other_certificates.map((certificate) => {
            return (
              <CertificateCard
                key={certificate.title}
                title={certificate.title}
                issue_date={certificate.issue_date}
                issued_by={certificate.issued_by}
                url={certificate.url}
                //purple_bg={certificate.purple_bg}
                blue_bg={certificate.blue_bg}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
