import { Box, Icon, Text } from '@chakra-ui/react';
import { GoComment, GoSmiley, GoShare } from 'react-icons/go';

import { BasePost } from '@/types';

import { Comments } from './Comments';
import { Gallery } from './Gallery';
import { PostExtraActions } from './PostExtraActions';
import { PostUser } from './PostUser';

export const PostDetail = (props: BasePost) => {
  return (
    <Box maxW="600px" borderWidth="1px" borderRadius="lg" marginTop="20px">
      <PostUser {...props.user} created={props.created} />
      <Text margin="0px 10px 10px 10px" textAlign="justify">
        {props.text}
      </Text>
      <Gallery {...props}></Gallery>
      <Box display="flex" gap="10px" margin="10px 5px">
        <Box display="flex" alignItems="center" cursor="pointer">
          <Icon as={GoSmiley} />
          <Text marginLeft="2px">React</Text>
        </Box>

        <Box display="flex" alignItems="center" cursor="pointer">
          <Icon as={GoComment} />
          <Text marginLeft="2px">Comment</Text>
        </Box>
        <Box display="flex" alignItems="center" cursor="pointer">
          <Icon as={GoShare} />
          <Text marginLeft="2px">Share</Text>
        </Box>
        <Box display="flex" alignItems="center" cursor="pointer" marginLeft="auto">
          <PostExtraActions id={props.id}></PostExtraActions>
        </Box>
      </Box>
      <Comments id={props.id} comments={props.comments}></Comments>
    </Box>
  );
};
