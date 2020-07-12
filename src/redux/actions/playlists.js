import config from '../../config';

import base from './base';
import {GET_PLAYLISTS} from '../constants/playlists';

export const getPlaylists = (user_id) => {
  const {method, url} = config.apis.getPlaylists;

  return base({
    url: url(user_id),
    method,
    type: GET_PLAYLISTS,
    authorization: true,
  });
};
