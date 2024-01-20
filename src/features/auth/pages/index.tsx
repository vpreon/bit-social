import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout';

import { ForgotPassword } from './ForgotPassword';
import { Login } from './Login';

export const AuthRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="forgot-password" element={<ForgotPassword />}></Route>
      </Routes>
    </Layout>
  );
};
