import { portfolioAPI } from 'src/core/api';
import Skill from 'src/types/Skill';

const skillService = {
  async getAll(): Promise<Skill[]> {
    try {
      const response = await portfolioAPI.get('/skill');
      return response.data.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },

  async getById(id: string | number): Promise<Skill[]> {
    try {
      const response = await portfolioAPI.get(`/skill?id=${id}`);
      return response.data.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },

  async post(data: Skill): Promise<Skill> {
    try {
      const response = await portfolioAPI.post('/skill', data);
      return response.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },

  async put(id: string | number, data: Skill): Promise<Skill> {
    try {
      const response = await portfolioAPI.put(`/skill/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },

  async deleteMutation(id: string | number): Promise<Skill> {
    try {
      const response = await portfolioAPI.delete(`/skill/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },
};

export default skillService;
