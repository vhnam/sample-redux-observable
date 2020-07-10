import config from '../../config';

import {getRequestType} from './base';
import requestStatus from '../constants/requestStatus';
import {SIGN_IN, SIGN_OUT} from '../constants/session';

import generateRandomString from '../../helpers/generateRandomString';

export const signIn = () => {
  const scope = 'user-read-private user-read-email';
  const state = generateRandomString(16);
  const requestSignIn = getRequestType(SIGN_IN);

  console.log('hmmm');

  return {
    type: requestSignIn(requestStatus.REQUEST),
    payload: {
      client_id: config.env.client_id,
      response_type: 'code',
      redirect_uri: config.env.redirect_uri,
      scope,
      state,
    },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
