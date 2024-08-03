import React, { ReactNode } from 'react';
import { ContactLinkStyled } from 'src/core/theme/Contact';

interface Props {
  color: string;
  link: string;
  title: string;
  target?: string;
  icon: ReactNode;
}

export default function ContactLink({ color, link, title, target, icon }: Props) {
  return (
    <ContactLinkStyled href={link} className={title.trim().replace(' ', '-')} target={target}>
      <div className='container-icon' style={{ backgroundColor: color }}>
        {icon}
      </div>
      <p className='title'>{title}</p>
    </ContactLinkStyled>
  );
}
