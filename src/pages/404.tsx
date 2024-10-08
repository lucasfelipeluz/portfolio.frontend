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
          <Typography variant='h3'>Ops! Page not found.</Typography>
          <Button href='/' sx={{ marginTop: '30px' }} variant='outlined'>
            Back to home page
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default notFound;
