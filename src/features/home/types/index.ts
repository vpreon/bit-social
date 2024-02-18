import { BaseAPIEntity } from '@/types';

import { User } from '../../profile/types';

export type Comment = {
  id: number;
  text: string;
};

export type Media = {
  id?: string;
  image: File | string;
};

export type BasePost = BaseAPIEntity & {
  text: string;
  medias: Media[];
  reacts: number;
  reacted: boolean;
  comments: Comment[];
  user: User;
};

export type Post = BasePost & {
  share?: BasePost;
};
