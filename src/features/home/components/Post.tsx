import { Text, Box, Image } from '@chakra-ui/react';

import { Post as PostProps } from '../types';

export const Post = (props: PostProps) => {
  return (
    <Box maxW="600px" borderWidth="1px" borderRadius="lg">
      <Image src={props.image}></Image>

      <Text>{props.text}</Text>
    </Box>
  );
};
