import { PaletteMode, Theme, ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import React, { createContext, useContext, useMemo, useState } from 'react';
import { LayoutSettingsProviderInput } from 'src/core/types/layoutSettings';
import { Settings } from 'src/core/types/settings';
import { defaultDarkTheme, defaultLightTheme } from '../theme/theme';

const initSettings: Settings = {
  layoutMode: 'dark',
  toggleLayoutMode: () => {},
  theme: defaultDarkTheme as Theme,
};

const SettingsContext = createContext<Settings>(initSettings);

function SettingsProvider({ children }: LayoutSettingsProviderInput) {
  const [themeMode, setThemeMode] = useState<PaletteMode>(initSettings.layoutMode);
  const [theme, setTheme] = useState<Theme>(initSettings.theme);

  const toggleLayoutMode = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    let newTheme = null;
    if (newMode === 'dark') {
      newTheme = defaultDarkTheme;
    } else {
      newTheme = defaultLightTheme;
    }

    setThemeMode(newMode);
    setTheme(newTheme);
  };

  return (
    <SettingsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        toggleLayoutMode,
        layoutMode: themeMode,
        theme,
      }}
    >
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </SettingsContext.Provider>
  );
}

const useSettings = (): Settings => useContext(SettingsContext);

export { SettingsContext, SettingsProvider, useSettings };
