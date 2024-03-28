import React, { createContext, useEffect, useState } from 'react';
import { AuthContextProps, UserLogged } from '../types/Auth';
import { LoginProps } from '../types/ServicesProps';
import axios from 'axios';
import { Route } from 'react-router-dom';

const authDefaultProps: AuthContextProps = {
  user: null,
  init: () => {},
  login: () => {},
  logout: () => {},
  register: () => {},
};

export const AuthContext = createContext(authDefaultProps);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserLogged | null>(authDefaultProps.user);

  const init = () => {};

  const login = (loginProps: LoginProps) => {
    axios.post('http://localhost:56496/api/login', loginProps).then(async (r) => {
      const { message, success, data } = r.data;
      const { user, token } = data;

      if (!success) {
        throw new Error(message);
      }

      const userLogged: UserLogged = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };

      setUser(userLogged);
    });
  };

  const logout = () => {};

  const register = () => {};

  useEffect(() => {}, []);

  const value: AuthContextProps = {
    user,
    init,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
