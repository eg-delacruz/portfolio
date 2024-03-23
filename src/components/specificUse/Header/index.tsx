import { useTranslations } from 'next-intl';

import HeaderContent from './HeaderContent';

//Types
type Props = {
  locale: string;
};

//This component is responsible for passing the translations from the server to the client
const Header = ({ locale }: Props) => {
  //Translations
  const t = useTranslations();

  const navTranslations = {
    home: t(`Navigation.home`),
    skills: t(`Navigation.skills`),
    projects: t(`Navigation.projects`),
    languages: t(`Navigation.languages`),
    certificates: t(`Navigation.certificates`),
    hobbies: t(`Navigation.hobbies`),
  };

  return <HeaderContent locale={locale} navTranslations={navTranslations} />;
};

export default Header;
