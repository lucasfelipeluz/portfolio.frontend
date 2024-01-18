import React, { useContext } from 'react';
import AboutMeComponent from '../components/AboutMe';
import { LanguageContext } from '../context/LanguageContext';
import { ContactSection } from '../style/Contact';
import { Section, SectionTitle } from '../style/Globals';
import strings from '../utils/strings';

export default function ContactView() {
  const { language } = useContext(LanguageContext);

  return (
    <ContactSection className="container-fluid container-lg" id="about-me">
      <SectionTitle id="contact">{strings.aboutMe[language.code]}</SectionTitle>
      <AboutMeComponent />
    </ContactSection>
  );
}
