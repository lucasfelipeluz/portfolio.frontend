import React from 'react';
import { MobileGradientBar } from 'src/core/theme/globals';
import { MenuContainer, MenuMobile, NavItensMobile } from 'src/core/theme/Header';
import { NavItensProps } from 'src/types/Components';

interface Props {
  ativo: boolean;
  handleAtivo: () => void;
  data: NavItensProps[];
}

export default function MenuMobileComponent({ ativo, handleAtivo, data }: Props) {
  return (
    <MenuMobile className={`menu-mobile ${ativo ? 'ativo' : ''}`}>
      <MenuContainer className='menu-container'>
        <NavItensMobile className='nav-itens-mobile'>
          {data.map((item, index) => (
            <li className='nav-item' onClick={handleAtivo} key={index as number}>
              <a href={`#${item.classNames}`}>{item.name}</a>
            </li>
          ))}
        </NavItensMobile>

        <MobileGradientBar className='barra-gradiente-mobile' />
      </MenuContainer>
      <div onClick={handleAtivo} className='sair-menu' />
    </MenuMobile>
  );
}
