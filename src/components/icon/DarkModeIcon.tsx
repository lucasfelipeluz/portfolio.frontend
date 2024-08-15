import React from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useSettings } from 'src/core/context/settingsContext';
import { colors } from 'src/core/theme/theme';

export default function DarkModeIcon() {
  const { toggleLayoutMode, layoutMode } = useSettings();

  return (
    <IconButton onClick={toggleLayoutMode}>
      {layoutMode === 'dark' ? (
        <LightMode />
      ) : (
        <DarkMode
          sx={{
            color: colors.text.light.main,
          }}
        />
      )}
    </IconButton>
  );
}
