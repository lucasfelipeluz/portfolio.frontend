import { createTheme, ThemeOptions } from '@mui/material';
import components from './components';
import { paletteBlack, paletteWhite } from './palette';
import customShadows from './shadows';
import typography from './typography';

interface Colors {
  backgroundDarkMode1: string;
  backgroundDarkMode2: string;
  backgroundLightMode1: string;
  backgroundLightMode2: string;
  primary: {
    dark: Color;
    light: Color;
  };
  secondary: {
    dark: Color;
    light: Color;
  };
  error: {
    dark: Color;
    light: Color;
  };
  warning: {
    dark: Color;
    light: Color;
  };
  info: {
    dark: Color;
    light: Color;
  };
  success: {
    dark: Color;
    light: Color;
  };
  text: {
    dark: TextColor;
    light: TextColor;
  };
  grey: string;
}

interface Color {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

interface TextColor {
  main: string;
  medium: string;
  disabled: string;
}

/**
 * Paletas de cores do App
 * @deprecated
 */
export const colors: Colors = {
  backgroundDarkMode1: '#1E272E',
  backgroundDarkMode2: '#101518',
  backgroundLightMode1: '#fcfcfc',
  backgroundLightMode2: '#E1E5F0',

  grey: '#CECFD2',

  primary: {
    dark: {
      main: '#5C9BD1',
      light: '#89BEEC',
      dark: '#43729A',
      contrastText: '#43729A',
    },
    light: {
      main: '#5C9BD1',
      light: '#89BEEC',
      dark: '#43729A',
      contrastText: '#43729A',
    },
  },
  secondary: {
    dark: {
      main: '#808E9B',
      light: '#A7BACB',
      dark: '#4F5860',
      contrastText: '#4F5860',
    },
    light: {
      main: '#808E9B',
      light: '#A7BACB',
      dark: '#4F5860',
      contrastText: '#4F5860',
    },
  },
  error: {
    dark: {
      main: '#FF3F34',
      light: '#FF7C75',
      dark: '#B42C25',
      contrastText: '#B42C25',
    },
    light: {
      main: '#FF3F34',
      light: '#FF7C75',
      dark: '#B42C25',
      contrastText: '#B42C25',
    },
  },
  warning: {
    dark: {
      main: '#FFA239',
      light: '#FACC99',
      dark: '#AD6D25',
      contrastText: '#AD6D25',
    },
    light: {
      main: '#FFA239',
      light: '#FACC99',
      dark: '#AD6D25',
      contrastText: '#AD6D25',
    },
  },
  info: {
    dark: {
      main: '#3D5396',
      light: '#6B7AA7',
      dark: '#12204B',
      contrastText: '#12204B',
    },
    light: {
      main: '#3D5396',
      light: '#6B7AA7',
      dark: '#12204B',
      contrastText: '#12204B',
    },
  },
  success: {
    dark: {
      main: '#0BDD7B',
      light: '#66E3A9',
      dark: '#099654',
      contrastText: '#099654',
    },
    light: {
      main: '#0BDD7B',
      light: '#66E3A9',
      dark: '#099654',
      contrastText: '#099654',
    },
  },

  text: {
    dark: {
      main: '#f1f2f6',
      medium: '#CECFD2',
      disabled: '#5C5C5C',
    },
    light: {
      main: '#101518',
      medium: '#101518',
      disabled: '#101518',
    },
  },
};

const defaultThemeOptions: ThemeOptions = {
  typography,
  customShadows,
  components,
};

export const defaultDarkTheme = createTheme({ ...defaultThemeOptions, palette: paletteBlack });

export const defaultLightTheme = createTheme({ ...defaultThemeOptions, palette: paletteWhite });
