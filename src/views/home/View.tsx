import React from 'react';
import FooterComponent from 'src/components/container/Footer';

import Header from 'src/components/header/HomeHeader';
import SectionProjectComponent from 'src/components/section/SectionProjects';
import SectionSkillComponent from 'src/components/section/SectionSkill';
import SectionWelcomeComponent from 'src/components/section/SectionWelcome';
import { useLanguage } from 'src/core/context/languageContext';
import { colors } from 'src/core/theme/theme';

import { NavItensProps } from 'src/types/Components';
import Home from 'src/types/Home';
import strings from 'src/utils/strings';

interface Props {
  data?: Home;
}

function View({ data }: Props) {
  const { language } = useLanguage();

  const headerData: NavItensProps[] = [
    { name: strings.projects[language.code], classNames: strings.classNames.projects },
    { name: strings.skills[language.code], classNames: strings.classNames.skills },
    { name: strings.aboutMe[language.code], classNames: strings.classNames.aboutMe },
    { name: strings.contact[language.code], classNames: strings.classNames.contact },
  ];

  return (
    <div style={{ backgroundColor: colors.cor1, height: '100%' }}>
      <Header data={headerData} titleHeader='Portfolio' />
      <SectionWelcomeComponent />
      {data ? <SectionProjectComponent projects={data.projects} /> : null}
      {data ? <SectionSkillComponent skills={data?.skills} /> : null}
      <FooterComponent />
    </div>
  );
}

export default View;
