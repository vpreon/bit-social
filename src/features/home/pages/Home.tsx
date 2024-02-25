import { Grid, GridItem } from '@chakra-ui/react';

import { Posts } from '../components/Posts';

export const Home = () => {
  return (
    <Grid h="100%" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={2}></GridItem>
      <GridItem colSpan={8}>
        <Posts />
      </GridItem>
      <GridItem colSpan={2}></GridItem>
    </Grid>
  );
};
