import { Box } from '@mui/material';
import React from 'react';
import HomeLayout from 'src/components/layouts/Home';
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
      <HomeLayout showFooter>
        {data ? <SectionWelcomeComponent aboutMe={data?.aboutMe} /> : null}
        {data && data.projects.length > 0 ? (
          <SectionProjectComponent projects={data.projects} />
        ) : null}
        {data && data.skills.length > 0 ? <SectionSkillComponent skills={data?.skills} /> : null}
        {data ? <SectionContactComponent aboutMe={data.aboutMe} /> : null}
      </HomeLayout>
    </Box>
  );
}

export default View;
