import {lazy} from 'react';

const protectedRoutes = [
  {
    path: '/app',
    component: lazy(() => import('../scenes/MusicCenter')),
  },
];

export default protectedRoutes;
