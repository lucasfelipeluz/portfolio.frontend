import React, { ReactNode, createContext, useState, useMemo, useContext } from 'react';

import { languages } from 'src/utils/config';
import { LanguageContextProps, LanguageProps } from 'src/core/types/languageContext';

export const LanguageContext = createContext({
  language: languages[1],
  setLanguage: (language: LanguageProps) => {},
} as LanguageContextProps);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageProps>(languages[0]);

  const contextValue = useMemo(
    () => ({ language: language ?? languages[1], setLanguage }),
    [language],
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
