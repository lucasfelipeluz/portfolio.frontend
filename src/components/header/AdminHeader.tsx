import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function AdminHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Stack alignItems='center' justifyContent='space-between' mb={{ xs: 5, lg: 1 }}>
      <Stack spacing={2} alignItems='center'>
        <Typography variant='h5' fontWeight={600} letterSpacing={1}>
          Análises
        </Typography>
      </Stack>
    </Stack>
  );
}
