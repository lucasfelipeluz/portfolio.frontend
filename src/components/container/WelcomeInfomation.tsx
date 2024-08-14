import React from 'react';
import { LanguageProps } from 'src/core/types/languageContext';
import strings from 'src/utils/strings';
import { Typography } from '@mui/material';
import { WelcomeInformation } from '../styles/welcome';

interface Props {
  name: string;
  jobTitle: string;
  language: LanguageProps;
}

export default function WelcomeInfomationComponent({ jobTitle, name, language }: Props) {
  return (
    <WelcomeInformation>
      <Typography variant='body1'>{strings.hello[language.code]}</Typography>
      <Typography variant='h2'>{name}</Typography>
      <Typography variant='body1'>{jobTitle}</Typography>
    </WelcomeInformation>
  );
}
