import {getRequestType} from '../actions/base';
import {SIGN_IN, SIGN_OUT} from '../constants/session';
import requestStatus from '../constants/requestStatus';

const initialState = {
  data: null,
  isLoading: false,
  isFailed: false,
};

const signInRequest = getRequestType(SIGN_IN);
const signOutRequest = getRequestType(SIGN_OUT);

const sessionReducer = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case signInRequest(requestStatus.REQUEST): {
      return {
        ...state,
        data: null,
        isLoading: true,
        isFailed: false,
      };
    }
    case signInRequest(requestStatus.SUCCESS): {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isFailed: false,
      };
    }
    case signInRequest(requestStatus.FAILURE): {
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

export default sessionReducer;
