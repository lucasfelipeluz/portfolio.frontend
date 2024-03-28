import axios from 'axios';
import { configApi } from '../utils/config';

export async function getAll() {
  try {
    const response = await axios.get(`${configApi.urlApi}:${configApi.hostApi}/api/home`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}
