import React from 'react';
import { AboutMe } from 'src/types/AboutMe';
import AboutMeComponent from '../container/AboutMe';
import { ContactSection } from '../styles/section';

interface Props {
  aboutMe: AboutMe;
}

function SectionContactComponent({ aboutMe }: Props) {
  return (
    <ContactSection className='container-fluid container-lg' id='contact'>
      <AboutMeComponent aboutMe={aboutMe} />
    </ContactSection>
  );
}

export default SectionContactComponent;
