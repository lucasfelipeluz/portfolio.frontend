import { Box, Typography } from '@mui/material';
import React from 'react';
import { WbIncandescent } from '@mui/icons-material';
import { useSettings } from 'src/core/context/settingsContext';
import { FooterSection } from '../styles/section';

export default function FooterComponent() {
  const { toggleLayoutMode } = useSettings();

  return (
    <FooterSection>
      <Box className='container'>
        <Typography className='copyright'>
          Projetado, desenvolvido, testado e implantado por Lucas Luz
        </Typography>
        {/* <Typography className='copyright'>Montado pixel a pixel por Lucas Luz</Typography> */}
        <WbIncandescent
          className='icon'
          onClick={toggleLayoutMode}
          sx={{
            fontSize: '20px',
            rotate: '180deg',
            color: 'text.disabled',
          }}
        />
      </Box>
    </FooterSection>
  );
}
