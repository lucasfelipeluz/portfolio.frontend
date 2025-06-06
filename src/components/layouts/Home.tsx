import React, { useState } from 'react';
import MenuList from 'src/components/list/Menu';
import PortfolioTitle from 'src/components/typography/PortfolioTitle';
import { useLanguage } from 'src/core/context/languageContext';
import { NavItensProps } from 'src/types/Components';
import strings from 'src/utils/strings';
import FooterComponent from '../container/Footer';
import MenuMobileComponent from '../header/MenuMobile';
import NavButtonComponent from '../header/NavButton';
import { Header as HeaderStyle, NavBar } from '../styles/header';

interface Props {
  children: React.ReactNode;
  showFooter: boolean;
}

export default function HomeLayout({ children, showFooter }: Props) {
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
    <>
      <HeaderStyle>
        <NavBar>
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
      </HeaderStyle>
      {children}
      {showFooter && <FooterComponent />}
    </>
  );
}
