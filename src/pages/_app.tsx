import React from 'react';
import Head from 'next/head';
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
          <Head>
            <title>Portfolio Lucas Luz</title>
          </Head>
          <Component pageProps={pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </LayoutSettingsProvider>
    </LanguageProvider>
  );
}

export default App;
