import React from 'react';
import { MobileGradientBar } from '../style/Globals';
import { MenuContainer, MenuMobile, NavItensMobile } from '../style/Header';
import LanguageProps from '../interfaces/LanguageProps';
import strings from '../utils/strings';

interface Props {
  ativo: boolean;
  handleAtivo: Function | any;
  language: LanguageProps;
}

export default function MenuMobileComponent({ ativo, handleAtivo, language }: Props) {
  return (
    <MenuMobile className={`menu-mobile ${ativo ? 'ativo' : ''}`}>
      <MenuContainer className="menu-container">
        <NavItensMobile className="nav-itens-mobile">
          <li className="nav-item" onClick={handleAtivo}>
            <a href="#projects">{strings.projects[language.code]}</a>
          </li>
          {/* <li className="nav-item" onClick={handleAtivo}>
            <a href="#conhecimentos">{strings.skills[language.code]}</a>
          </li> */}
          <li className="nav-item" onClick={handleAtivo}>
            <a href="#about-me">{strings.aboutMe[language.code]}</a>
          </li>
          <li className="nav-item" onClick={handleAtivo}>
            <a href="#contact">{strings.contact[language.code]}</a>
          </li>
        </NavItensMobile>

        <MobileGradientBar className="barra-gradiente-mobile"></MobileGradientBar>
      </MenuContainer>
      <div onClick={handleAtivo} className="sair-menu"></div>
    </MenuMobile>
  );
}
