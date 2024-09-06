import { Components, Theme } from '@mui/material';

const TypographyTheme: Components<Omit<Theme, 'components'>>['MuiTypography'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
    }),
  },
};

export default TypographyTheme;
