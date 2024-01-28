import { BaseAPIEntity } from '@/types';

export type Post = BaseAPIEntity & {
  text: string;
  image: string;
};
