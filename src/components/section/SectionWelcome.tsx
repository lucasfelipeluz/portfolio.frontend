import React from 'react';
import { useLanguage } from 'src/core/context/languageContext';
import { AboutMe } from 'src/types/AboutMe';
import WelcomeInfomationComponent from '../container/WelcomeInfomation';
import { Section } from '../styles/section';
import { DeveloperIlustration, WelcomeContainer } from '../styles/welcome';

interface Props {
  aboutMe: AboutMe;
}

function SectionWelcomeComponent({ aboutMe }: Props) {
  const { language } = useLanguage();

  return (
    <Section>
      <WelcomeContainer className='container-fluid container-lg'>
        <WelcomeInfomationComponent
          language={language}
          jobTitle={aboutMe.jobTitle}
          name={aboutMe.name}
        />
        <DeveloperIlustration>
          <img src='/images/illustration/illustration-dev.svg' alt='Developer' />
        </DeveloperIlustration>
      </WelcomeContainer>
    </Section>
  );
}

export default SectionWelcomeComponent;
