import { Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/stores';
import { getPosts } from '@/stores/posts';

import { CreatePost } from './CreatePost';
import { Post } from './Post';

export const Posts = () => {
  const { data } = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container backgroundColor="BlackAlpha 700">
      <CreatePost></CreatePost>
      {data.results.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </Container>
  );
};
