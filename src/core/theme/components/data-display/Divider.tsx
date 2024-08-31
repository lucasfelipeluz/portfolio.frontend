import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const DividerTheme: Components<Omit<Theme, 'components'>>['MuiDivider'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: theme.spacing(2, 0),
      backgroundColor: theme.palette.background.default,

      '&.MuiDivider-withChildren': {
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
        '&::before': {
          backgroundColor: theme.palette.primary.main,
        },
        '&::after': {
          backgroundColor: theme.palette.primary.dark,
        },
      },
    }),
  },
};

export default DividerTheme;
