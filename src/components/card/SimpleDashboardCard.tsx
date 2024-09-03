import React from 'react';
import { OpenInNew } from '@mui/icons-material';
import { Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import { ViewReports } from 'src/types/Reports';

interface Props {
  viewReports: ViewReports;
  icon: JSX.Element;
}

export default function SimpleDashboardCard({ viewReports, icon }: Props) {
  return (
    <Grid item xs={12} sm={6} xl={3}>
      <Stack
        p={2.25}
        pl={2.5}
        direction='column'
        component={Paper}
        gap={1.5}
        width={1}
        height={130}
      >
        <Stack
          sx={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <Stack gap={1} flexDirection='row' alignItems='center'>
            {icon}
            <Typography variant='subtitle2' color='text.secondary'>
              {viewReports.title}
            </Typography>
          </Stack>

          <IconButton
            aria-label='menu'
            size='small'
            sx={{ color: 'neutral.light', fontSize: 'h5.fontSize' }}
          >
            <OpenInNew
              sx={{ fontSize: '15px' }}
              titleAccess={`Abrir ${viewReports.title} em nova aba`}
            />
          </IconButton>
        </Stack>

        <Stack alignItems='center' gap={0.875}>
          <Typography variant='h3' fontWeight={600} letterSpacing={1}>
            {viewReports.value}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}
