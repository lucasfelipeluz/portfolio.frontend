import React from 'react';
import { useSettings } from 'src/core/context/settingsContext';
import { TitleContainer } from '../styles/header';
import { PortfolioTitle as Title } from '../styles/typography';

export default function PortfolioTitle() {
  const { layoutMode } = useSettings();

  return (
    <TitleContainer>
      {layoutMode === 'dark' ? (
        <img
          src='/images/logo/portfolio-dark.png'
          alt=''
          style={{
            height: '25px',
            // width: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        />
      ) : (
        <img
          src='/images/logo/portfolio-light.png'
          alt=''
          style={{
            height: '25px',
            // width: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        />
      )}
      {/* <Title fontSize='24px'>Portfólio</Title> */}
    </TitleContainer>
  );
}
