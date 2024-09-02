import { Google } from '@mui/icons-material';
import { Container } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import LogoImg from 'assets/images/Logo.png';
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
