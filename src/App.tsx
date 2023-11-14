import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { configApi } from './utils/config';
import Unavailable from './pages/Unavailable';
import Home from './pages/Home';
import { LanguageProvider } from './context/LanguageContext';

const router = createBrowserRouter([{ path: '/', element: <Home /> }]);

export default function App() {
  return (
    <LanguageProvider>
      {configApi.serverOn === 'true' ? <RouterProvider router={router} /> : <Unavailable />}
    </LanguageProvider>
  );
}
