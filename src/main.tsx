import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { configApi } from '../src/utils/config';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {configApi.serverMode === 'dev' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  </React.StrictMode>
);
