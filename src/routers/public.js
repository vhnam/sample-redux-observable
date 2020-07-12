import {lazy} from 'react';

import config from '../config';

const publicRoutes = [
  {
    path: config.app.index,
    component: lazy(() => import('../scenes/SignIn')),
  },
];

export default publicRoutes;
