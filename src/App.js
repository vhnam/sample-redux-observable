import React from 'react';
import Cookies from 'js-cookie';
import {Provider} from 'react-redux';

import AppRouter from './routers';
import configureStore from './redux/configureStore';

const accessToken = Cookies.get('accessToken');
const refreshToken = Cookies.set('refreshToken');

const initialState = {
  auth: {
    accessToken,
    refreshToken,
  },
};
const store = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
