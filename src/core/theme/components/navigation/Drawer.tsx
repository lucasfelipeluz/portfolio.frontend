import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const DrawerTheme: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
  styleOverrides: {
    root: {
      '&:hover, &:focus': {
        '*::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },
      },
    },
    paper: ({ theme }) => ({
      padding: 0,
      width: '300px',
      height: '100vh',
      borderRadius: 0,
      border: 0,
      borderRight: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.primary.dark,
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.customShadows[0],
      boxSizing: 'border-box',
    }),
  },
};

export default DrawerTheme;
