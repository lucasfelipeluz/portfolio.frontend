import React from 'react';
import { WelcomeInformationStyled } from 'src/core/theme/Welcome';
import { LanguageProps } from 'src/core/types/languageContext';
import strings from 'src/utils/strings';

interface Props {
  name: string;
  jobTitle: string;
  language: LanguageProps;
}

export default function WelcomeInfomationComponent({ jobTitle, name, language }: Props) {
  return (
    <WelcomeInformationStyled>
      <p className='hello'>{strings.hello[language.code]}</p>
      <p className='name'>{name}</p>
      <p className='position'>{jobTitle}</p>
    </WelcomeInformationStyled>
  );
}
