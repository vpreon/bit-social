import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import Image from '@/assets/login-logo.svg';

import { Layout } from '../components/Layout';

export const Login = () => {
  return (
    <Layout>
      <img src={Image} />

      <FormControl>
        <FormLabel>
          <Input type="email" />
        </FormLabel>
      </FormControl>

      <h1>This is Login</h1>
    </Layout>
  );
};
