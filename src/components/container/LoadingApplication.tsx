import { Box, CircularProgress, Container, Typography } from '@mui/material';
import React from 'react';
import { useSettings } from 'src/core/context/settingsContext';

export default function LoadApplicationContainer() {
  const { theme } = useSettings();

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',

          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          <svg width={0} height={0}>
            <defs>
              <linearGradient id='my_gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' stopColor={theme.palette.primary.main} />
                <stop offset='100%' stopColor={theme.palette.secondary.dark} />
              </linearGradient>
            </defs>
          </svg>
        </Box>
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
        <Typography>Carregando</Typography>
      </Box>
    </Container>
  );
}
