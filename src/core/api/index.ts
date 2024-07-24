import axios from 'axios';
import { configApi } from 'src/utils/config';

const portfolioAPI = axios.create({
  baseURL: `${configApi.urlApi}:${configApi.hostApi}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export { portfolioAPI };
