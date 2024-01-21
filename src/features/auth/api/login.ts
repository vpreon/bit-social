import { axios } from '@/lib/axios';

export const loginQry = (data: { email: string; password: string }): Promise<any> => {
  return axios.post('/auth/login/', data);
};
