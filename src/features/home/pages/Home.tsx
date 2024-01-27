import { Grid, GridItem } from '@chakra-ui/react';

import { Posts } from '../components/posts';

export const Home = () => {
  const properties = [
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    },
  ];

  return (
    <Grid h="100%" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={2}>left</GridItem>
      <GridItem colSpan={8}>
        {properties.map((item, key) => (
          <Posts key={key} {...item} />
        ))}
      </GridItem>
      <GridItem colSpan={2}>right</GridItem>
    </Grid>
  );
};
