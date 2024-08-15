import { PaletteMode, Theme } from '@mui/material';
import { ReactNode } from 'react';

export interface Settings {
  layoutMode: PaletteMode;
  toggleLayoutMode: () => void;
  theme: Theme;
}

export interface SettingsProviderInput {
  children: ReactNode;
}
