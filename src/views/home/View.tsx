import { Box } from '@mui/material';
import React from 'react';
import FooterComponent from 'src/components/container/Footer';
import Header from 'src/components/header/HomeHeader';
import SectionContactComponent from 'src/components/section/SectionContact';
import SectionProjectComponent from 'src/components/section/SectionProjects';
import SectionSkillComponent from 'src/components/section/SectionSkill';
import SectionWelcomeComponent from 'src/components/section/SectionWelcome';
import Home from 'src/types/Home';

interface Props {
  data?: Home;
}

function View({ data }: Props) {
  return (
    <Box
      sx={{ backgroundColor: 'background.default', height: '100%', transition: '0.3s ease-in-out' }}
    >
      <Header />
      {data ? <SectionWelcomeComponent aboutMe={data?.aboutMe} /> : null}
      {data ? <SectionProjectComponent projects={data.projects} /> : null}
      {data ? <SectionSkillComponent skills={data?.skills} /> : null}
      {data ? <SectionContactComponent aboutMe={data.aboutMe} /> : null}
      <FooterComponent />
    </Box>
  );
}

export default View;
