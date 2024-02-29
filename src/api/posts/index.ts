import { axios } from '@/lib/axios';

import { CreatePost, GetPosts } from './types';

export const postQry = (data: CreatePost) => {
  return axios.post('/posts/', data).then((res) => res.data);
};

export const getPostsQry = (params?: GetPosts) => {
  return axios.get('/posts/', { params: params }).then((res) => res.data);
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
