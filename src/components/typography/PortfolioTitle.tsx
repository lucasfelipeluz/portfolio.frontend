import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const TitleContainer = styled(Box)(() => ({
  color: '#f1f2f6',
  height: '100%',
  display: 'grid',
  placeItems: 'center',
  fontSize: '28px',
  userSelect: 'none',

  '@media (min-width: 992px)': {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '28px',
    userSelect: 'none',
    width: '100%',
  },
}));

const Title = styled(Typography)(() => ({
  '@media (min-width: 992px)': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));

export default function PortfolioTitle() {
  return (
    <TitleContainer>
      <Title variant='h5'>Portfólio</Title>
    </TitleContainer>
  );
}
