import React, { useState } from 'react';
import { NavItensProps } from 'src/types/Components';
import MenuList from 'src/components/list/Menu';
import PortfolioTitle from 'src/components/typography/PortfolioTitle';
import MenuMobileComponent from './MenuMobile';
import NavButtonComponent from './NavButton';
import { Header, NavBar } from '../styles/header';
import { MenuLine } from '../styles/line';

interface Props {
  data: NavItensProps[];
}

export default function HeaderComponent({ data }: Props) {
  const [toggleMenuMobile, setToggleMenuMobile] = useState<boolean>(false);

  const handleToggleMenuMobile = () => {
    setToggleMenuMobile(!toggleMenuMobile);
  };

  const closeMenuMobile = () => {
    setToggleMenuMobile(false);
  };

  return (
    <Header>
      <NavBar className='container-fluid container-lg'>
        <NavButtonComponent
          toggleMenuMobile={toggleMenuMobile}
          handleToggleMenuMobile={handleToggleMenuMobile}
        />
        <PortfolioTitle />
        <MenuList data={data} />
        <MenuMobileComponent
          ativo={toggleMenuMobile}
          handleCloseMenu={closeMenuMobile}
          data={data}
        />
      </NavBar>
      <MenuLine />
    </Header>
  );
}
