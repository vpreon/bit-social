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
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as ReactRouterLink } from 'react-router-dom';
import { z } from 'zod';

import { loginQry } from '../api/login';

const schema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

type Form = z.infer<typeof schema>;

export const Login = () => {
  // const [data, setData] = useState<Form>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  const processForm: SubmitHandler<Form> = async (data) => {
    await loginQry(data).then((res) => {
      console.log('data', res.data);
    });
  };

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
            <FormControl>
              <FormLabel> Email</FormLabel>
              <Input type="email" {...register('email')} />
              {errors.email?.message && <p>{errors.email.message}</p>}
            </FormControl>
            <FormControl>
              <FormLabel> Password</FormLabel>
              <Input type="password" {...register('password')} />
              {errors.password?.message && <p>{errors.password.message}</p>}
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
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </Container>
    </Flex>
  );
};
