import React from 'react';
import { useLanguage } from 'src/core/context/languageContext';
import { AboutMe } from 'src/types/AboutMe';
import WelcomeInfomationComponent from '../container/WelcomeInfomation';
import { Section } from '../styles/section';
import { DeveloperIlustration, WelcomeContainer } from '../styles/welcome';
import WelcomeSvg from '../svg/Welcome';

interface Props {
  aboutMe: AboutMe;
}

function SectionWelcomeComponent({ aboutMe }: Props) {
  const { language } = useLanguage();

  return (
    <Section>
      <WelcomeContainer sx={{ transition: '0.3s ease-in-out' }}>
        <WelcomeInfomationComponent
          language={language}
          jobTitle={aboutMe.jobTitle}
          name={aboutMe.name}
        />
        <DeveloperIlustration>
          <WelcomeSvg />
        </DeveloperIlustration>
      </WelcomeContainer>
    </Section>
  );
}

export default SectionWelcomeComponent;
