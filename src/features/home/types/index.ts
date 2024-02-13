import { BaseAPIEntity } from '@/types';

import { User } from '../../profile/types';

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
  user: User;
  created: string;
  updated: string;
};

export type PostProps = BasePostProps & {
  share: BasePostProps;
  user: User;
};
