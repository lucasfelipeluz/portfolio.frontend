import { portfolioAPI } from 'src/core/api';
import Home from 'src/types/Home';

const homeService = {
  async getAll(): Promise<Home> {
    try {
      const response = await portfolioAPI.get('/');
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error ao efetuar a requisição');
    }
  },
};

export default homeService;
