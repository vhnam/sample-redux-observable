import {getRequestType} from '../actions/base';
import {SIGN_IN} from '../constants/session';
import requestStatus from '../constants/requestStatus';

const initialState = {
  data: null,
  isLoading: false,
  isFailed: false,
};

const signInRequest = getRequestType(SIGN_IN);

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
    default:
      return state;
  }
};

export default sessionReducer;
