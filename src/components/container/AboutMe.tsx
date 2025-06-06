import { Email, Telegram } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { Github, Linkedin } from 'mdi-material-ui';
import { getAboutMe } from 'src/store';
import ContactLink from '../link/Contact';
import { AboutMeContainer, AboutMeImgDev, ContactLinks } from '../styles/container';
import { SeparatorAboutMe } from '../styles/line';
import { CvButton } from '../styles/link';
import { AboutMeText } from '../styles/typography';

export default function AboutMeComponent() {
  const aboutMe = getAboutMe();

  return (
    <AboutMeContainer>
      <AboutMeImgDev>
        <img src='https://avatars.githubusercontent.com/u/65639478?v=4' alt='' />
      </AboutMeImgDev>
      <AboutMeText>
        <Typography>{aboutMe.text}</Typography>
        <Stack gap={1}>
          <CvButton href={aboutMe.pathCv} target='_blank' rel='noreferrer'>
            Baixar currículo
          </CvButton>
        </Stack>
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
