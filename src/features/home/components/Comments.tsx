import { Button, Textarea } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { postCommentQry } from '../api/comments';
import { CommentProps } from '../types';

type CommentsProps = {
  comments: CommentProps[];
  id: number;
};

const schema = z.object({
  text: z.string().min(1, 'Text is Required'),
});

export const Comment = (props: CommentsProps) => {
  type Form = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<Form>({ resolver: zodResolver(schema) });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: { id: number; text: string }) => {
      return postCommentQry(props.id, { text: data.text });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      reset();
    },
  });

  return (
    <div>
      <p>Comments</p>
      {props.comments.map((item) => {
        return <p key={item.id}>{item.text}</p>;
      })}
      <div>
        <form onSubmit={handleSubmit((data) => mutation.mutate({ id: props.id, text: data.text }))}>
          <Textarea {...register('text')}></Textarea>
          <Button type="submit" isDisabled={!isValid}>
            Comment
          </Button>
        </form>
      </div>
    </div>
  );
};
