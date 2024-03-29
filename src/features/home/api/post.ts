import { axios } from '@/lib/axios';

export const postQry = (data: { text?: string; post?: number }): Promise<any> => {
  return axios.post('/posts/', data).then((res) => res.data);
};

export const getPostsQry = () => {
  return axios.get('/posts/').then((res) => res.data);
};

export const getPostQry = (id: number) => {
  return axios.get(`/posts/${id}/`).then((res) => res.data);
};

export const deletePostsQry = (id: number) => {
  return axios.delete(`/posts/${id}/`).then((res) => res.data);
};

export const postReactQry = (id: number, data: { react: string }) => {
  return axios.post(`/posts/${id}/reacts/`, data).then((res) => res.data);
};
