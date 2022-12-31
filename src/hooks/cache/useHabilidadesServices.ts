import { useQuery } from 'react-query';
import { getAll, getById } from '../../services/HabilidadesServices';

const key = 'habilidades';

const useHabilidadesServices = () => {
  const useGetAll = () => useQuery(key, getAll);

  const useGetById = (id: string | number) => useQuery([key, id], () => getById(id));

  return { useGetAll, useGetById };
};

export default useHabilidadesServices;
