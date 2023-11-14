import React from 'react';
import { createContext, useState } from 'react';
import LanguageProps from '../interfaces/LanguageProps';
import { languages } from '../utils/config';
export const LanguageContext = createContext({
  language: languages[1],
  setLanguage: (language: LanguageProps) => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState<LanguageProps>(languages[1]);

  return (
    <LanguageContext.Provider value={{ language: language ?? languages[1], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
