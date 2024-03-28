import React from 'react';
import { MobileGradientBar } from '../style/Globals';
import { MenuContainer, MenuMobile, NavItensMobile } from '../style/Header';
import { NavItensProps } from '../types/Components';

interface Props {
  ativo: boolean;
  handleAtivo: Function | any;
  data: NavItensProps[];
}

export default function MenuMobileComponent({ ativo, handleAtivo, data }: Props) {
  return (
    <MenuMobile className={`menu-mobile ${ativo ? 'ativo' : ''}`}>
      <MenuContainer className="menu-container">
        <NavItensMobile className="nav-itens-mobile">
          {data.map((item) => {
            return (
              <li className="nav-item" onClick={handleAtivo}>
                <a href={`#${item.classNames}`}>{item.name}</a>
              </li>
            );
          })}
        </NavItensMobile>

        <MobileGradientBar className="barra-gradiente-mobile"></MobileGradientBar>
      </MenuContainer>
      <div onClick={handleAtivo} className="sair-menu"></div>
    </MenuMobile>
  );
}
