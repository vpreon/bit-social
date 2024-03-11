import { Container } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostsQry } from '@/api/posts';
import { AppInfiniteScroll, Fn } from '@/components/ui/AppInfiniteScroll';
import { AppDispatch, RootState } from '@/stores';
import { insertPost } from '@/stores/posts';
import { Post as TPost } from '@/types';

import { CreatePost } from './CreatePost';
import { Post } from './Post';

export const Posts = () => {
  const { data } = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();
  const [offset, setOffset] = useState(0);
  const limit = 1;

  const triggerInfinite = async (loaded: Fn, noMore: Fn) => {
    const result = await getPostsQry({ limit: limit, offset });

    if (result.results.length > 0) {
      result.results.forEach((item: TPost) => {
        dispatch(insertPost({ data: item }));
      });
    }

    if (!result.next) {
      noMore();
    } else {
      setOffset(offset + limit);
    }
    loaded();
  };

  return (
    <Container backgroundColor="BlackAlpha 700">
      <CreatePost></CreatePost>
      <AppInfiniteScroll infinite={triggerInfinite}>
        {data.results.map((post, idx) => {
          return <Post key={idx} {...post} />;
        })}
      </AppInfiniteScroll>
    </Container>
  );
};
