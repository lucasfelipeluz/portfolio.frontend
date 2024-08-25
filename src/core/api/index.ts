import axios from 'axios';
import { applicationConfig } from 'src/utils/config';

const portfolioAPI = axios.create({
  baseURL: `${applicationConfig.urlApi}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Client-Source': applicationConfig.clientSource,
  },
});

export { portfolioAPI };
