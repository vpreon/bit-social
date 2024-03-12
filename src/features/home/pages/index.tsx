import { Routes, Route } from 'react-router-dom';

import { PostDetail } from '../components/PostDetail';

import { Home } from './Home';

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="detail/:id" element={<PostDetail />}></Route>
    </Routes>
  );
};
