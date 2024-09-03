import React from 'react';
import { useRouter } from 'next/router';
import { TitleContainer } from '../styles/header';
import { PortfolioTitle as Title } from '../styles/typography';

export default function PortfolioTitle() {
  const router = useRouter();

  return (
    <TitleContainer
      onClick={() => {
        router.push('/');
      }}
    >
      <Title fontSize='24px'>Portfólio</Title>
    </TitleContainer>
  );
}
