import React from 'react';
import LanguageProps from '../interfaces/LanguageProps';
import { WelcomeInformationStyled } from '../style/Welcome';
import strings from '../utils/strings';

interface Props {
  name: string;
  jobTitle: string;
  language: LanguageProps;
}

export default function WelcomeInfomationComponent({ jobTitle, name, language }: Props) {
  return (
    <WelcomeInformationStyled>
      <p className="hello">{strings.hello[language.code]}</p>
      <p className="name">{name}</p>
      <p className="position">{jobTitle}</p>
    </WelcomeInformationStyled>
  );
}
