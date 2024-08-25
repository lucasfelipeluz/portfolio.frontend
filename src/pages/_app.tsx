import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { LanguageProvider } from 'src/core/context/languageContext';
import { SettingsProvider } from 'src/core/context/settingsContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main.css';
import { MainApplication } from 'src/components/styles/container';
import { ApplicationVariablesProvider } from 'src/core/context/applicationVariables';
import { applicationConfig } from 'src/utils/config';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <ApplicationVariablesProvider>
      <LanguageProvider>
        <SettingsProvider>
          <QueryClientProvider client={queryClient}>
            <Head>
              <title>
                {applicationConfig.serverMode === 'development' ? 'dev - ' : ''}Portfolio Lucas Luz
              </title>
            </Head>
            <MainApplication>
              <Component pageProps={pageProps} />
            </MainApplication>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </SettingsProvider>
      </LanguageProvider>
    </ApplicationVariablesProvider>
  );
}

export default App;
