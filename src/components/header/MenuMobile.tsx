import React from 'react';
import { NavItensProps } from 'src/types/Components';
import MenuMobileList from 'src/components/list/MenuMobile';
import { MenuContainer, MenuMobile } from '../styles/header';
import { MenuMobileLine } from '../styles/line';

interface Props {
  ativo: boolean;
  handleCloseMenu: () => void;
  data: NavItensProps[];
}

export default function MenuMobileComponent({ ativo, handleCloseMenu, data }: Props) {
  return (
    <MenuMobile className={`menu-mobile ${ativo ? 'ativo' : ''}`}>
      <MenuContainer>
        <MenuMobileList itens={data} handleCloseMenu={handleCloseMenu} />

        <MenuMobileLine />
      </MenuContainer>
      <div onClick={handleCloseMenu} className='sair-menu' />
    </MenuMobile>
  );
}
