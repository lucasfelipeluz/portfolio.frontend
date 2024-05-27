import axios from 'axios';
import { configApi } from '../utils/config';
import { parseCookies } from 'nookies';
import strings from '../utils/strings';

const cookies = parseCookies();

const api = axios.create({
  baseURL: `${configApi.urlApi}:${configApi.hostApi}/api`,
  headers: {
    Authorization: cookies[strings.token] ? `Bearer ${cookies[strings.token]}` : '',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export { api };
