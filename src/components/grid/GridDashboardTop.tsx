import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {
  Google,
  HeartBroken,
  List,
  People,
  Phone,
  Psychology,
  RateReview,
  Work,
} from '@mui/icons-material';
import SimpleDashboardCard from '../card/SimpleDashboardCard';

const cardsData = [
  {
    id: 1,
    title: 'Total',
    value: 190,
    isUp: true,
    icon: <People sx={{ fontSize: '20px' }} color='primary' />,
  },
  {
    id: 2,
    title: 'Projetos',
    value: 35,
    isUp: false,
    icon: <Work sx={{ fontSize: '20px' }} color='primary' />,
  },
  {
    id: 3,
    title: 'Habilidades',
    value: 20,
    isUp: true,
    icon: <Psychology sx={{ fontSize: '20px' }} color='primary' />,
  },
  {
    id: 4,
    title: 'Contatos',
    value: 12,
    isUp: true,
    icon: <Phone sx={{ fontSize: '20px' }} color='primary' />,
  },
];

export default function GridDashboardTop() {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      {cardsData.map((item) => (
        <SimpleDashboardCard
          icon={item.icon}
          viewReports={{ id: item.id, title: item.title, value: item.value }}
        />
      ))}
    </Grid>
  );
}
