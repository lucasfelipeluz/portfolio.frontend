import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MainApplication } from 'src/components/styles/container';
import { ApplicationVariablesProvider } from 'src/core/context/applicationVariables';
import { LanguageProvider } from 'src/core/context/languageContext';
import { SettingsProvider, useSettings } from 'src/core/context/settingsContext';
import { applicationConfig } from 'src/utils/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main.css';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  const { theme } = useSettings();

  return (
    <ApplicationVariablesProvider>
      <LanguageProvider>
        <SettingsProvider>
          <QueryClientProvider client={queryClient}>
            <Head>
              <title>
                {applicationConfig.serverMode === 'development' ? 'dev - ' : ''}Portfolio Lucas Luz
              </title>
              <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <MainApplication style={{ backgroundColor: theme.palette.background.paper }}>
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
