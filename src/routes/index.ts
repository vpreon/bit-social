// import { useUser } from '@/hooks/useUser';
import { publicRoutes } from '@/routes/public';

import { commonRoutes } from './common';
// import { privateRoutes } from './private';

export const AppRoutes = [...publicRoutes, ...commonRoutes];
