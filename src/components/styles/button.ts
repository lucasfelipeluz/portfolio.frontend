import { Button, IconButton, styled } from '@mui/material';
import { white } from 'src/core/theme/colors';

export const ThemeModeIconButton = styled(IconButton)(({ theme }) => ({
  transition: '0.3s',
  backgroundColor: 'none',

  '.icon': {
    color: theme.palette.text.primary,
    transition: '0.3s',
  },

  '&:hover .icon': {
    color: theme.palette.primary.main,
  },
}));
