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
import { Link as ReactRouterLink } from 'react-router-dom';

export const Login = () => {
  return (
    <Flex justify="center" alignItems="center" height="100%">
      <Container mb={100}>
        <Box textAlign="center">
          <Text fontSize="30px" fontWeight={600}>
            Log in
          </Text>
          <p>Sign in to connect with friends</p>
        </Box>

        <Box marginY="20px">
          <FormControl>
            <FormLabel> Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <FormLabel> Password</FormLabel>
            <Input type="password" />
          </FormControl>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Checkbox>Remember me</Checkbox>
          <Link as={ReactRouterLink} to="/auth/forgot-password">
            Forgot Password?
          </Link>
        </Box>
        <Stack marginTop="20px">
          <Button>Login</Button>
        </Stack>
      </Container>
    </Flex>
  );
};
