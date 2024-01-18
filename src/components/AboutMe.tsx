import React from 'react';
import { AboutMeCard } from '../style/Contact';
import ContactLinkComponent from './ContactLink';

export default function AboutMeComponent() {
  return (
    <AboutMeCard>
      <div className="img-container">
        <img src="https://avatars.githubusercontent.com/u/65639478?v=4" alt="" />
      </div>
      <p className="text-container">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta consequatur explicabo
        cumque nobis mollitia, iure necessitatibus quasi autem obcaecati provident alias veniam
        laboriosam corporis consequuntur assumenda ipsa placeat est sint! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Autem dolore, repellat ea consequatur, voluptatem incidunt
        commodi rem quos eaque illo quidem quis, temporibus sapiente cum harum adipisci error
        impedit accusamus! Repudiandae deserunt velit saepe eveniet! Qui aliquam adipisci commodi
        tempora impedit libero rerum at sequi sunt maiores. Error, reprehenderit! Error impedit
        eius, quas voluptatum labore odit totam accusamus alias ipsum. Velit, necessitatibus eveniet
        adipisci ad natus quis aperiam reiciendis dignissimos expedita voluptatibus corporis a
        inventore voluptatem animi? Eos eaque iste ratione nam dolorum, tempore suscipit unde, fugit
        quaerat illum cupiditate?
      </p>
      <div className="line-separator"></div>
      <div className="contact-links">
        <p className="title-contact-links">Contatos</p>
        <ContactLinkComponent
          codeFontAwesome="fab fa-github"
          color="#71CF62"
          link="https://github.com/lucasfelipeluz"
          title="Github"
          target="_blank"
        />
        <ContactLinkComponent
          codeFontAwesome="fab fa-linkedin"
          color="#0077B5"
          link="https://www.linkedin.com/in/lucasfelipeluz/"
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
          link="https://t.me/lucasfelipeluz"
          title="Telegram"
          target="_blank"
        />
      </div>
    </AboutMeCard>
  );
}
