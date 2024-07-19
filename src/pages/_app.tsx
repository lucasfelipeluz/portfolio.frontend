import React from 'react';

import { AppProps } from 'next/app';

import { LayoutSettingsProvider } from 'src/core/context/settingsContext';

import '../../styles/main.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutSettingsProvider>
      <Component pageProps={pageProps} />
    </LayoutSettingsProvider>
  );
}

export default App;
