import React, { useState } from 'react';
import { NavItensProps } from 'src/types/Components';
import MenuList from 'src/components/list/Menu';
import PortfolioTitle from 'src/components/typography/PortfolioTitle';
import strings from 'src/utils/strings';
import { useLanguage } from 'src/core/context/languageContext';
import MenuMobileComponent from './MenuMobile';
import NavButtonComponent from './NavButton';
import { Header, NavBar } from '../styles/header';
import { MenuLine } from '../styles/line';

export default function HeaderComponent() {
  const { language } = useLanguage();

  const [toggleMenuMobile, setToggleMenuMobile] = useState<boolean>(false);

  const handleToggleMenuMobile = () => {
    setToggleMenuMobile(!toggleMenuMobile);
  };

  const closeMenuMobile = () => {
    setToggleMenuMobile(false);
  };

  const data: NavItensProps[] = [
    // { name: strings.projects[language.code], classNames: strings.classNames.projects },
    { name: strings.skills[language.code], classNames: strings.classNames.skills },
    { name: strings.contact[language.code], classNames: strings.classNames.contact },
  ];

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
