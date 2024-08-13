import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import { NavItensProps } from 'src/types/Components';
import Menu from 'src/components/line/Menu';
import MenuList from 'src/components/list/Menu';
import PortfolioTitle from 'src/components/typography/PortfolioTitle';
import MenuMobileComponent from './MenuMobile';
import NavButtonComponent from './NavButton';

const Header = styled('header')(({ theme }) => ({
  backgroundColor: '#181f24',
  height: '60px',
  position: 'relative',

  '@media (min-width: 992px)': {
    color: theme.palette.text.primary,
    height: '55px',
  },
}));

const NavBar = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'grid',
  placeItems: 'center',
  position: 'relative',
  zIndex: 999,

  '@media (min-width: 992px)': {
    height: '53px',
    display: 'grid',
    gridTemplateColumns: '2fr 3fr',
    position: 'relative',
    zIndex: 5,
  },
}));

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
      <Menu />
    </Header>
  );
}
