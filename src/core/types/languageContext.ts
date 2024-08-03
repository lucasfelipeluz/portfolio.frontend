export type LanguageCode = 'en' | 'pt';

export interface LanguageProps {
  id: number;
  code: LanguageCode;
  name: string;
}

export interface LanguageContextProps {
  language: LanguageProps;
  setLanguage: (language: LanguageProps) => void;
}
