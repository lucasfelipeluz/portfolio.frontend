import { ReactNode } from 'react';

import { PaletteMode } from '@mui/material';

export interface LayoutSettings {
  layoutMode: PaletteMode;
}

export interface LayoutSettingsProviderInput {
  children: ReactNode;
}
