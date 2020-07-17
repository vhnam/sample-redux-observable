import Cookie from 'js-cookie';

import {getRequestType} from '../actions/base';

import requestStatus from '../constants/requestStatus';
import {GET_PROFILE, SET_PROFILE} from '../constants/profile';
import {SIGN_OUT} from '../constants/session';

const initialState = {
  data: null,
  isLoading: false,
  isFailed: false,
};

const getProfileRequest = getRequestType(GET_PROFILE);
const setProfileRequest = getRequestType(SET_PROFILE);
const signOutRequest = getRequestType(SIGN_OUT);

const profileReducer = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case getProfileRequest(requestStatus.REQUEST): {
      return {
        ...state,
        data: null,
        isLoading: true,
        isFailed: false,
      };
    }
    case getProfileRequest(requestStatus.SUCCESS): {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isFailed: false,
      };
    }
    case getProfileRequest(requestStatus.FAILURE): {
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      };
    }
    case setProfileRequest(requestStatus.REQUEST): {
      const profile = Cookie.get('profile');

      if (!state.data && profile) {
        return {
          ...state,
          data: JSON.parse(profile),
          isLoading: false,
          isFailed: false,
        };
      }

      return state;
    }
    case signOutRequest(requestStatus.REQUEST): {
      return initialState;
    }
    default:
      return state;
  }
};

export default profileReducer;
