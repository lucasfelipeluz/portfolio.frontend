import { api } from '../configs/api';
import { HomeProps } from '../core/types/Services';

export async function getAll(): Promise<HomeProps> {
  try {
    const response = await api.get('/home');

    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function getAllPrivate(): Promise<HomeProps> {
  try {
    const response = await api.get('/home/admin');

    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function getProjectById(id: string): Promise<HomeProps> {
  try {
    const response = await api.get(`/home/project/${id}`);

    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function getSkillById(id: string): Promise<HomeProps> {
  try {
    const response = await api.get(`/home/skill/${id}`);

    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}
