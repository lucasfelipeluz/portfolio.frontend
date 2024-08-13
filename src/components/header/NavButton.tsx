import React from 'react';
import { Box, styled } from '@mui/material';

const NavButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: 999,
  top: 0,
  left: 0,
  height: '100%',
  width: '50px',
  color: theme.palette.text.primary,
  fontSize: '35px',
  display: 'grid',
  placeItems: 'center',

  '@media (min-width: 992px)': {
    display: 'none',
  },
}));

const BurgerButton = styled(Box)(() => ({
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '.burger-button': {
    height: '3px',
    width: '35px',
    borderRadius: '20px',
    backgroundColor: 'white',
    transition: '0.3s',

    '&.ativo': {
      '&:nth-child(1)': {
        transform: 'rotate(40deg) translate(9px, 9px)',
      },
      '&:nth-child(2)': {
        opacity: 0,
      },
      '&:nth-child(3)': {
        transform: 'rotate(-40deg) translate(9px, -9px)',
      },
    },
  },
}));

interface Props {
  toggleMenuMobile: boolean;
  handleToggleMenuMobile: () => void;
}

export default function NavButtonComponent({ toggleMenuMobile, handleToggleMenuMobile }: Props) {
  return (
    <NavButton onClick={handleToggleMenuMobile}>
      <BurgerButton>
        <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`} />
        <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`} />
        <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`} />
      </BurgerButton>
    </NavButton>
  );
}
