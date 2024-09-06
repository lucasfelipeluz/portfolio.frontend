import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const PaperTheme: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3.5),
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.customShadows[0],
      borderRadius: theme.shape.borderRadius * 3,

      '&.MuiMenu-paper': {
        padding: theme.spacing(1),
      },
    }),
  },
};

export default PaperTheme;
