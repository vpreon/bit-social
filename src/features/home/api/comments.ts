import { axios } from '@/lib/axios';

export const postCommentQry = (id: number, data: { text: string }) => {
  return axios.post(`/posts/${id}/comments/`, data).then((res) => res.data);
};

export const deleteCommentQry = (id: number, commentId: number) => {
  return axios.delete(`/posts/${id}/comments/${commentId}/`);
};
