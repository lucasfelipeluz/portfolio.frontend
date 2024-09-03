import React from 'react';
import { ArrowBack } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import MenuMobileList from 'src/components/list/MenuMobile';
import { NavItensProps } from 'src/types/Components';
import { MenuContainer, MenuMobile } from '../styles/header';

interface Props {
  ativo: boolean;
  handleCloseMenu: () => void;
  data: NavItensProps[];
}

export default function MenuMobileComponent({ ativo, handleCloseMenu, data }: Props) {
  return (
    <MenuMobile className={`menu-mobile ${ativo ? 'ativo' : ''}`}>
      <MenuContainer>
        <Box sx={{ position: 'absolute', top: '30px', left: '10px' }}>
          <IconButton onClick={handleCloseMenu}>
            <ArrowBack sx={{ fontSize: '30px' }} />
          </IconButton>
        </Box>
        <MenuMobileList itens={data} handleCloseMenu={handleCloseMenu} />
      </MenuContainer>
    </MenuMobile>
  );
}
