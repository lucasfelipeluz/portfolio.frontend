import { PaletteMode, Theme, ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LayoutSettingsProviderInput } from 'src/core/types/layoutSettings';
import { Settings } from 'src/core/types/settings';
import { useRouter } from 'next/router';
import { defaultDarkTheme, defaultLightTheme } from '../theme/theme';
import { getSettings, saveSettings } from '../localStorage';

const initSettings: Settings = {
  layoutMode: 'dark',
  toggleLayoutMode: () => {},
  theme: defaultDarkTheme as Theme,
};

const SettingsContext = createContext<Settings>(initSettings);

function SettingsProvider({ children }: LayoutSettingsProviderInput) {
  const { pathname } = useRouter();

  const [settings, setSettings] = useState<Settings>(initSettings);
  const [themeMode, setThemeMode] = useState<PaletteMode>(initSettings.layoutMode);
  const [theme, setTheme] = useState<Theme>(initSettings.theme);

  const saveSetting = (newSettings: Settings) => {
    setThemeMode(newSettings.layoutMode);
    setTheme(newSettings.theme);
    saveSettings(newSettings);
    setSettings(newSettings);
  };

  // Toggle layout mode
  const toggleLayoutMode = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    let newTheme = null;
    if (newMode === 'dark') {
      newTheme = defaultDarkTheme;
    } else {
      newTheme = defaultLightTheme;
    }

    saveSetting({ ...settings, layoutMode: newMode, theme: newTheme });
  };

  // Load settings from local storage
  useEffect(() => {
    const localSettings = getSettings();

    if (localSettings) {
      const newMode = localSettings?.layoutMode === 'dark' ? 'dark' : 'light';
      let newTheme = null;
      if (newMode === 'dark') {
        newTheme = defaultDarkTheme;
      } else {
        newTheme = defaultLightTheme;
      }

      saveSetting({ ...settings, layoutMode: newMode, theme: newTheme });
    }
  }, [pathname]);

  // Update theme when layout mode changes
  const contextValue = useMemo(
    () => ({ ...settings, toggleLayoutMode }),
    [settings, toggleLayoutMode],
  );

  return (
    <SettingsContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </SettingsContext.Provider>
  );
}

const useSettings = (): Settings => useContext(SettingsContext);

export { SettingsContext, SettingsProvider, useSettings };
