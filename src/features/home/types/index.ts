import { BaseAPIEntity } from '@/types';

export type CommentProps = {
  id: number;
  text: string;
};

export type PostProps = BaseAPIEntity & {
  text: string;
  image: string;
  reacts: number;
  reacted: boolean;
  comments: CommentProps[];
};
