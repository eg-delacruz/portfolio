'use client';
import Image from 'next/image';
import { useState, useMemo } from 'react';

import { useTranslations } from 'next-intl';

//Styles
import styles from './Styles.module.css';

//Assets
import certificates_icon from '@assets/icons/pad_pen_icon.svg';

//Components
import CertificateCard from '@components/specificUse/CertificateCard';

//Hooks
import { useInputValue } from '@/hooks/useInputValue';
import useDebouncedSearchValue from '@/hooks/useDebouncedSearchValue';

type Certificate = {
  title: string;
  issue_date: string;
  issued_by: string;
  url: string;
  purple_bg?: boolean;
  blue_bg?: boolean;
};

//CLARIFICATIONS: to add new certificates, just add them at the end of the languages jsons in the corresponding order (DO NOT SHIFT THEM!). Then, add them to the corresponding array below in the spot we prefer
export const Certificates = () => {
  //Controlling input
  const SEARCH_BAR = useInputValue('');
  const DEBOUNCED_SEARCH_BAR = useDebouncedSearchValue(SEARCH_BAR.value);

  //Client side translations
  const t = useTranslations();

  //Certificate arrays
  const front_certificates = [
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_1.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_1.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/profesional-nextjs.pdf',
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_2.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_2.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/nextjs-jamstack.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_3.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_3.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/nextjs-grandes-datasets.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_4.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_4.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/nextjs-practico.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_5.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_5.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/react-typescript.pdf',
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_6.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_6.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/react-2019.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_7.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_7.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/practico-react-js-2019.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_8.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_8.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/react-router-redux.pdf',
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_9.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_9.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/redux.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_10.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_10.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/frontend-developer-2019.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_11.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_11.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/desarrollo-web.pdf',
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_12.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_12.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/html-css.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_13.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_13.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/definitivo-html-css.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_14.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_14.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/practico-html-css.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_15.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_15.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/animaciones-web.pdf',
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_16.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_16.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/practico-maquetacion-css.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_17.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_17.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/responsive-design.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_18.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_18.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/css-grid-layout.pdf',
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_19.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_19.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/preprocesadores.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.frontend.certificate_20.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.frontend.certificate_20.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/cypress-ui.pdf',
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
      issued_by: 'Platzi',
      url: '/certificates/nodejs-mongo-websockets.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_2.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_2.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/nodejs-express-api.pdf',
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_3.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_3.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/introduccion-patrones-diseno-software.pdf',
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_4.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_4.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/patrones-diseno-creacionales.pdf',
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_5.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_5.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/bd.pdf',
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_6.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_6.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/fundamentos-node.pdf',
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.backend.certificate_7.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.backend.certificate_7.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/oop.pdf',
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
      issued_by: 'Platzi',
      url: '/certificates/git-github.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_2.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_2.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/typescript.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_3.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_3.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/typescript-tipos-avanzados.pdf',
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_4.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_4.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/javascript-profesional.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_13.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_13.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/estructuras-datos-js.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_5.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_5.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/fundamentos-javascript-2018.pdf',
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_6.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_6.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/arrays.pdf',
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_7.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_7.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/asincronismo-js-old.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_8.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_8.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/ecmascript.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_12.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_12.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/automatizacion-pruebas.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_9.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_9.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/basico-javascript.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_10.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_10.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/programacion-basica.pdf',
      blue_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.development.certificate_11.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.development.certificate_11.date`
      ),
      issued_by: 'SoloLearn',
      url: '/certificates/csharp-certificate.jpg',
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
      issued_by: 'Platzi',
      url: '/certificates/figma-basico.pdf',
      purple_bg: true,
    },
    {
      title: t(
        `Page.certificates.certificates_info.design.certificate_2.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.design.certificate_2.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/illustrator.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.design.certificate_3.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.design.certificate_3.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/adobe-xd.pdf',
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
      issued_by: 'CertiProf',
      url: '/certificates/scrum-certiprof.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.others.certificate_6.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.others.certificate_6.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/scrum-platzi.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.others.certificate_1.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.others.certificate_1.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/google-analytics.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.others.certificate_2.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.others.certificate_2.date`
      ),
      issued_by: 'Hochschule Bremen',
      url: '/certificates/sap.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.others.certificate_3.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.others.certificate_3.date`
      ),
      issued_by: 'Microsoft',
      url: '/certificates/microsoft-dynamics.pdf',
    },
    {
      title: t(
        `Page.certificates.certificates_info.others.certificate_4.title`
      ),
      issue_date: t(
        `Page.certificates.certificates_info.others.certificate_4.date`
      ),
      issued_by: 'Platzi',
      url: '/certificates/creacion-de-empresas.pdf',
      blue_bg: true,
    },
  ];

  //States
  const [filteredFrontCertificates, setFilteredFrontCertificates] =
    useState<Certificate[]>(front_certificates);
  const [filteredBackCertificates, setFilteredBackCertificates] =
    useState<Certificate[]>(back_certificates);
  const [filteredDevelopmentCertificates, setFilteredDevelopmentCertificates] =
    useState<Certificate[]>(development_certificates);
  const [filteredDesignCertificates, setFilteredDesignCertificates] =
    useState<Certificate[]>(design_certificates);
  const [filteredOtherCertificates, setFilteredOtherCertificates] =
    useState<Certificate[]>(other_certificates);

  //Filtering certificates
  useMemo(() => {
    const filteredFrontCertificates = front_certificates.filter(
      (certificate) => {
        return certificate.title
          .toLowerCase()
          .includes(String(DEBOUNCED_SEARCH_BAR).toLowerCase());
      }
    );
    setFilteredFrontCertificates(filteredFrontCertificates);
  }, [DEBOUNCED_SEARCH_BAR]);

  useMemo(() => {
    const filteredBackCertificates = back_certificates.filter((certificate) => {
      return certificate.title
        .toLowerCase()
        .includes(String(DEBOUNCED_SEARCH_BAR).toLowerCase());
    });
    setFilteredBackCertificates(filteredBackCertificates);
  }, [DEBOUNCED_SEARCH_BAR]);

  useMemo(() => {
    const filteredDevelopmentCertificates = development_certificates.filter(
      (certificate) => {
        return certificate.title
          .toLowerCase()
          .includes(String(DEBOUNCED_SEARCH_BAR).toLowerCase());
      }
    );
    setFilteredDevelopmentCertificates(filteredDevelopmentCertificates);
  }, [DEBOUNCED_SEARCH_BAR]);

  useMemo(() => {
    const filteredDesignCertificates = design_certificates.filter(
      (certificate) => {
        return certificate.title
          .toLowerCase()
          .includes(String(DEBOUNCED_SEARCH_BAR).toLowerCase());
      }
    );
    setFilteredDesignCertificates(filteredDesignCertificates);
  }, [DEBOUNCED_SEARCH_BAR]);

  useMemo(() => {
    const filteredOtherCertificates = other_certificates.filter(
      (certificate) => {
        return certificate.title
          .toLowerCase()
          .includes(String(DEBOUNCED_SEARCH_BAR).toLowerCase());
      }
    );
    setFilteredOtherCertificates(filteredOtherCertificates);
  }, [DEBOUNCED_SEARCH_BAR]);

  return (
    <section id='certificates' className={`${styles.certificates} section`}>
      <div
        className={`${styles.certificates_container} home_section_container container`}
      >
        <div className='home_section_title_container'>
          <Image src={certificates_icon} alt='Skills icon' />
          <h2>{t(`Page.certificates.title`)}</h2>
        </div>

        <input
          className={styles.search_bar}
          type='text'
          onChange={SEARCH_BAR.onChange}
          value={SEARCH_BAR.value}
          placeholder={t(`Page.certificates.search_bar_placeholder`)}
        />

        {filteredFrontCertificates.length === 0 &&
        filteredBackCertificates.length === 0 &&
        filteredDevelopmentCertificates.length === 0 &&
        filteredDesignCertificates.length === 0 &&
        filteredOtherCertificates.length === 0 ? (
          <>
            <p>{t(`Page.certificates.no_certificates_found_message`)}</p>
          </>
        ) : (
          <>
            {/* MARK: Front End Certificates */}
            {filteredFrontCertificates.length > 0 && (
              <>
                <h3>{t(`Page.certificates.category1`)}</h3>

                <div className={styles.certificates_block}>
                  {filteredFrontCertificates.map((certificate) => {
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
              </>
            )}

            {/* MARK: Back End Certificates */}
            {filteredBackCertificates.length > 0 && (
              <>
                <h3>{t(`Page.certificates.category2`)}</h3>

                <div className={styles.certificates_block}>
                  {filteredBackCertificates.map((certificate) => {
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
              </>
            )}

            {/* MARK: Development certificates */}
            {filteredDevelopmentCertificates.length > 0 && (
              <>
                <h3>{t(`Page.certificates.category3`)}</h3>
                <div className={styles.certificates_block}>
                  {filteredDevelopmentCertificates.map((certificate) => {
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
              </>
            )}

            {/* MARK: Design certificates */}
            {filteredDesignCertificates.length > 0 && (
              <>
                <h3>{t(`Page.certificates.category4`)}</h3>
                <div className={styles.certificates_block}>
                  {filteredDesignCertificates.map((certificate) => {
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
              </>
            )}

            {/* MARK: Other certificates */}
            {filteredOtherCertificates.length > 0 && (
              <>
                <h3>{t(`Page.certificates.category5`)}</h3>
                <div className={styles.certificates_block}>
                  {filteredOtherCertificates.map((certificate) => {
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
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};
