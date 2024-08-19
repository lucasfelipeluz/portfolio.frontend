import React from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useSettings } from 'src/core/context/settingsContext';
import { ThemeModeIconButton } from '../styles/button';

export default function DarkModeIcon() {
  const { toggleLayoutMode, layoutMode } = useSettings();

  return (
    <ThemeModeIconButton onClick={toggleLayoutMode}>
      {layoutMode === 'dark' ? <LightMode className='icon' /> : <DarkMode className='icon' />}
    </ThemeModeIconButton>
  );
}
