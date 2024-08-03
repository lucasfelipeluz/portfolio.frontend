import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { Typography } from '@mui/material';

function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home');
  }, []);

  return <Typography variant='body1'>Carregando...</Typography>;
}

export default Index;
