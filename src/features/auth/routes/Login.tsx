import Image from '@/assets/login-logo.svg';

import { Layout } from '../components/Layout';

export const Login = () => {
  return (
    <Layout>
      <img src={Image} />

      <h1>This is Login</h1>
    </Layout>
  );
};
