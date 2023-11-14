import React from 'react';
import LanguageProps from '../interfaces/LanguageProps';
import { WelcomeInformationStyled } from '../style/Welcome';
import strings from '../utils/strings';

interface Props {
  language: LanguageProps;
}

export default function WelcomeInfomationComponent({ language }: Props) {
  return (
    <WelcomeInformationStyled>
      <p className="hello">{strings.hello[language.code]}</p>
      <p className="name">Lucas Luz</p>
      <p className="position">Desenvolvedor</p>
    </WelcomeInformationStyled>
  );
}
