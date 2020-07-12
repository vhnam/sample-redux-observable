import config from '../../config';

import base from './base';
import {GET_PROFILE} from '../constants/profile';

export const getProfile = () => {
  const {method, url} = config.apis.getProfile;

  return base({
    url,
    method,
    type: GET_PROFILE,
    authorization: true,
  });
};
