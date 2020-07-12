import {combineEpics} from 'redux-observable';
import {filter, map} from 'rxjs/operators';
import Cookies from 'js-cookie';

import config from '../../config';

import {getRequestType} from '../actions/base';

import RequestStatus from '../constants/requestStatus';
import {SIGN_IN} from '../constants/session';
import {REDIRECT} from '../constants/redirect';

const requestSignIn = getRequestType(SIGN_IN);

const onSignIn = (action$, state$) =>
  action$.pipe(
    filter((action) => action.type === requestSignIn(RequestStatus.SUCCESS)),
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

export default combineEpics(onSignIn);
