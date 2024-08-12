import { Metadata } from 'next';

import {
  useTranslations,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl';

//Components
import { Main } from '@components/specificUse/sections/main/Main';
import { Skills } from '@/components/specificUse/sections/skills/Skills';
import { Projects } from '@/components/specificUse/sections/projects/Projects';
import { Languages } from '@/components/specificUse/sections/languages/Languages';
import { Certificates } from '@/components/specificUse/sections/certificates/Certificates';
import { Hobbies } from '@/components/specificUse/sections/hobbies/Hobbies';

//Types
type Props = {
  params: { locale: string };
};
type ContentTranslations = {
  hero: {
    quote_strong: string;
    quote_rest: string;
    description: string;
  };
  skills: {
    title: string;
    database: string;
    design: string;
    others: string;
  };
  projects: {
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
  languages: {
    title: string;
    spanish: string;
    spanish_level: string;
    english: string;
    german: string;
  };
  hobbies: {
    title: string;
  };
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

export default function Home({ params: { locale } }: Props) {
  //Translations accessible from server (important for SEO)
  const t = useTranslations();

  const contentTranslations: ContentTranslations = {
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
        project_5: {
          title: t(`Page.projects.projects_info.project_5.title`),
          description: t(`Page.projects.projects_info.project_5.description`),
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
    hobbies: {
      title: t(`Page.hobbies.title`),
    },
  };

  //Translations accessible from the client
  const messages = useMessages();

  return (
    <>
      <Main locale={locale} translations={contentTranslations.hero} />

      <Skills translations={contentTranslations.skills} />

      <Projects translations={contentTranslations.projects} />

      <Languages translations={contentTranslations.languages} />

      {/* We wrap this component like this to give it access to translations client side */}
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Certificates />
      </NextIntlClientProvider>

      <Hobbies translations={contentTranslations.hobbies} />
    </>
  );
}
