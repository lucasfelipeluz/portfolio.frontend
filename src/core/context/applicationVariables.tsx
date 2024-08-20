import { useRouter } from 'next/router';
import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import LoadApplicationContainer from 'src/components/container/LoadingApplication';
import { SystemVariable } from 'src/types/SystemVariable';
import { portfolioAPI } from '../api';
import {
  ApplicationVariablesActionTypes,
  ApplicationVariablesContextProps,
} from '../types/applicationVariables';

export const ApplicationVariablesContext = createContext<ApplicationVariablesContextProps>({
  webApplicationAvailable: true,
});

export function ApplicationVariablesProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const [isWebApplicationAvailable, setIsWebApplicationAvailable] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const verifyApplicationAvailable = async () => {
    try {
      const resultVar = await portfolioAPI.get<SystemVariable[]>('/var');
      const { data } = resultVar;

      const responseAPIWebApplicationAvailable = data.find(
        (i) => i.key === ApplicationVariablesActionTypes.WEB_APPLICATION_AVAILABLE,
      );

      if (
        responseAPIWebApplicationAvailable &&
        responseAPIWebApplicationAvailable?.value === 'true'
      ) {
        setIsWebApplicationAvailable(true);
      } else {
        setIsWebApplicationAvailable(false);
      }

      setIsLoading(false);
    } catch (e) {
      setIsWebApplicationAvailable(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    verifyApplicationAvailable();
  }, []);

  useEffect(() => {
    if (isLoading === false && isWebApplicationAvailable === false && router.pathname !== '/404') {
      router.replace('/503');
    }
  }, [isLoading, isWebApplicationAvailable]);

  const contextValue = useMemo(
    () => ({ webApplicationAvailable: !!isWebApplicationAvailable }),
    [isWebApplicationAvailable],
  );

  if (isLoading) {
    return <LoadApplicationContainer />;
  }

  return (
    <ApplicationVariablesContext.Provider value={contextValue}>
      {children}
    </ApplicationVariablesContext.Provider>
  );
}

export const useApplicationVariables = () => React.useContext(ApplicationVariablesContext);
