import { useQuery } from 'react-query';

import { getAll, getAllPrivate } from '../services/HomeServices';

const useHomeServices = () => {
  const useGetHome = () => {
    return useQuery('home', getAll);
  };

  const useGetHomeAdmin = () => {
    return useQuery('home-admin', getAllPrivate);
  };

  return {
    useGetHome,
    useGetHomeAdmin,
  };
};

export default useHomeServices;
