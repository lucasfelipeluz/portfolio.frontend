import { PaletteOptions } from '@mui/material';
import { blue, cyan, dark, darkGunmental, grey, red, white, yellow } from './colors';

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
  divider: grey[500],
};

export const paletteBlack: PaletteOptions = {
  background: { default: darkGunmental[900], paper: dark[900] },
  mode: 'dark',
  text: {
    primary: white[50],
    secondary: white[400],
    disabled: grey[500],
  },
  primary: {
    main: blue[500],
    dark: blue[700],
    light: blue[300],
    contrastText: darkGunmental[50],
  },
  secondary: {
    main: cyan[500],
    dark: cyan[700],
    light: cyan[300],
    contrastText: darkGunmental[50],
  },
  info: {
    main: blue[500],
    light: blue[300],
    dark: blue[700],
    contrastText: darkGunmental[50],
  },
  success: {
    main: cyan[500],
    light: cyan[300],
    dark: cyan[700],
    contrastText: darkGunmental[50],
  },
  error: {
    main: red[500],
    light: red[300],
    dark: red[700],
    contrastText: darkGunmental[50],
  },
  warning: {
    main: yellow[500],
    light: yellow[300],
    dark: yellow[700],
    contrastText: darkGunmental[50],
  },
  ...paletteGlobal,
};

export const paletteWhite: PaletteOptions = {
  background: { default: white[50], paper: blue[300] },
  mode: 'light',
  text: {
    primary: dark[900],
    secondary: dark[800],
    disabled: dark[600],
  },
  primary: {
    main: blue[800],
    dark: blue[600],
    light: blue[500],
    contrastText: dark[50],
  },
  secondary: {
    main: cyan[500],
    dark: cyan[700],
    light: cyan[300],
    contrastText: darkGunmental[50],
  },
  info: {
    main: blue[500],
    light: blue[300],
    dark: blue[700],
    contrastText: darkGunmental[50],
  },
  success: {
    main: cyan[500],
    light: cyan[300],
    dark: cyan[700],
    contrastText: darkGunmental[50],
  },
  error: {
    main: red[500],
    light: red[300],
    dark: red[700],
    contrastText: darkGunmental[50],
  },
  warning: {
    main: yellow[500],
    light: yellow[300],
    dark: yellow[700],
    contrastText: darkGunmental[50],
  },
  ...paletteGlobal,
};
