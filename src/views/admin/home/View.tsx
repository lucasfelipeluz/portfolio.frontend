import React from 'react';
import { Grid, Typography } from '@mui/material';
import GridDashboardTop from 'src/components/grid/GridDashboardTop';

export default function View() {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75, height: '100vh' }}>
      <Grid item xs={12}>
        <Typography variant='h5' fontWeight={600} marginBottom={2}>
          Quantidade de visualizações ontem
        </Typography>
        <GridDashboardTop />
      </Grid>
      {/* <Grid item xs={12} xl={4}>
        <GridDashboardTop />
      </Grid> */}
    </Grid>
  );
}
