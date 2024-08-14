import { createTheme, PaletteMode, ThemeOptions } from '@mui/material';
import { useMemo, useState } from 'react';

interface Colors {
  cor1: string;
  cor2: string;
  cor3: string;
  corDestaque: string;
  corDestaqueHover: string;
  conteudo: string;
  letras: string;
  vermelho: string;
  vermelhoHover: string;
  verde: string;
  verdeHover: string;
  header: string;
  dark: string;
  dark2: string;
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

interface DefaultColors {
  primary: Color;
  secondary: Color;
  error: Color;
  warning: Color;
  info: Color;
  success: Color;
}

/**
 * Paletas de cores do App
 * @deprecated
 */
export const colors: Colors = {
  cor1: '#1e272e',
  cor2: '#d2dae2',
  cor3: '#808e9b',
  corDestaque: '#5a87ae',
  corDestaqueHover: '#5c9bd1',
  conteudo: '#101518',
  letras: '#f1f2f6',
  vermelho: '#ff3f34',
  vermelhoHover: '#ff3f34',
  verde: '#0bdd7b',
  verdeHover: '#07b664',
  header: '#181f24',
  dark: '#101518',
  dark2: '#222F3E',
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

export const defaultColors: DefaultColors = {
  primary: {
    main: '#5C9BD1',
    light: '#89BEEC',
    dark: '#43729A',
    contrastText: '#43729A',
  },
  secondary: {
    main: '#808E9B',
    light: '#A7BACB',
    dark: '#4F5860',
    contrastText: '#4F5860',
  },
  error: {
    main: '#FF3F34',
    light: '#FF7C75',
    dark: '#FF7C75',
    contrastText: '#FF7C75',
  },
  warning: {
    main: '#FFA239',
    light: '#FACC99',
    dark: '#AD6D25',
    contrastText: '#AD6D25',
  },
  success: {
    main: '#0BDD7B',
    light: '#66E3A9',
    dark: '#099654',
    contrastText: '#099654',
  },
  info: {
    main: '#3D5396',
    light: '#6B7AA7',
    dark: '#12204B',
    contrastText: '#12204B',
  },
};

const defaultTheme: ThemeOptions = {
  palette: {
    background: { default: '#101518', paper: '#1E272E' },
    mode: 'dark',

    primary: defaultColors.primary,
    secondary: defaultColors.secondary,
    error: defaultColors.error,
    warning: defaultColors.warning,
    success: defaultColors.success,
    info: defaultColors.info,
    text: {
      primary: '#f1f2f6',
      secondary: '#CECFD2',
      disabled: '#5C5C5C',
    },
  },
  typography: {
    fontFamily: `${fonts.font4}, 'Roboto', 'Arial', sans-serif`,
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.letras,
          fontFamily: `${fonts.font4}, 'Roboto', 'Arial', sans-serif`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          backgroundColor: colors.dark2,
          color: colors.letras,
          fontSize: '15px',
          transition: '0.1s linear',
          border: 'none',
          width: '100%',
          fontWeight: '400',
          minWidth: 'none',
          ':hover': {
            backgroundColor: colors.corDestaque,
          },
        },
      },
    },
  },
};

export const theme = createTheme(defaultTheme);

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const modifiedTheme = useMemo(() => createTheme(theme), [mode]);

  return { mode, toggleColorMode, theme: modifiedTheme };
};
