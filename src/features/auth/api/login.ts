import { API_URL } from '@/config';
import { axios } from '@/lib/axios';

export const loginQry = (data: any) => {
  console.log('Base', API_URL);
  return axios.post('/auth/login', data);
};
