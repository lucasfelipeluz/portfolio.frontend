import { useQuery } from 'react-query';
import { getAll } from '../../services/HomeServices';

const key = 'home';

const useHomeServices = () => {
  const useGetAll = () => useQuery(key, getAll);

  return { useGetAll };
};

export default useHomeServices;
