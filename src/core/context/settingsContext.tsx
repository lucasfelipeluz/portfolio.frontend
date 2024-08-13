import { ThemeProvider } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';

import { LayoutSettings, LayoutSettingsProviderInput } from 'src/core/types/layoutSettings';
import { theme } from '../theme/theme';

const initLayoutSettings: LayoutSettings = {
  layoutMode: 'light',
};

const LayoutSettingsContext = createContext<LayoutSettings>(initLayoutSettings);

function LayoutSettingsProvider({ children }: LayoutSettingsProviderInput) {
  const [layoutSettings, setLayoutSettings] = useState<LayoutSettings>(initLayoutSettings);

  return (
    <LayoutSettingsContext.Provider value={layoutSettings}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LayoutSettingsContext.Provider>
  );
}

const useLayoutSettings = (): LayoutSettings => useContext(LayoutSettingsContext);

export { LayoutSettingsContext, LayoutSettingsProvider, useLayoutSettings };
