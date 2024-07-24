// @ts-nocheck

import { LanguageProps } from 'src/core/types/languageContext';

export const configApi = {
  urlApi: 'http://localhost',
  hostApi: '8181',
  serverMode: 'dev',
  serverOn: 'true',
};

export const languages: LanguageProps[] = [
  { id: 1, code: 'pt', name: 'Português' },
  { id: 2, code: 'en', name: 'English' },
];
