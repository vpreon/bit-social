import { Container, Grid, GridItem } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import { PostDetail } from '../components/PostDetail';
import { Posts } from '../components/Posts';

export const HomeRoutes = () => {
  return (
    <Grid h="100%" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={2}></GridItem>
      <GridItem colSpan={8}>
        <Container backgroundColor="BlackAlpha 700">
          <Routes>
            <Route path="" element={<Posts />}></Route>
            <Route path="detail/:id" element={<PostDetail />}></Route>
          </Routes>
        </Container>
      </GridItem>
      <GridItem colSpan={2}></GridItem>
    </Grid>
  );
};
