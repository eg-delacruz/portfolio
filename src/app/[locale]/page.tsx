import { Metadata } from 'next';

import {
  useTranslations,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl';

//Components
import PageContent from './PageContent';

//Types
type Props = {
  params: { locale: string };
};

//MetaData
const spanishMetadata: Metadata = {
  title: 'Gerardo De La Cruz',
  description:
    'Desarrollador Full Stack. Conoce mis habilidades, proyectos, idiomas y certificados.',
};

const englishMetadata: Metadata = {
  title: 'Gerardo De La Cruz',
  description:
    'Full Stack developer. Discover my skills, projects, languages and certificates.',
};

const germanMetadata: Metadata = {
  title: 'Gerardo De La Cruz',
  description:
    'Full Stack Entwickler. Entdecken Sie meine Fähigkeiten, Projekte, Sprachen und Zertifikate.',
};

export async function generateMetadata({ params }: Props) {
  const metadata =
    params.locale === 'es'
      ? spanishMetadata
      : params.locale === 'en'
      ? englishMetadata
      : germanMetadata;

  return metadata;
}

//Component responsible for passing translations from the server to the client, as well as generating the right metadata for each language
export default function Home({ params: { locale } }: Props) {
  //Translations to be passed from the server to the client
  const t = useTranslations();

  const contentTranslations = {
    metaData: {
      title: t(`Page.meta_data.title`),
      description: t(`Page.meta_data.description`),
    },
    hero: {
      quote_strong: t(`Page.hero.quote_strong`),
      quote_rest: t(`Page.hero.quote_rest`),
      description: t(`Page.hero.description`),
    },
    skills: {
      title: t(`Page.skills.title`),
      database: t(`Page.skills.database`),
      design: t(`Page.skills.design`),
      others: t(`Page.skills.others`),
    },
    projects: {
      title: t(`Page.projects.title`),
      code_btn: t(`Page.projects.code_btn`),
      site_btn: t(`Page.projects.site_btn`),
      projects_info: {
        project_1: {
          title: t(`Page.projects.projects_info.project_1.title`),
          description: t(`Page.projects.projects_info.project_1.description`),
        },
        project_2: {
          title: t(`Page.projects.projects_info.project_2.title`),
          description: t(`Page.projects.projects_info.project_2.description`),
        },
        project_3: {
          title: t(`Page.projects.projects_info.project_3.title`),
          description: t(`Page.projects.projects_info.project_3.description`),
        },
        project_4: {
          title: t(`Page.projects.projects_info.project_4.title`),
          description: t(`Page.projects.projects_info.project_4.description`),
        },
      },
    },
    languages: {
      title: t(`Page.languages.title`),
      spanish: t(`Page.languages.spanish`),
      spanish_level: t(`Page.languages.spanish_level`),
      english: t(`Page.languages.english`),
      german: t(`Page.languages.german`),
    },
  };

  //Translations accessible from the client
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PageContent locale={locale} contentTranslations={contentTranslations} />
    </NextIntlClientProvider>
  );
}
