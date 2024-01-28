import { Container, Grid, GridItem } from '@chakra-ui/react';

import { CreatePost } from '../components/CreatePost';
import { Posts } from '../components/Posts';

export const Home = () => {
  const properties = [
    {
      image: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      text: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
      id: 1,
      created: '2024-01-01',
      updated: '2024-01-01',
    },
  ];

  return (
    <Grid h="100%" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={2}>left</GridItem>
      <GridItem colSpan={8}>
        <Container backgroundColor="BlackAlpha 700">
          <CreatePost></CreatePost>
          {properties.map((item, key) => (
            <Posts key={key} {...item} />
          ))}
        </Container>
      </GridItem>
      <GridItem colSpan={2}>right</GridItem>
    </Grid>
  );
};
