import { Box, Button, Textarea } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { postQry } from '../api/post';

const schema = z.object({
  text: z.string().min(1, 'Text is Required'),
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      reset();
    },
  });

  return (
    <Box>
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))}>
        <Textarea placeholder="What's in your mind?" {...register('text')}></Textarea>
        <Button type="submit" isDisabled={!isValid}>
          Post
        </Button>
      </form>
    </Box>
  );
};
