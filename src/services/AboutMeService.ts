import { api } from '../configs/api';
import IAboutMe from '../core/types/AboutMe';

export async function getAll(): Promise<IAboutMe> {
  try {
    const response = await api.get(`/about_me`);
    return response.data.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function post(data: IAboutMe): Promise<IAboutMe> {
  try {
    const response = await api.post(`/about_me`, data);
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}
