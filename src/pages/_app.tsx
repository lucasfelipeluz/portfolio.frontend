import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MainApplication } from 'src/components/styles/container';
import { LanguageProvider } from 'src/core/context/languageContext';
import { SettingsProvider } from 'src/core/context/settingsContext';
import '../../styles/main.css';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <SettingsProvider>
        <QueryClientProvider client={queryClient}>
          <Head>
            <title>Portfolio Lucas Luz</title>
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          </Head>
          <MainApplication>
            <Component pageProps={pageProps} />
          </MainApplication>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SettingsProvider>
    </LanguageProvider>
  );
}

export default App;
