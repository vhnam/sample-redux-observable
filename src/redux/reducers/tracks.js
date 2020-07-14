import {getRequestType} from '../actions/base';

import requestStatus from '../constants/requestStatus';
import {GET_TRACKS, CLEAR_TRACKS} from '../constants/tracks';
import {SIGN_OUT} from '../constants/session';

const initialState = {
  data: null,
  isLoading: false,
  isFailed: false,
};

const getTracksRequest = getRequestType(GET_TRACKS);
const clearTracksRequest = getRequestType(CLEAR_TRACKS);
const signOutRequest = getRequestType(SIGN_OUT);

const playlistsReducer = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case getTracksRequest(requestStatus.REQUEST): {
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      };
    }
    case getTracksRequest(requestStatus.SUCCESS): {
      const data = state.data
        ? {
            ...state.data,
            ...action.payload,
            items: [...state.data.items, ...action.payload.items],
          }
        : action.payload;

      return {
        ...state,
        data,
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
    case clearTracksRequest(requestStatus.REQUEST): {
      return initialState;
    }
    case signOutRequest(requestStatus.REQUEST): {
      return initialState;
    }
    default:
      return state;
  }
};

export default playlistsReducer;
