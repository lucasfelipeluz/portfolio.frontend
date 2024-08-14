import { Box, Typography } from '@mui/material';
import React from 'react';
import { FooterSection } from '../styles/section';

export default function FooterComponent() {
  return (
    <FooterSection>
      <Box className='container'>
        <Typography className='copyright'>Montado pixel a pixel por Lucas Luz 💡 </Typography>
      </Box>
    </FooterSection>
  );
}
