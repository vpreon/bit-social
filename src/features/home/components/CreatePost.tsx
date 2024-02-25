import { Box, Button, Textarea, Input } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod';

import { getPostQry, postQry } from '@/api/posts';
import { AppDispatch } from '@/stores';
import { insertPost } from '@/stores/posts';

import { postMediaQry } from '../api/media';

const schema = z.object({
  text: z.string().min(1, 'Text is Required'),
  medias: z.instanceof(FileList).optional(),
});

export const CreatePost = () => {
  const dispatch = useDispatch<AppDispatch>();
  type Form = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Form) => {
    const { medias, ...post } = data;
    const result = await postQry(post);

    if (medias) {
      await Promise.all(
        Array.from(medias).map((media) => {
          return postMediaQry(result.id, { image: media });
        })
      );
    }
    const getPost = await getPostQry(result.id);
    dispatch(insertPost(getPost));

    reset();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea placeholder="What's in your mind?" {...register('text')}></Textarea>
        <Input type="file" {...register('medias')} multiple />
        <Button type="submit" isDisabled={!isValid}>
          Post
        </Button>
      </form>
    </Box>
  );
};
