import { axios } from '@/lib/axios';

export const getUserQuery = () => {
  return axios.post('/auth/user/');
};
