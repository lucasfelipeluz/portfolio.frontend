import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListTheme: Components<Omit<Theme, 'components'>>['MuiList'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1, 0),
    }),
  },
};

export default ListTheme;
