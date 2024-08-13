import React from 'react';
import { NavItensProps } from 'src/types/Components';
import { Box, styled } from '@mui/material';
import MenuMobileLine from 'src/components/line/MenuMobile';
import MenuMobileList from 'src/components/list/MenuMobile';

const MenuMobile = styled(Box)(() => ({
  position: 'fixed',
  top: '-800px',
  zIndex: 1,
  width: '100%',
  height: '100vh',
  transition: '0.3s',
  display: 'grid',
  gridTemplateRows: '60% 40%',
  gap: 0,

  '@media (min-width: 992px)': {
    display: 'none',
  },

  '&.ativo': {
    top: '0px',
  },
}));

const MenuContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
}));

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
