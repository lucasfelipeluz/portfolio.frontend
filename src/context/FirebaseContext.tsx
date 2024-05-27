import React, { createContext, useEffect } from 'react';
import { FirebaseContextProps } from '../types/Firebase';

const firebaseDefaultProps: FirebaseContextProps = {};

export const FirebaseContext = createContext(firebaseDefaultProps);

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {}, []);

  const values = {};

  return <FirebaseContext.Provider value={values}>{children}</FirebaseContext.Provider>;
}
