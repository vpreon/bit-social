import { Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/stores';
import { removePost } from '@/stores/posts';

import { deletePostsQry } from '../api/post';

export const PostExtraActions = (props: { id: number }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async () => {
    await deletePostsQry(props.id);
    dispatch(removePost(props.id));
  };

  return (
    <Menu placement="bottom-end">
      <MenuButton>
        <Icon as={IoEllipsisHorizontalSharp} />
      </MenuButton>
      <MenuList>
        <MenuItem as="a" onClick={() => handleDelete()}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
