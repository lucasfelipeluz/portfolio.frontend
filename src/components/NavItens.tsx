import React from 'react';
import { NavItens } from '../style/Header';
import LanguageProps from '../interfaces/LanguageProps';
import strings from '../utils/strings';

interface Props {
  language: LanguageProps;
}

export default function NavItensComponent({ language }: Props) {
  return (
    <NavItens>
      <li className="nav-item projetos">
        <a href="#projects">{strings.projects[language.code]}</a>
      </li>
      {/* <li className="nav-item conhecimentos">
        <a href="#conhecimentos">{strings.skills[language.code]}</a>
      </li> */}
      <li className="nav-item sobre-mim">
        <a href="#about-me">{strings.aboutMe[language.code]}</a>
      </li>
      <li className="nav-item contato">
        <a href="#contact">{strings.contact[language.code]}</a>
      </li>
    </NavItens>
  );
}
