import { Settings } from '../types/settings';

export function saveSettings(settings: Settings) {
  localStorage.setItem('settings', JSON.stringify(settings));
}

export function getSettings(): Settings | null {
  const settings = localStorage.getItem('settings');
  if (settings) {
    return JSON.parse(settings);
  }
  return null;
}
