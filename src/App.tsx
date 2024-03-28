import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { configApi } from './utils/config';
import Unavailable from './pages/Unavailable';
import Home from './pages/Home';
import { LanguageProvider } from './context/LanguageContext';
import Project from './pages/Project';
import Login from './pages/Login';
import AdminHome from './pages/AdminHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/project/:id',
    element: <Project />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: 'admin/home',
    element: <AdminHome />,
  },
]);

export default function App() {
  return (
    <LanguageProvider>
      {configApi.serverOn === 'true' ? <RouterProvider router={router} /> : <Unavailable />}
    </LanguageProvider>
  );
}
