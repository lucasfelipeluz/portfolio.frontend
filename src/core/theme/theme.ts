import { createTheme, ThemeOptions } from '@mui/material';

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

interface Fonts {
  font1: string;
  font2: string;
  font3: string;
  font4: string;
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

/**
 * Fontes do App.
 * @deprecated
 */
export const fonts: Fonts = {
  font1: 'KoHo',
  font2: 'Kanit',
  font3: 'Kodchasan',
  font4: 'IBM Plex Sans',
};

const defaultDarkThemeOptions: ThemeOptions = {
  palette: {
    background: { default: colors.backgroundDarkMode1, paper: colors.backgroundDarkMode2 },
    mode: 'dark',
    primary: colors.primary.dark,
    secondary: colors.secondary.dark,
    error: colors.error.dark,
    warning: colors.warning.dark,
    success: colors.success.dark,
    info: colors.info.dark,
    text: {
      primary: colors.text.dark.main,
      secondary: colors.text.dark.medium,
      disabled: colors.text.dark.disabled,
    },
    divider: colors.grey,
  },
  typography: {
    fontFamily: "'IBM Plex Sans', 'Roboto', 'Arial', sans-serif",
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.text.dark.main,
          fontFamily: "'IBM Plex Sans', 'Roboto', 'Arial', sans-serif",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.backgroundDarkMode2,
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.text.dark.main,
        },
      },
    },
  },
};

const defaultLigthThemeOptions: ThemeOptions = {
  palette: {
    background: { default: colors.backgroundLightMode1, paper: colors.backgroundLightMode2 },
    mode: 'light',
    primary: colors.primary.light,
    secondary: colors.secondary.light,
    error: colors.error.light,
    warning: colors.warning.light,
    success: colors.success.light,
    info: colors.info.light,
    text: {
      primary: colors.text.light.main,
      secondary: colors.text.light.medium,
      disabled: colors.text.light.disabled,
    },
    divider: colors.grey,
  },
  typography: {
    fontFamily: "'IBM Plex Sans', 'Roboto', 'Arial', sans-serif",
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.text.light.main,
          fontFamily: "'IBM Plex Sans', 'Roboto', 'Arial', sans-serif",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.backgroundLightMode2,
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.text.light.main,
        },
      },
    },
  },
};

export const defaultDarkTheme = createTheme(defaultDarkThemeOptions);

export const defaultLightTheme = createTheme(defaultLigthThemeOptions);
