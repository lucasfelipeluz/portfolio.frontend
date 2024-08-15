import React from 'react';

import { Box, Typography, styled } from '@mui/material';

const Section = styled(Box)(() => ({
  height: '100vh',
  width: '100%',
  backgroundColor: '#333',
}));

const SectionTitle = styled(Typography)(() => ({
  padding: '15px',
  color: 'white',
  textAlign: 'center',
  fontWeight: '400',
}));

const SectionContent = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '15px',
  marginTop: '35px',
  justifyItems: 'center',

  '@media (min-width: 725px)': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@media (min-width: 992px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));

interface Props {
  title?: string;
  children: React.ReactNode;
}

function SectionHomeComponent({ title, children }: Props) {
  return (
    <Section>
      {title && <SectionTitle variant='h5'>{title}</SectionTitle>}
      <SectionContent>{children}</SectionContent>
    </Section>
  );
}

export default SectionHomeComponent;
