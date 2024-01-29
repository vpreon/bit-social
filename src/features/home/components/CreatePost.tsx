import { Box, Button, Textarea } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { postQry } from '../api/post';

export const CreatePost = () => {
  const schema = z.object({
    text: z.string().min(1, 'Text is Required'),
  });

  type Form = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postQry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const submitPost: SubmitHandler<Form> = (data) => {
    const result = mutation.mutateAsync(data);
    console.log('result', result);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(submitPost)}>
        {isValid ? 'valid' : 'invalid'}
        <Textarea placeholder="What's in your mind?" {...register('text')}></Textarea>
        <Button type="submit" isDisabled={!isValid}>
          Post
        </Button>
      </form>
    </Box>
  );
};
