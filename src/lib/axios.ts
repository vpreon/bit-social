import Axios from 'axios';

import { API_URL } from '@/config';
import storage from '@/utils/storage';

function authInterceptor(config: any) {
  const token = storage.getToken();

  if (token) {
    if (!config.headers) config.headers = {};
    config.headers.authorization = `Token ${token}`;
  }
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authInterceptor);
