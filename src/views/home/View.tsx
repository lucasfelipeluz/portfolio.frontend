import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HomeLayout from 'src/components/layouts/Home';
import SectionContactComponent from 'src/components/section/SectionContact';
import SectionSkillComponent from 'src/components/section/SectionSkill';
import SectionWelcomeComponent from 'src/components/section/SectionWelcome';
import strings from 'src/utils/strings';

function View() {
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
        <SectionWelcomeComponent />
        {/* {/* <SectionProjectComponent /> */}
        <SectionSkillComponent />
        <SectionContactComponent />
      </HomeLayout>
    </Box>
  );
}

export default View;
