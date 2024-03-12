import { BaseGetEntity } from '@/types';

export type BaseStateEntity<T> = {
  loading: boolean;
  offset: number;
  data: BaseGetEntity<T>;
};
