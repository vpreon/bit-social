import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostsQry } from '@/api/posts';
import { AppInfiniteScroll, Fn } from '@/components/ui/AppInfiniteScroll';
import { AppDispatch, RootState } from '@/stores';
import { insertPost, setOffset } from '@/stores/posts';
import { Post as TPost } from '@/types';

import { CreatePost } from './CreatePost';
import { Post } from './Post';

export const Posts = () => {
  const [ready, setReady] = useState<boolean>(false);
  const { data, offset } = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();
  const limit = 1;

  const triggerInfinite = async (loaded: Fn, noMore: Fn) => {
    const result = await getPostsQry({ limit: limit, offset: offset });
    if (result.results.length > 0) {
      result.results.forEach((item: TPost) => {
        dispatch(insertPost({ data: item }));
      });
    }
    if (!result.next) {
      noMore();
    } else {
      dispatch(setOffset(limit + offset));
    }
    loaded();
  };

  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <>
      <CreatePost></CreatePost>
      <AppInfiniteScroll infinite={triggerInfinite} ready={ready}>
        {data.results.map((post) => {
          if (post.share) {
            return <Post key={post.id} {...post.share} />;
          } else {
            return <Post key={post.id} {...post} />;
          }
        })}
      </AppInfiniteScroll>
    </>
  );
};
