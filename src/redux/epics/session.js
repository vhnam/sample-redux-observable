import {combineEpics, ofType} from 'redux-observable';
import {map, zip} from 'rxjs/operators';
import Cookies from 'js-cookie';

import config from '../../config';

import {getRequestType} from '../actions/base';

import RequestStatus from '../constants/requestStatus';
import {CHECK_AUTH, SIGN_IN, SIGN_OUT} from '../constants/session';
import {REDIRECT} from '../constants/redirect';
import {GET_PROFILE, SET_PROFILE} from '../constants/profile';

const requestSignIn = getRequestType(SIGN_IN);
const requestSignOut = getRequestType(SIGN_OUT);
const requestCheckAuth = getRequestType(CHECK_AUTH);
const requestGetProfile = getRequestType(GET_PROFILE);
const requestSetProfile = getRequestType(SET_PROFILE);

const onSignIn = (action$, state$) =>
  action$.pipe(
    zip(
      action$.ofType(requestSignIn(RequestStatus.SUCCESS)),
      action$.ofType(requestGetProfile(RequestStatus.SUCCESS)),
    ),
    map(() => {
      const {
        access_token,
        refresh_token,
        expires_in,
      } = state$.value.session.data;

      Cookies.set('access_token', access_token, {
        expires: expires_in / 86400,
      });
      Cookies.set('refresh_token', refresh_token);

      return {type: REDIRECT, path: config.app.homepage};
    }),
  );

const onSignOut = (action$, state$) =>
  action$.pipe(
    ofType(requestSignOut(RequestStatus.REQUEST)),
    map(() => {
      Cookies.remove('access_token');
      Cookies.remove('refresh_token');

      return {type: 'RELOAD'};
    }),
  );

const onCheckAuth = (action$, state$) =>
  action$.pipe(
    ofType(requestCheckAuth(RequestStatus.REQUEST)),
    map(() => {
      if (
        !state$.value.session.data ||
        (state$.value.session.data && !state$.value.session.data.access_token)
      ) {
        return {type: requestSignOut(RequestStatus.REQUEST)};
      }

      return {type: requestSetProfile(RequestStatus.REQUEST)};
    }),
  );

export default combineEpics(onSignIn, onSignOut, onCheckAuth);
