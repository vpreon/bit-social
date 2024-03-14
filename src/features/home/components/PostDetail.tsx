import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPostQry } from '@/api/posts';
import { Post as TPost } from '@/types';

import { Post } from './Post';

export const PostDetail = () => {
  const [post, setPost] = useState<TPost>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostQry(id).then((res) => {
        setPost(res);
      });
    }
  }, [id]);
  console.log('test');

  if (post) {
    if (post.share) {
      return <Post {...post.share} />;
    } else {
      return <Post {...post} />;
    }
  } else {
    return <div>Loading...</div>;
  }
};
