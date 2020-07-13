import config from '../../config';

import base from './base';
import {GET_TRACKS} from '../constants/tracks';

export const getTracks = (playlist_id) => {
  const {method, url} = config.apis.getTracks;

  return base({
    url: url(playlist_id),
    method,
    type: GET_TRACKS,
    authorization: true,
  });
};
