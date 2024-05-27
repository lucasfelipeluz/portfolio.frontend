import { onAuthStateChanged, signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { firebaseAuth, googleAuthProvider } from '../configs/firebase';
import LoginType from '../core/enum/LoginType';
import { LoginProps, LoginResponse } from '../core/types/Services';
import { AuthContextProps, UserLogged } from '../types/Auth';
import { login as loginService } from '../services/LoginServices';
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import strings from '../utils/strings';
import { redirect } from 'react-router-dom';

const authDefaultProps: AuthContextProps = {
  user: null,
  loading: false,
  init: () => {},
  login: async (props: LoginProps) => ({} as LoginResponse),
  logout: () => {},
  register: () => {},
};

const AuthContext = createContext(authDefaultProps);

export function AuthProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const cookies = parseCookies();

  const [user, setUser] = useState<UserLogged | null>(authDefaultProps.user);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * @private
   */
  const init = async (): Promise<void> => {
    const user = cookies[strings.user];

    if (user) {
      console.log('tem user');
      if (window.location.pathname === '/login') {
        window.location.href = '/admin/home';
      }
    } else {
      if (window.location.pathname === '/admin/home') {
        window.location.href = '/login';
      }
    }
  };

  const saveInfoLogin = (userLogged: UserLogged, token: string): void => {
    setCookie(undefined, strings.user, JSON.stringify(userLogged), {
      maxAge: 60 * 60 * 24 * 60,
      path: '/',
    });

    setCookie(undefined, strings.token, token, {
      maxAge: 60 * 60 * 24 * 60,
      path: '/',
    });

    window.localStorage.setItem(strings.user, JSON.stringify(userLogged));
    window.localStorage.setItem(strings.token, token);
  };

  const clearInfoLogin = (): void => {
    destroyCookie(undefined, strings.user, {
      path: '/',
    });

    destroyCookie(undefined, strings.token, {
      path: '/',
    });

    window.localStorage.removeItem(strings.user);
    window.localStorage.removeItem(strings.token);
  };

  const login = async (loginProps: LoginProps): Promise<LoginResponse> => {
    setLoading(true);
    let data: LoginResponse;
    try {
      if (loginProps.type === LoginType.Default) {
        const response = await loginService(loginProps);

        setUser(response.data.user as UserLogged);
        saveInfoLogin(response.data.user as UserLogged, response.data.token);

        window.location.href = '/admin/home';

        return response;
      } else {
        return {
          success: false,
          message: 'Tipo de login não encontrado',
        } as LoginResponse;
      }
    } catch (error) {
      console.log('😍  error', error);
      data = error;
      return data;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    clearInfoLogin();
    window.location.href = '/login';
  };

  const register = () => {};

  useEffect(() => {
    init();

    // const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
    //   // console.log('user', user);
    // });
    // return unsubscribe;
  }, []);

  const value: AuthContextProps = {
    user,
    loading,
    init,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
