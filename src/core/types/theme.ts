import { ReactNode } from 'react';
import { PaletteMode, Theme } from '@mui/material';

export interface ApplicationTheme {
  mode: PaletteMode;
  toggleColorMode: () => void;
  theme: Theme;
}

export interface ThemeProviderInput {
  children: ReactNode;
}
