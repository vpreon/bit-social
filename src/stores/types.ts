import { BaseGetEntity } from '@/types';

export type BaseStateEntity<T> = {
  loading: boolean;
  data: BaseGetEntity<T>;
};
