import { Text, Box, Image, Button } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deletePostsQry } from '../api/post';
import { PostProps } from '../types';

export const Post = (props: PostProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePostsQry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return (
    <Box maxW="600px" borderWidth="1px" borderRadius="lg">
      <Image src={props.image}></Image>

      <Text>{props.text}</Text>
      <Button onClick={() => mutation.mutate(props.id)}>Delete</Button>
    </Box>
  );
};
