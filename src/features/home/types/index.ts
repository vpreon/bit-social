import { BaseAPIEntity } from '@/types';

export type CommentProps = {
  id: number;
  text: string;
};

export type Media = {
  id?: string;
  image: File | string;
};

export type BasePostProps = BaseAPIEntity & {
  text: string;
  medias: Media[];
  reacts: number;
  reacted: boolean;
  comments: CommentProps[];
};

export type PostProps = BasePostProps & {
  share: BasePostProps;
};
