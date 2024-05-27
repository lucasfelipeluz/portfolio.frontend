import axios from 'axios';
import { configApi } from '../utils/config';
import { api } from '../configs/api';
import IProject from '../core/types/Project';

export async function getAll(): Promise<IProject[]> {
  try {
    const response = await api.get('/projects');
    return response.data.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function getById(id: string | number): Promise<IProject[]> {
  try {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function post(data: IProject): Promise<IProject> {
  try {
    const response = await api.post(`/projects`, data);
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function put(id: string | number, data: IProject): Promise<IProject> {
  try {
    const response = await api.put(`/projects/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function deleteMutation(id: string | number): Promise<IProject> {
  try {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}
