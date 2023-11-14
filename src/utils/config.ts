// @ts-nocheck
import LanguageProps from '../interfaces/LanguageProps';

export const configApi = {
  urlApi: import.meta.env.VITE_API_URL || 'localhost',
  hostApi: import.meta.env.VITE_API_HOST || '8080',
  serverMode: import.meta.env.VITE_SERVER_MODE || 'dev',
  serverOn: import.meta.env.VITE_SERVER_ON || 'true',
};

export const languages: LanguageProps[] = [
  { id: 1, code: 'pt', name: 'Português' },
  { id: 2, code: 'en', name: 'English' },
];
