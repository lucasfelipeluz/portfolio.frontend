import { portfolioAPI } from 'src/core/api';
import { Project } from 'src/types/Project';

const projectService = {
  async getAll(): Promise<Project[]> {
    try {
      const response = await portfolioAPI.get('/projects');
      return response.data.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },

  async getById(id: string | number): Promise<Project[]> {
    try {
      const response = await portfolioAPI.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },

  async post(data: Project): Promise<Project> {
    try {
      const response = await portfolioAPI.post('/projects', data);
      return response.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },

  async put(id: string | number, data: Project): Promise<Project> {
    try {
      const response = await portfolioAPI.put(`/projects/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },

  async deleteMutation(id: string | number): Promise<Project> {
    try {
      const response = await portfolioAPI.delete(`/projects/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error ao efetuar a requisição');
    }
  },
};

export default projectService;
