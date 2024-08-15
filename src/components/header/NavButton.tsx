import React from 'react';
import { Box } from '@mui/material';
import { BurgerButton, NavButton } from '../styles/header';

interface Props {
  toggleMenuMobile: boolean;
  handleToggleMenuMobile: () => void;
}

export default function NavButtonComponent({ toggleMenuMobile, handleToggleMenuMobile }: Props) {
  return (
    <NavButton onClick={handleToggleMenuMobile}>
      <BurgerButton>
        <Box className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`} />
        <Box className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`} />
        <Box className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`} />
      </BurgerButton>
    </NavButton>
  );
}
