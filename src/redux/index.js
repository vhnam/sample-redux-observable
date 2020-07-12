import Cookies from 'js-cookie';

import configureStore from './configureStore';

const access_token = Cookies.get('access_token');
const refresh_token = Cookies.get('refresh_token');

const initialState = {
  session: {
    data: {
      access_token,
      refresh_token,
      isLoading: false,
      isFailed: false,
    },
  },
};

const store = configureStore(initialState);

export default store;
