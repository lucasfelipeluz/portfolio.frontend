import React, { useContext } from 'react';
import AboutMeComponent from '../components/AboutMe';
import { LanguageContext } from '../context/LanguageContext';
import { ContactSection } from '../style/Contact';
import { SectionTitle } from '../style/Globals';
import { AboutMeProps } from '../types/ServicesProps';
import strings from '../utils/strings';

interface Props {
  aboutMe: AboutMeProps;
}

export default function ContactView({ aboutMe }: Props) {
  const { language } = useContext(LanguageContext);

  return (
    <ContactSection className="container-fluid container-lg" id="about-me">
      <SectionTitle id="contact">{strings.aboutMe[language.code]}</SectionTitle>
      <AboutMeComponent aboutMe={aboutMe} langCode={language.code} />
    </ContactSection>
  );
}
