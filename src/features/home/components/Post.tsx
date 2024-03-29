import { Box, Icon, Text } from '@chakra-ui/react';
import { GoComment, GoSmiley, GoShare } from 'react-icons/go';
import { useLocation, useNavigate } from 'react-router-dom';

import { BasePost } from '@/types';

import { Comments } from './Comments';
import { Gallery } from './Gallery';
import { PostExtraActions } from './PostExtraActions';
import { PostUser } from './PostUser';

export const Post = (props: BasePost) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const excludedElements = ['#react', '#comment', '#share', '#extra-actions', '#comments'];
    const closestElements = excludedElements.map(
      (item) => !!(e.target as HTMLElement).closest(item)
    );
    if (!closestElements.some((item) => item) && location.pathname === '/home') {
      navigate(`/home/detail/${props.id}`);
    }
  };

  const handleReact = () => {
    console.log('reacted');
  };

  return (
    <Box maxW="600px" borderWidth="1px" borderRadius="lg" marginTop="20px" onClick={handleClick}>
      <PostUser {...props.user} created={props.created} />
      <Text margin="0px 10px 10px 10px" textAlign="justify">
        {props.text}
      </Text>
      <Gallery {...props}></Gallery>
      <Box display="flex" gap="10px" margin="10px 5px">
        <Box id="react" display="flex" alignItems="center" cursor="pointer" onClick={handleReact}>
          <Icon as={GoSmiley} />
          <Text marginLeft="2px">React</Text>
        </Box>

        <Box id="comment" display="flex" alignItems="center" cursor="pointer">
          <Icon as={GoComment} />
          <Text marginLeft="2px">Comment</Text>
        </Box>
        <Box id="share" display="flex" alignItems="center" cursor="pointer">
          <Icon as={GoShare} />
          <Text marginLeft="2px">Share</Text>
        </Box>
        <Box
          id="extra-actions"
          display="flex"
          alignItems="center"
          cursor="pointer"
          marginLeft="auto"
        >
          <PostExtraActions id={props.id}></PostExtraActions>
        </Box>
      </Box>

      <Comments id={props.id} comments={props.comments}></Comments>
    </Box>
  );
};
