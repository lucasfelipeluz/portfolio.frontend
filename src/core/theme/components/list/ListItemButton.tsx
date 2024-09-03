import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListItemButtonTheme: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      '&:hover': {
        backgroundColor: theme.palette.info.dark,
      },
    }),
  },
};

export default ListItemButtonTheme;
