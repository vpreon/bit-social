import { BaseAPIEntity } from '@/types';

export type CommentProps = {
  id: number;
  text: string;
};

export type BasePostProps = BaseAPIEntity & {
  text: string;
  image: string;
  reacts: number;
  reacted: boolean;
  comments: CommentProps[];
};

export type PostProps = BasePostProps & {
  share: BasePostProps;
};
