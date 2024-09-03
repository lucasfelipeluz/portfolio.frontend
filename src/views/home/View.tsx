import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import HomeLayout from 'src/components/layouts/Home';
import SectionContactComponent from 'src/components/section/SectionContact';
import SectionProjectComponent from 'src/components/section/SectionProjects';
import SectionSkillComponent from 'src/components/section/SectionSkill';
import SectionWelcomeComponent from 'src/components/section/SectionWelcome';
import Home from 'src/types/Home';
import strings from 'src/utils/strings';

interface Props {
  data?: Home;
}

function View({ data }: Props) {
  const router = useRouter();
  const urls = [strings.classNames.projects, strings.classNames.skills, strings.classNames.contact];

  // Responsible for scrolling to the section when the page is loaded
  useEffect(() => {
    urls.forEach((url) => {
      if (router.asPath.includes(`#${url}`)) {
        const element = document.getElementById(url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }, [router.asPath, urls, router.isReady]);

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
