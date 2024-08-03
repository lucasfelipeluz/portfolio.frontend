import React from 'react';

import { AppProps } from 'next/app';
import { LayoutSettingsProvider } from 'src/core/context/settingsContext';
import { LanguageProvider } from 'src/core/context/languageContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main.css';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <LayoutSettingsProvider>
        <QueryClientProvider client={queryClient}>
          <Component pageProps={pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </LayoutSettingsProvider>
    </LanguageProvider>
  );
}

export default App;
