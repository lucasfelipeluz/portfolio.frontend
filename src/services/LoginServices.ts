import { api } from '../configs/api';
import { LoginProps, LoginResponse, RegisterProps } from '../core/types/Services';

export async function login(loginProps: LoginProps): Promise<LoginResponse> {
  try {
    const response = await api.post('/login', loginProps);
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function register(loginProps: RegisterProps): Promise<LoginResponse> {
  try {
    const response = await api.post('/login', loginProps);
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}
