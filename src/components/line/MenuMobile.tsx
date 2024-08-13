import { Box } from '@mui/material';
import React from 'react';

export default function MenuMobileLine() {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '2px',
        backgroundColor: 'primary.light',
        display: 'grid',
        placeItems: 'center',
      }}
    />
  );
}
