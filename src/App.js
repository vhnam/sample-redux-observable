import React from 'react';
import {Provider} from 'react-redux';
import Cookies from 'js-cookie';
import ReactNotification from 'react-notifications-component';

import AppRouter from './routers';
import configureStore from './redux/configureStore';

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

const App = () => (
  <Provider store={store}>
    <AppRouter />
    <ReactNotification />
  </Provider>
);

export default App;
