import { Box } from '@mui/material';
import React from 'react';
import FooterComponent from 'src/components/container/Footer';
import Header from 'src/components/header/HomeHeader';
import SectionContactComponent from 'src/components/section/SectionContact';
import SectionProjectComponent from 'src/components/section/SectionProjects';
import SectionSkillComponent from 'src/components/section/SectionSkill';
import SectionWelcomeComponent from 'src/components/section/SectionWelcome';
import { useLanguage } from 'src/core/context/languageContext';
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
    <Box sx={{ backgroundColor: 'background.default', height: '100%' }}>
      <Header data={headerData} />
      {data ? <SectionWelcomeComponent aboutMe={data?.aboutMe} /> : null}
      {data ? <SectionProjectComponent projects={data.projects} /> : null}
      {data ? <SectionSkillComponent skills={data?.skills} /> : null}
      {data ? <SectionContactComponent aboutMe={data.aboutMe} /> : null}
      <FooterComponent />
    </Box>
  );
}

export default View;
