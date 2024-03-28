import React, { useCallback, useContext, useEffect } from 'react';
import 'react-slideshow-image/dist/styles.css';
import useHomeServices from '../hooks/useHomeServices';
import { HomeProps } from '../types/ServicesProps';
import ContactView from '../views/Contact';
import FooterView from '../views/Footer';
import Header from '../views/Header';
import ProjectView from '../views/Project';
import SkillsView from '../views/Skills';
import Welcome from '../views/Welcome';
import { HeaderProps, NavItensProps } from '../types/Components';
import { LanguageContext } from '../context/LanguageContext';
import strings from '../utils/strings';

export default function Home() {
  const { language } = useContext(LanguageContext);
  const { useGetHome } = useHomeServices();

  const [home, setHome] = React.useState<HomeProps>();

  const { data, refetch } = useGetHome();

  const atualizarHome = useCallback(() => {
    setHome(data);
  }, [data, refetch]);

  useEffect(() => {
    atualizarHome();
  }, [atualizarHome]);

  const headerData: NavItensProps[] = [
    { name: strings.projects[language.code], classNames: strings.classNames.projects },
    { name: strings.skills[language.code], classNames: strings.classNames.skills },
    { name: strings.aboutMe[language.code], classNames: strings.classNames.aboutMe },
    { name: strings.contact[language.code], classNames: strings.classNames.contact },
  ];

  if (!home) return <>Carregando!</>;
  return (
    <>
      <Header data={headerData} titleHeader={strings.portfolio[language.code]} />

      <Welcome aboutMe={home.aboutMe} />

      <ProjectView projects={home.projects} />

      <SkillsView skills={home.skills} />

      <ContactView aboutMe={home.aboutMe} />

      <FooterView />
    </>
  );
}
