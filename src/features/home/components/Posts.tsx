import { Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostsQry } from '@/api/posts';
import { AppInfiniteScroll } from '@/components/ui/AppInfiniteScroll';
import { AppDispatch, RootState } from '@/stores';
import { getPosts, insertPost } from '@/stores/posts';
import { Post as TPost } from '@/types';

import { CreatePost } from './CreatePost';
import { Post } from './Post';

export type Fn = () => any;

export const Posts = () => {
  const [ready, setReady] = useState(false);
  const [tt, setTT] = useState(0);

  const { data } = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPosts()).then(() => {
      setReady(true);
    });
  }, [dispatch]);

  const triggerInfinite = async (loaded: Fn, noMore: Fn) => {
    const result = await getPostsQry();
    if (result.results.length > 0) {
      result.results.forEach((item: TPost) => {
        dispatch(insertPost(item));
      });

      console.log('tt', tt);

      loaded();
      if (tt > 2) {
        noMore();
      } else {
        setTT((v) => v + 1);
      }
    }
  };

  return (
    <Container backgroundColor="BlackAlpha 700">
      <CreatePost></CreatePost>
      <AppInfiniteScroll infinite={triggerInfinite} ready={ready}>
        {data.results.map((post, idx) => {
          return <Post key={idx} {...post} />;
        })}
      </AppInfiniteScroll>
    </Container>
  );
};
