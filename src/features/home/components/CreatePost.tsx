import { Box, Button, Textarea } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const CreatePost = () => {
  const schema = z.object({
    text: z.string().min(1, 'Text is Required'),
  });

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  const submitPost = () => {
    console.log('post');
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(submitPost)}>
        <Textarea placeholder="What's in your mind?" {...register('text')}></Textarea>
        <Button type="submit">Post</Button>
      </form>
    </Box>
  );
};
