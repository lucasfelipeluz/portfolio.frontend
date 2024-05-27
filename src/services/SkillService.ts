import { api } from '../configs/api';
import ISkill from '../core/types/Skill';

export async function getAll(): Promise<ISkill[]> {
  try {
    const response = await api.get(`/skills`);
    return response.data.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function getById(id: string | number): Promise<ISkill[]> {
  try {
    const response = await api.get(`/skills?id=${id}`);
    return response.data.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function post(data: ISkill): Promise<ISkill> {
  try {
    const response = await api.post(`/skills`, data);
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function put(id: string | number, data: ISkill): Promise<ISkill> {
  try {
    const response = await api.put(`/skills/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function deleteMutation(id: string | number): Promise<ISkill> {
  try {
    const response = await api.delete(`/skills/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}
