import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { SettingsProvider } from 'src/core/context/settingsContext';
import { LanguageProvider } from 'src/core/context/languageContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'src/core/theme/theme';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main.css';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <SettingsProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Head>
              <title>Portfolio Lucas Luz</title>
            </Head>
            <Component pageProps={pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProvider>
        </QueryClientProvider>
      </SettingsProvider>
    </LanguageProvider>
  );
}

export default App;
