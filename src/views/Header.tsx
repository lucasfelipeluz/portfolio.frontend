import React, { useState } from 'react';
import MenuMobileComponent from '../components/MenuMobile';
import NavItensComponent from '../components/NavItens';
import { GradientBar } from '../style/Globals';
import { HeaderStyle, NavBar, NavButton, TitlePortfolio } from '../style/Header';
import { HeaderProps } from '../types/Components';

export default function Header({ data, titleHeader }: HeaderProps) {
  const [toggleMenuMobile, setToggleMenuMobile] = useState<boolean>(false);

  const handleToggleMenuMobile = () => {
    setToggleMenuMobile(!toggleMenuMobile);
  };

  return (
    <HeaderStyle>
      <NavBar className="container-fluid container-lg">
        <NavButton onClick={handleToggleMenuMobile}>
          <div className="burger" data-burger="inativo">
            <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`}></div>
            <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`}></div>
            <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`}></div>
          </div>
        </NavButton>
        <TitlePortfolio>
          <p>{titleHeader}</p>
        </TitlePortfolio>
        <NavItensComponent data={data} />
        <MenuMobileComponent
          ativo={toggleMenuMobile}
          handleAtivo={handleToggleMenuMobile}
          data={data}
        />
      </NavBar>
      <GradientBar />
    </HeaderStyle>
  );
}
