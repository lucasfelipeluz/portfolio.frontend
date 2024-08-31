import { PaletteOptions } from '@mui/material';
import { black, blue, cyan, grey, purple, red, violate, white, yellow } from './colors';

const paletteGlobal: PaletteOptions = {
  grey: {
    100: grey[100],
    200: grey[200],
    300: grey[300],
    400: grey[400],
    500: grey[500],
    600: grey[600],
    700: grey[700],
    800: grey[800],
    900: grey[900],
  },
  primary: {
    main: blue[500],
    dark: blue[700],
    light: blue[300],
    contrastText: black[50],
  },
  secondary: {
    main: cyan[500],
    dark: cyan[700],
    light: cyan[300],
    contrastText: black[50],
  },
  info: {
    main: blue[500],
    light: blue[300],
    dark: blue[700],
    contrastText: black[50],
  },
  success: {
    main: cyan[500],
    light: cyan[300],
    dark: cyan[700],
    contrastText: black[50],
  },
  error: {
    main: red[500],
    light: red[300],
    dark: red[700],
    contrastText: black[50],
  },
  warning: {
    main: yellow[500],
    light: yellow[300],
    dark: yellow[700],
    contrastText: black[50],
  },
  divider: grey[500],
};

export const paletteBlack: PaletteOptions = {
  background: { default: black[900], paper: black[800] },
  mode: 'dark',
  text: {
    primary: white[50],
    secondary: white[100],
    disabled: white[200],
  },
  ...paletteGlobal,
};

export const paletteWhite: PaletteOptions = {
  background: { default: white[50], paper: white[300] },
  mode: 'light',
  text: {
    primary: black[900],
    secondary: black[800],
    disabled: black[700],
  },
  ...paletteGlobal,
};
