import { Profile } from '@/features/profile';

const App = () => {
  return <div>Test is private</div>;
};

export const PrivateRoutes = [
  {
    element: <App />,
    children: [{ path: '/profile', element: <Profile /> }],
  },
];
