import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import { blue, dark } from '../../colors';

const ButtonTheme: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius,
      textTransform: 'initial',
      letterSpacing: 0.5,
      fontWeight: 600,
      transition: '0.3s',
    }),
    contained: ({ theme }) => ({
      '&.Mui-disabled': {
        color: theme.palette.text.secondary,
        background: theme.palette.text.disabled,
      },
    }),
    outlined: ({ theme }) => ({
      color: theme.palette.primary.main,
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.text.disabled,
      },
    }),
    text: ({ theme }) => ({
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
      },
    }),
    containedPrimary: ({ theme }) => ({
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.text.primary,

      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    }),
    containedSecondary: ({ theme }) => ({
      background: theme.palette.info.dark,
      '&:hover': { background: theme.palette.info.dark },
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(1.25, 2.25),
      fontSize: theme.typography.button.fontSize,
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(1, 1.5),
      fontSize: theme.typography.subtitle2.fontSize,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.875, 1.15),
      fontSize: theme.typography.caption.fontSize,
    }),
  },
};

export default ButtonTheme;
