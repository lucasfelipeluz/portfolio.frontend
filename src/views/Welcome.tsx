import React from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { DeveloperIlustrationStyled, WelcomeStyled } from '../style/Welcome';
// @ts-ignore
import IlustracaoDev from '../assets/image/ilustração-dev.svg';
import WelcomeInfomationComponent from '../components/WelcomeInfomation';
import { Section } from '../style/Globals';

export default function Welcome() {
  const { language } = React.useContext(LanguageContext);

  return (
    <Section>
      <WelcomeStyled className="container-fluid container-lg">
        <WelcomeInfomationComponent language={language} />
        <DeveloperIlustrationStyled>
          <img src={IlustracaoDev} />
        </DeveloperIlustrationStyled>
      </WelcomeStyled>
    </Section>
  );
}
