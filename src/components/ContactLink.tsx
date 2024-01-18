import React from 'react';
import slugify from 'slugify';
import { ContactLinkStyled } from '../style/Contact';

interface Props {
  codeFontAwesome: string;
  color: string;
  link: string;
  title: string;
  target?: string;
}

export default function ContactLinkComponent({
  codeFontAwesome,
  color,
  link,
  title,
  target,
}: Props) {
  return (
    <ContactLinkStyled href={link} className={slugify(title)} target={target}>
      <div className="container-icon" style={{ backgroundColor: color }}>
        <i className={codeFontAwesome}></i>
      </div>
      <p className="title">{title}</p>
    </ContactLinkStyled>
  );
}
