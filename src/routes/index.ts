// import { useUser } from '@/hooks/useUser';
import { publicRoutes } from '@/routes/public';

import { commonRoutes } from './common';
import { PrivateRoutes } from './private';

export const AppRoutes = [...PrivateRoutes, ...publicRoutes, ...commonRoutes];
