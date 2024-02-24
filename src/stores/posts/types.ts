import { BaseGetEntity, Post } from '@/types';

export type StateEntity = {
  loading: boolean;
  data: BaseGetEntity<Post>;
};
