import axios from 'axios';
import { configApi } from '../utils/config';
import { api } from '../configs/api';
import ISystemVariable from '../core/types/SystemVariable';

export async function getAll(): Promise<ISystemVariable> {
  try {
    const response = await api.get(`${configApi.urlApi}:${configApi.hostApi}/api/home`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}
