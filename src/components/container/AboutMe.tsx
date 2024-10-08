import { Email, Telegram } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Github, Linkedin } from 'mdi-material-ui';
import { AboutMe } from 'src/types/AboutMe';
import ContactLink from '../link/Contact';

import { AboutMeContainer, AboutMeImgDev, ContactLinks } from '../styles/container';
import { SeparatorAboutMe } from '../styles/line';
import { AboutMeText } from '../styles/typography';
import { CvButton } from '../styles/link';

interface Props {
  aboutMe: AboutMe;
}

export default function AboutMeComponent({ aboutMe }: Props) {
  return (
    <AboutMeContainer>
      <AboutMeImgDev>
        <img src={aboutMe.pathProfilePic} alt='' />
      </AboutMeImgDev>
      <AboutMeText>
        <Typography>{aboutMe.text}</Typography>
        <CvButton href={aboutMe.pathCv} download='pdfdolucas.pdf' target='_blank' rel='noreferrer'>
          Baixar currículo
        </CvButton>
      </AboutMeText>
      <SeparatorAboutMe />
      <ContactLinks>
        <ContactLink
          icon={<Github />}
          color='#60aa54'
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
      </ContactLinks>
    </AboutMeContainer>
  );
}
