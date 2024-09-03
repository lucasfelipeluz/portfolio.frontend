import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const CollapseTheme: Components<Omit<Theme, 'components'>>['MuiCollapse'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0, 1),

      '& .MuiList-root': {
        padding: 0,
        margin: theme.spacing(1, 0),
      },
    }),
  },
};

export default CollapseTheme;
