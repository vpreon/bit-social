import { Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

import { deletePostsQry } from '../api/post';

export const PostExtraActions = (props: { id: number }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePostsQry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return (
    <Menu placement="bottom-end">
      <MenuButton>
        <Icon as={IoEllipsisHorizontalSharp} />
      </MenuButton>
      <MenuList>
        <MenuItem as="a" onClick={() => mutation.mutate(props.id)}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
