import { CloseIcon } from '@chakra-ui/icons';
import { Button, Textarea } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Comment as CommentProps } from '@/types';

import { deleteCommentQry, postCommentQry } from '../api/comments';

type CommentsProps = {
  comments: CommentProps[];
  id: number;
};

const schema = z.object({
  text: z.string().min(1, 'Text is Required'),
});

export const Comments = (props: CommentsProps) => {
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

  const removeCommentMutation = useMutation({
    mutationFn: (data: { id: number; commentId: number }) => {
      return deleteCommentQry(data.id, data.commentId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      reset();
    },
  });

  return (
    <div id="comments">
      <p>Comments</p>
      {props.comments.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.text}</p>
            <CloseIcon
              onClick={() => removeCommentMutation.mutate({ id: props.id, commentId: item.id })}
            />
          </div>
        );
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
