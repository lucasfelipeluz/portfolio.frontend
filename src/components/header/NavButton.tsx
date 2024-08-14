import React from 'react';
import { BurgerButton, NavButton } from '../styles/header';

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
