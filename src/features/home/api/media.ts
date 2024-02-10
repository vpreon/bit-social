import { axios } from '@/lib/axios';

import { Media } from '../types';

export const postMediaQry = (id: number, data: Media) => {
  const formData = new FormData();
  formData.append('image', data.image as File);

  return axios.post(`/posts/${id}/medias/`, formData).then((res) => res.data);
};
