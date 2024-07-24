import React, { ReactNode } from 'react';

import { LayoutSettings } from 'src/core/types/layoutSettings';

import { GlobalStyles, Interpolation } from '@mui/material';

interface Props {
  layoutSettings: LayoutSettings;
  children: ReactNode;
}

function ThemeComponent({ layoutSettings, children }: Props) {
  return (
    <>
      <GlobalStyles styles={{} as Interpolation<unknown>} />
      {children}
    </>
  );
}

export default ThemeComponent;
