import React, { useState } from 'react';
import {
  DeveloperIlustrationStyled,
  WelcomeInformationStyled,
  WelcomeStyled,
} from '../style/Welcome';
import { SectionTitle } from '../style/Globals';
import { LanguageContext } from '../context/LanguageContext';
import strings from '../utils/strings';
// @ts-ignore
import IlustracaoDev from '../assets/image/ilustração-dev.svg';

export default function Welcome() {
  const { language } = React.useContext(LanguageContext);

  return (
    <WelcomeStyled className="container-fluid container-lg">
      <WelcomeInformationStyled>
        <p className="hello">{strings.hello[language.code]}</p>
        <p className="name">Lucas Luz</p>
        <p className="position">Desenvolvedor</p>
      </WelcomeInformationStyled>
      <DeveloperIlustrationStyled>
        <img src={IlustracaoDev} />
      </DeveloperIlustrationStyled>
    </WelcomeStyled>
  );
}
