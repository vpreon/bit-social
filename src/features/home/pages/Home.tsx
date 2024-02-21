import { Button, Container, Grid, GridItem } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/stores';
import { increment, decrement } from '@/stores/counterSlice';

import { getPostsQry } from '../api/post';
import { CreatePost } from '../components/CreatePost';
import { Post } from '../components/Post';

export const Home = () => {
  const { data } = useQuery({ queryKey: ['posts'], queryFn: getPostsQry });

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Grid h="100%" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={2}>
        {count}
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </GridItem>
      <GridItem colSpan={8}>
        <Container backgroundColor="BlackAlpha 700">
          <CreatePost></CreatePost>
          {data && data.map((item, key) => <Post key={key} {...item} />)}
        </Container>
      </GridItem>
      <GridItem colSpan={2}>right</GridItem>
    </Grid>
  );
};
