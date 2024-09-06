import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ToolbarTheme: Components<Omit<Theme, 'components'>>['MuiToolbar'] = {
  styleOverrides: {
    root: {
      padding: '0 !important',
    },
  },
};

export default ToolbarTheme;
