import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { LanguageProvider } from 'src/core/context/languageContext';
import { SettingsProvider } from 'src/core/context/settingsContext';
// import { theme } from 'src/core/theme/theme';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main.css';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <SettingsProvider>
        <QueryClientProvider client={queryClient}>
          <Head>
            <title>Portfolio Lucas Luz</title>
          </Head>
          <Component pageProps={pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SettingsProvider>
    </LanguageProvider>
  );
}

export default App;
