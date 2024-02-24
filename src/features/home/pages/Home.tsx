import { Container, Grid, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/stores';
import { getPosts } from '@/stores/posts';

import { CreatePost } from '../components/CreatePost';
import { Post } from '../components/Post';

export const Home = () => {
  const { loading, data } = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grid h="100%" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={2}>{loading && <div>Loading...</div>}</GridItem>
      <GridItem colSpan={8}>
        <Container backgroundColor="BlackAlpha 700">
          <CreatePost></CreatePost>
          {data.results.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </Container>
      </GridItem>
      <GridItem colSpan={2}>right</GridItem>
    </Grid>
  );
};
