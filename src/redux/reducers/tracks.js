import {getRequestType} from '../actions/base';

import requestStatus from '../constants/requestStatus';
import {GET_TRACKS} from '../constants/tracks';
import {SIGN_OUT} from '../constants/session';

const initialState = {
  data: null,
  isLoading: false,
  isFailed: false,
};

const getTracksRequest = getRequestType(GET_TRACKS);
const signOutRequest = getRequestType(SIGN_OUT);

const playlistsReducer = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case getTracksRequest(requestStatus.REQUEST): {
      return {
        ...state,
        data: null,
        isLoading: true,
        isFailed: false,
      };
    }
    case getTracksRequest(requestStatus.SUCCESS): {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isFailed: false,
      };
    }
    case getTracksRequest(requestStatus.FAILURE): {
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      };
    }
    case signOutRequest(requestStatus.REQUEST): {
      return initialState;
    }
    default:
      return state;
  }
};

export default playlistsReducer;
