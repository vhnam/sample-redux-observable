import qs from 'qs';

import config from '../../config';

import base from './base';
import {SIGN_IN, SIGN_OUT, CHECK_AUTH} from '../constants/session';

export const signIn = (code) => {
  const {method, url} = config.apis.token;
  const {client_id, client_secret, redirect_uri} = config.env;

  const body = {
    code,
    grant_type: 'authorization_code',
    redirect_uri: redirect_uri,
  };

  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64'),
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
  return base({
    type: SIGN_OUT,
  });
};

export const checkAuthorization = () => {
  return base({
    type: CHECK_AUTH,
  });
};
