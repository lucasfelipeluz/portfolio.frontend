import React from 'react';
import { useLanguage } from 'src/core/context/languageContext';
import { ContactSection } from 'src/core/theme/Contact';
import { SectionTitle } from 'src/core/theme/globals';
import strings from 'src/utils/strings';
import { AboutMe } from 'src/types/AboutMe';
import AboutMeComponent from '../container/AboutMe';

interface Props {
  aboutMe: AboutMe;
}

function SectionContactComponent({ aboutMe }: Props) {
  const { language } = useLanguage();

  return (
    <ContactSection className='container-fluid container-lg' id='about-me'>
      <SectionTitle id='contact'>{strings.aboutMe[language.code]}</SectionTitle>
      <AboutMeComponent aboutMe={aboutMe} langCode={language.code} />
    </ContactSection>
  );
}

export default SectionContactComponent;
