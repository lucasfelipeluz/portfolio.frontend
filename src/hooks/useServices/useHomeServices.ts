import { useQuery } from 'react-query';
import homeService from 'src/services/home';
import cacheKeys from 'src/utils/cacheKeys';
import strings from 'src/utils/strings';

const useHomeServices = {
  getHome() {
    return useQuery(cacheKeys.home, homeService.getAll);
  },
};

export default useHomeServices;
