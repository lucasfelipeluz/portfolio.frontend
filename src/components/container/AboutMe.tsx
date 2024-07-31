import React from 'react';
import strings from 'src/utils/strings';
import { LanguageCode } from 'src/core/types/languageContext';
import { AboutMe } from 'src/types/AboutMe';
import { AboutMeCard } from 'src/core/theme/Contact';
import { Github, Linkedin } from 'mdi-material-ui';
import { Email, Telegram } from '@mui/icons-material';
import ContactLink from '../link/Contact';

interface Props {
  aboutMe: AboutMe;
  langCode: LanguageCode;
}

export default function AboutMeComponent({ aboutMe, langCode }: Props) {
  return (
    <AboutMeCard>
      <div className='img-container'>
        <img src='https://avatars.githubusercontent.com/u/65639478?v=4' alt='' />
      </div>
      <p className='text-container'>{aboutMe.text}</p>
      <div className='line-separator' />
      <div className='contact-links'>
        <p className='title-contact-links'>{strings.contact[langCode]}</p>
        <ContactLink
          icon={<Github />}
          color='#71CF62'
          link={aboutMe.githubLink}
          title='Github'
          target='_blank'
        />
        <ContactLink
          icon={<Linkedin />}
          color='#0077B5'
          link={aboutMe.linkedinLink}
          title='Linkedin'
          target='_blank'
        />
        <ContactLink
          icon={<Email />}
          color='#D94D49'
          link='mailto:lucasfelipeluz.dev@gmail.com'
          title='Email'
          target='_blank'
        />
        <ContactLink
          icon={<Telegram />}
          color='#27A6E6'
          link={aboutMe.telegramLink}
          title='Telegram'
          target='_blank'
        />
      </div>
    </AboutMeCard>
  );
}
