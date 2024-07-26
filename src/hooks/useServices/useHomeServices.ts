import { useQuery } from 'react-query';
import homeService from 'src/services/home';
import cacheKeys from 'src/utils/cacheKeys';

const useHomeServices = {
  getHome() {
    return useQuery(cacheKeys.home, homeService.getAll);
  },

  getHomeProject(id: number) {
    return useQuery(cacheKeys.projects, () => homeService.getProject(id));
  },

  getHomeSkill(id: number) {
    return useQuery(cacheKeys.skills, () => homeService.getSkill(id));
  },
};

export default useHomeServices;
