import { Box, Button, Textarea, Input } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { postMediaQry } from '../api/media';
import { postQry } from '../api/post';

const schema = z.object({
  text: z.string().min(1, 'Text is Required'),
  medias: z.instanceof(FileList).optional(),
});

export const CreatePost = () => {
  type Form = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postQry,
  });

  const onSubmit = async (data: Form) => {
    const { medias, ...post } = data;
    const result = await mutation.mutateAsync(post);
    console.log('medias', medias);

    if (medias) {
      await Promise.all(
        Array.from(medias).map((media) => {
          return postMediaQry(result.id, { image: media });
        })
      );
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      reset();
    }
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
