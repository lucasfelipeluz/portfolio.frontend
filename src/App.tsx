import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import AdminHome from './pages/AdminHome';
import Home from './pages/Home';
import Login from './pages/Login';
import Project from './pages/Project';
import Unavailable from './pages/Unavailable';
import { configApi } from './utils/config';

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
      <AuthProvider>
        {configApi.serverOn === 'true' ? (
          <RouterProvider router={router}></RouterProvider>
        ) : (
          <Unavailable />
        )}
      </AuthProvider>
    </LanguageProvider>
  );
}
