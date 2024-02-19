import { Post as PostProps } from '../types';

import { PostItem } from './PostItem';

export const Post = (props: PostProps) => {
  if (props.share) {
    return <PostItem {...props.share} />;
  } else {
    return <PostItem {...props} />;
  }
};
