import { Post as PostProps } from '@/types/posts';

import { PostDetail } from './PostDetail';

export const Post = (props: PostProps) => {
  if (props.share) {
    return <PostDetail {...props.share} />;
  } else {
    return <PostDetail {...props} />;
  }
};
