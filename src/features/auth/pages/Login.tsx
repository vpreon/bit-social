import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Container,
  Box,
  Stack,
  Button,
  Text,
  Checkbox,
  Link,
  FormErrorMessage,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { useUser } from '@/hooks/useUser';
import storage from '@/utils/storage';

import { loginQry } from '../api/login';

const schema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

type Form = z.infer<typeof schema>;

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  const { isLoggedin, user } = useUser();
  console.log('isLoggedin, user', isLoggedin, user);

  const processForm: SubmitHandler<Form> = async (data) => {
    await loginQry({ ...data }).then((res) => {
      const data = res.data;

      storage.setToken(data.key);
      navigate('/home');
    });
  };
  console.log('here');

  return (
    <Flex justify="center" alignItems="center" height="100%">
      <Container mb={100}>
        <Box textAlign="center">
          <Text fontSize="30px" fontWeight={600}>
            Log in
          </Text>
          <p>Sign in to connect with friends</p>
        </Box>

        <form onSubmit={handleSubmit(processForm)}>
          <Box marginY="20px">
            <FormControl isInvalid={!!errors.email}>
              <FormLabel> Email</FormLabel>
              <Input type="text" {...register('email')} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel> Password</FormLabel>
              <Input type="password" {...register('password')} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Checkbox>Remember me</Checkbox>
            <Link as={ReactRouterLink} to="/auth/forgot-password">
              Forgot Password?
            </Link>
          </Box>
          <Stack marginTop="20px">
            <Button type="submit">Login</Button>
          </Stack>
        </form>
      </Container>
    </Flex>
  );
};
