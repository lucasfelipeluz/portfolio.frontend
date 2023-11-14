import React from 'react';
import { ToggleLanguageStyled } from '../style/Unavailable';
import { LanguageContext } from '../context/LanguageContext';
import { languages } from '../utils/config';

export default function ToggleLanguageComponent() {
  const { language, setLanguage } = React.useContext(LanguageContext);

  return (
    <ToggleLanguageStyled>
      {languages.map((displayLanguage) => {
        return (
          <button
            key={displayLanguage.code}
            className={language.code === displayLanguage.code ? 'active' : 'inactive'}
            onClick={() => {
              const choisedLanguage = languages.find((l) => l.code === displayLanguage.code);
              if (choisedLanguage !== undefined) {
                setLanguage(choisedLanguage);
              }
            }}
          >
            {displayLanguage.name}
          </button>
        );
      })}
    </ToggleLanguageStyled>
  );
}
