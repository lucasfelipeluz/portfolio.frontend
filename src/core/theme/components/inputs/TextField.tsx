import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const TextFieldTheme: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: theme.customShadows[1],
    }),
  },
};

export default TextFieldTheme;
