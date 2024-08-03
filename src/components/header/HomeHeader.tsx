import React, { useState } from 'react';

import { GradientBar } from 'src/core/theme/globals';
import { HeaderStyle, NavBar, NavButton, TitlePortfolio } from 'src/core/theme/Header';

import { HeaderProps } from 'src/types/Components';
import MenuMobileComponent from './MenuMobile';
import NavItensComponent from './NavItens';

export default function Header({ data, titleHeader }: HeaderProps) {
  const [toggleMenuMobile, setToggleMenuMobile] = useState<boolean>(false);

  const handleToggleMenuMobile = () => {
    setToggleMenuMobile(!toggleMenuMobile);
  };

  return (
    <HeaderStyle>
      <NavBar className='container-fluid container-lg'>
        <NavButton onClick={handleToggleMenuMobile}>
          <div className='burger' data-burger='inativo'>
            <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`} />
            <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`} />
            <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`} />
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
