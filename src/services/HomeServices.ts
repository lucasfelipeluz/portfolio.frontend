import axios from 'axios';
import { HomeProps } from '../types/ServicesProps';
import { configApi } from '../utils/config';

export async function getAll(): Promise<HomeProps> {
  try {
    const response = await axios.get(`${configApi.urlApi}:${configApi.hostApi}/api/home`, {
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

export async function getAllPrivate(): Promise<HomeProps> {
  try {
    const response = await axios.get(`${configApi.urlApi}:${configApi.hostApi}/api/home/admin`, {
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
