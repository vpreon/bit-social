import { Box, Icon, Text } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GoComment, GoSmiley, GoShare } from 'react-icons/go';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

import { deletePostsQry, postQry, postReactQry } from '../api/post';
import { BasePost } from '../types';

import { Comments } from './Comments';
import { Gallery } from './Gallery';
import { PostUser } from './PostUser';

export const PostDetail = (props: BasePost) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePostsQry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
  console.log('mutaion', mutation);
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

  return (
    <Box maxW="600px" borderWidth="1px" borderRadius="lg">
      <PostUser {...props.user} created={props.created} />
      <Text margin="0px 10px 10px 10px" textAlign="justify">
        {props.text}
      </Text>
      <Gallery {...props}></Gallery>

      <Box display="flex" gap="10px" margin="10px 5px">
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          onClick={() => likeMutation.mutate({ id: props.id, react: 'LIKE' })}
        >
          <Icon as={GoSmiley} />
          <Text marginLeft="2px">React</Text>
        </Box>

        <Box display="flex" alignItems="center" cursor="pointer">
          <Icon as={GoComment} />
          <Text marginLeft="2px">Comment</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          onClick={() => postMutation.mutate({ post: props.id })}
        >
          <Icon as={GoShare} />
          <Text marginLeft="2px">Share</Text>
        </Box>
        <Box display="flex" alignItems="center" cursor="pointer" marginLeft="auto">
          <Icon as={IoEllipsisHorizontalSharp} />
        </Box>
      </Box>

      <Comments id={props.id} comments={props.comments}></Comments>
    </Box>
  );
};
