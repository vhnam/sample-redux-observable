import config from '../../config';

import base from './base';
import {GET_TRACKS, CLEAR_TRACKS} from '../constants/tracks';

export const getTracks = ({playlist_id, cursor}) => {
  const {method, url} = config.apis.getTracks;
  const endPoint = cursor ? cursor : url(playlist_id);

  return base({
    url: endPoint,
    method,
    type: GET_TRACKS,
    authorization: true,
  });
};

export const clearTracks = () => {
  return base({type: CLEAR_TRACKS});
};
