import {lazy} from 'react';

const publicRoutes = [
  {
    path: '/',
    component: lazy(() => import('../scenes/SignIn')),
  },
];

export default publicRoutes;
