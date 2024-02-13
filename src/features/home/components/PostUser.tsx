import { Avatar, Box, Text } from '@chakra-ui/react';
import moment from 'moment';

import { User } from '../../profile/types';

type PostUserProps = User & {
  created: string;
};

export const PostUser = (props: PostUserProps) => {
  const formatCreated = moment(props.created).fromNow();

  return (
    <Box display="flex" justifyContent={'space-between'} p="10px 10px 10px 5px">
      <Box display="flex">
        <Avatar name={`${props.first_name} ${props.last_name}`} src={props.profile_image} />
        <Text pl="5px" textTransform="capitalize">{`${props.first_name} ${props.last_name}`}</Text>
      </Box>
      <Box>
        <Text>{formatCreated}</Text>
      </Box>
    </Box>
  );
};
