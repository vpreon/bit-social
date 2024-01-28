import { axios } from '@/lib/axios';

export const postQry = (data: { text: string }): Promise<any> => {
  return axios.post('/posts/', data);
};
