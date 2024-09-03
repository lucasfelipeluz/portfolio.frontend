import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import GridDashboardTop from 'src/components/grid/GridDashboardTop';
import AdminHeader from 'src/components/header/AdminHeader';
import AdminSidebar from 'src/components/container/AdminSidebar';
import AdminLayout from 'src/components/layouts/AdminLayout';

export default function View() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <AdminLayout>
      <Container>
        <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
          <Grid item xs={12}>
            <Typography variant='h5' fontWeight={600} marginBottom={2}>
              Quantidade de visualizações ontem
            </Typography>
            <GridDashboardTop />
          </Grid>
        </Grid>
      </Container>
    </AdminLayout>
  );
}
