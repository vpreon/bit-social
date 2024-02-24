import { axios } from '@/lib/axios';

export const loginQry = (data: { email: string; password: string }) => {
  return axios.post('/auth/login/', data);
};
