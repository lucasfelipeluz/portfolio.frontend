import React from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { DeveloperIlustrationStyled, WelcomeStyled } from '../style/Welcome';
// @ts-ignore
import IlustracaoDev from '../assets/image/ilustração-dev.svg';
import WelcomeInfomationComponent from '../components/WelcomeInfomation';

export default function Welcome() {
  const { language } = React.useContext(LanguageContext);

  return (
    <WelcomeStyled className="container-fluid container-lg">
      <WelcomeInfomationComponent language={language} />
      <DeveloperIlustrationStyled>
        <img src={IlustracaoDev} />
      </DeveloperIlustrationStyled>
    </WelcomeStyled>
  );
}
