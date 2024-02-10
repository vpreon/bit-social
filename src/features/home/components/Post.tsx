import { Text, Box, Image, Button } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deletePostsQry, postQry, postReactQry } from '../api/post';
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

  const postMutation = useMutation({
    mutationFn: postQry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  if (props.share) {
    return (
      <Box maxW="600px" borderWidth="1px" borderRadius="lg">
        <p>Shared</p>
        {/* <Image src={props.share.image}></Image> */}
        <Text>{props.share.text}</Text>
        <Button onClick={() => mutation.mutate(props.id)}>Delete</Button>
        <Button onClick={() => likeMutation.mutate({ id: props.id, react: 'LIKE' })}>
          {props.reacted ? 'LIKED' : 'LIKE'}
        </Button>
        <Button onClick={() => postMutation.mutate({})}>Share</Button>

        <Comment id={props.id} comments={props.comments}></Comment>
      </Box>
    );
  } else {
    return (
      <Box maxW="600px" borderWidth="1px" borderRadius="lg">
        {props.medias.map((media) => {
          return <Image key={media.id} src={media.image as string} />;
        })}
        <Text>{props.text}</Text>
        <Button onClick={() => mutation.mutate(props.id)}>Delete</Button>
        <Button onClick={() => likeMutation.mutate({ id: props.id, react: 'LIKE' })}>
          {props.reacted ? 'LIKED' : 'LIKE'}
        </Button>
        <Button onClick={() => postMutation.mutate({ post: props.id })}>Share</Button>

        <Comment id={props.id} comments={props.comments}></Comment>
      </Box>
    );
  }
};
