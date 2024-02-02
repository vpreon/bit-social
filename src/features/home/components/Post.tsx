import { Text, Box, Image, Button } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deletePostsQry, postReactQry } from '../api/post';
import { PostProps } from '../types';

import { Comment } from './Comments';
export const Post = (props: PostProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePostsQry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const likeMutation = useMutation({
    mutationFn: (data: { id: number; react: string }) => {
      return postReactQry(data.id, { react: data.react });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return (
    <Box maxW="600px" borderWidth="1px" borderRadius="lg">
      <Image src={props.image}></Image>

      <Text>{props.text}</Text>
      <Button onClick={() => mutation.mutate(props.id)}>Delete</Button>
      <Button onClick={() => likeMutation.mutate({ id: props.id, react: 'LIKE' })}>
        {props.reacted ? 'LIKED' : 'LIKE'}
      </Button>

      <Comment id={props.id} comments={props.comments}></Comment>
    </Box>
  );
};
