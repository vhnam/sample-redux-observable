import {combineEpics, ofType} from 'redux-observable';
import {map} from 'rxjs/operators';
import Cookies from 'js-cookie';

import {getRequestType} from '../actions/base';

import RequestStatus from '../constants/requestStatus';
import {GET_PROFILE, SET_PROFILE} from '../constants/profile';

const requestGetProfile = getRequestType(GET_PROFILE);
const requestSetProfile = getRequestType(SET_PROFILE);

const onSetProfile = (action$, state$) =>
  action$.pipe(
    ofType(requestGetProfile(RequestStatus.SUCCESS)),
    map(() => {
      const profile = state$.value.profile.data;

      Cookies.set('profile', profile);

      return {type: requestSetProfile(RequestStatus.SUCCESS)};
    }),
  );

export default combineEpics(onSetProfile);
