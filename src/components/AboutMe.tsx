import React from 'react';
import { AboutMeCard } from '../style/Contact';
import ContactLinkComponent from './ContactLink';
import { AboutMeProps } from '../types/ServicesProps';
import strings from '../utils/strings';

interface Props {
  aboutMe: AboutMeProps;
  langCode: string;
}

export default function AboutMeComponent({ aboutMe, langCode }: Props) {
  return (
    <AboutMeCard>
      <div className="img-container">
        <img src="https://avatars.githubusercontent.com/u/65639478?v=4" alt="" />
      </div>
      <p className="text-container">{aboutMe.text}</p>
      <div className="line-separator"></div>
      <div className="contact-links">
        <p className="title-contact-links">{strings.contact[langCode]}</p>
        <ContactLinkComponent
          codeFontAwesome="fab fa-github"
          color="#71CF62"
          link={aboutMe.githubLink}
          title="Github"
          target="_blank"
        />
        <ContactLinkComponent
          codeFontAwesome="fab fa-linkedin"
          color="#0077B5"
          link={aboutMe.linkedinLink}
          title="Linkedin"
          target="_blank"
        />
        <ContactLinkComponent
          codeFontAwesome="fas fa-envelope"
          color="#D94D49"
          link="mailto:lucasfelipeluz.dev@gmail.com"
          title="Email"
          target="_blank"
        />
        <ContactLinkComponent
          codeFontAwesome="fab fa-telegram"
          color="#27A6E6"
          link={aboutMe.telegramLink}
          title="Telegram"
          target="_blank"
        />
      </div>
    </AboutMeCard>
  );
}
