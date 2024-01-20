import Axios from 'axios';

import { API_URL } from '@/config';
// import storage from '@/utils/storage';

export const axios = Axios.create({
  baseURL: API_URL,
});
