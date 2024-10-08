import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInputTheme: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  styleOverrides: {
    root: {},
    input: {
      padding: 0,
    },
    sizeSmall: ({ theme }) => ({
      paddingLeft: theme.spacing(1.25),
    }),
  },
};

export default FilledInputTheme;
