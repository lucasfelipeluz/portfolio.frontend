import { portfolioAPI } from 'src/core/api';
import Home from 'src/types/Home';
import { Project } from 'src/types/Project';
import Skill from 'src/types/Skill';

const homeService = {
  async getAll(): Promise<Home> {
    try {
      const response = await portfolioAPI.get('/public');
      return response.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },

  async getProject(id: number): Promise<Project> {
    try {
      const response = await portfolioAPI.get(`/public/project/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },

  async getSkill(id: number): Promise<Skill> {
    try {
      const response = await portfolioAPI.get(`/public/skill/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },
};

export default homeService;
