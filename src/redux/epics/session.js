import {combineEpics} from 'redux-observable';
import {filter, mergeMap} from 'rxjs/operators';

import {getRequestType} from '../actions/base';
import {SIGN_IN} from '../constants/session';
import RequestStatus from '../constants/requestStatus';

const requestSignIn = getRequestType(SIGN_IN);

const onSignIn = (action$, state$) =>
  action$.pipe(
    filter((action) => action.type === requestSignIn(RequestStatus.REQUEST)),
    mergeMap((action) => {
      console.log(action);

      return {type: requestSignIn(RequestStatus.SUCCESS)};
    }),
  );

export default combineEpics(onSignIn);
