import {lazy} from 'react';

import config from '../config';

const protectedRoutes = [
  {
    path: config.app.homepage,
    component: lazy(() => import('../scenes/MusicCenter')),
  },
];

export default protectedRoutes;
