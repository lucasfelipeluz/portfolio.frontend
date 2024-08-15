import React from 'react';
import { useLanguage } from 'src/core/context/languageContext';

import strings from 'src/utils/strings';
import { AboutMe } from 'src/types/AboutMe';
import AboutMeComponent from '../container/AboutMe';
import { SectionTitle } from '../styles/typography';
import { ContactSection } from '../styles/section';

interface Props {
  aboutMe: AboutMe;
}

function SectionContactComponent({ aboutMe }: Props) {
  const { language } = useLanguage();

  return (
    <ContactSection className='container-fluid container-lg' id='about-me'>
      <SectionTitle>{strings.aboutMe[language.code]} </SectionTitle>
      <AboutMeComponent aboutMe={aboutMe} langCode={language.code} />
    </ContactSection>
  );
}

export default SectionContactComponent;
