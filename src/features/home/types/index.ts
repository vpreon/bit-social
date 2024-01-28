import { BaseAPIEntity } from '@/types';

export type PostProps = BaseAPIEntity & {
  text: string;
  image: string;
};
