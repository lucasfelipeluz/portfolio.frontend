import { useQuery } from 'react-query';
import { getAll, getById } from '../../services/ProjetosServices';

const key = 'projetos';

const useProjetosServices = () => {
  const useGetAll = () => useQuery(key, getAll);

  const useGetById = (id: string | number) => useQuery([key, id], () => getById(id));

  return { useGetAll, useGetById };
};

export default useProjetosServices;
