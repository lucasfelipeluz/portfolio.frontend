import React from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { DeveloperIlustrationStyled, WelcomeStyled } from '../style/Welcome';
// @ts-ignore
import IlustracaoDev from '../assets/image/ilustração-dev.svg';
import WelcomeInfomationComponent from '../components/WelcomeInfomation';
import { Section } from '../style/Globals';
import { AboutMeProps } from '../types/ServicesProps';

interface Props {
  aboutMe: AboutMeProps;
}

export default function Welcome({ aboutMe }: Props) {
  const { language } = React.useContext(LanguageContext);

  return (
    <Section>
      <WelcomeStyled className="container-fluid container-lg">
        <WelcomeInfomationComponent
          language={language}
          jobTitle={aboutMe.jobTitle}
          name={aboutMe.name}
        />
        <DeveloperIlustrationStyled>
          <img src={IlustracaoDev} />
        </DeveloperIlustrationStyled>
      </WelcomeStyled>
    </Section>
  );
}
