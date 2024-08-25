// @ts-nocheck

import { LanguageProps } from 'src/core/types/languageContext';

export const applicationConfig = {
  urlApi: process.env.NEXT_PUBLIC_API_URL,
  serverMode: process.env.NEXT_PUBLIC_SERVER_MODE,
  clientSource: process.env.NEXT_PUBLIC_CLIENT_SOURCE,
};

export const languages: LanguageProps[] = [
  { id: 1, code: 'pt', name: 'Português' },
  { id: 2, code: 'en', name: 'English' },
];
