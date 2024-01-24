import { lazyImport } from '@/utils/lazyImport';

const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');
const { HomeRoutes } = lazyImport(() => import('@/features/home'), 'HomeRoutes');

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
  {
    path: '/home/*',
    element: <HomeRoutes />,
  },
];
