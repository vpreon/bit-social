import { BaseAPIEntity, BaseGetEntity } from '@/types';

import { User } from './users';

export type Media = {
  id?: string;
  image: File | string;
};

export type Comment = BaseAPIEntity & {
  id: number;
  text: string;
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
  share: BasePost | null;
};

export type Posts = BaseGetEntity<Post>;
