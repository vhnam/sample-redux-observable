import qs from 'qs';

import config from '../../config';

import base from './base';
import {SIGN_IN, SIGN_OUT} from '../constants/session';

export const signIn = (code) => {
  const {method, url} = config.apis.token;

  const body = {
    code: code,
    grant_type: 'authorization_code',
    redirect_uri: config.env.redirect_uri,
  };

  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' +
      new Buffer(
        config.env.client_id + ':' + config.env.client_secret,
      ).toString('base64'),
  };

  return base({
    url,
    method,
    type: SIGN_IN,
    body: qs.stringify(body),
    headers,
  });
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
