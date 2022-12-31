import { useQuery } from 'react-query';
import { getAll } from '../../services/SobreMimServices';

const key = 'sobre-mim';

const useSobreMimServices = () => {
  const useGetAll = () => useQuery(key, getAll);

  return { useGetAll };
};

export default useSobreMimServices;
