import React, { createContext, useContext, useState } from 'react';

import { LayoutSettingsProviderInput } from 'src/core/types/layoutSettings';
import { Settings } from 'src/core/types/settings';

const initSettings: Settings = {};

const SettingsContext = createContext<Settings>(initSettings);

function SettingsProvider({ children }: LayoutSettingsProviderInput) {
  const [settings, setSettings] = useState<Settings>(initSettings);

  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
}

const useSettings = (): Settings => useContext(SettingsContext);

export { SettingsContext, SettingsProvider, useSettings };
