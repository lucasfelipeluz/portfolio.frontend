import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

function notFound() {
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
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='h3'>Ops! We&apos;re in maintenance.</Typography>
          <Typography variant='body1'>Portfolio is not available at the moment.</Typography>
          <Button sx={{ marginTop: '30px' }} variant='outlined' href='/'>
            Go back to home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default notFound;
