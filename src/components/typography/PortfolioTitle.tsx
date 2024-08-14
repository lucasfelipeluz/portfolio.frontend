import React from 'react';
import { TitleContainer } from '../styles/header';
import { PortfolioTitle as Title } from '../styles/typography';

export default function PortfolioTitle() {
  return (
    <TitleContainer>
      <Title variant='h5'>Portfólio</Title>
    </TitleContainer>
  );
}
