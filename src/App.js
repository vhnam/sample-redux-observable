import React from 'react';
import {Provider} from 'react-redux';
import ReactNotification from 'react-notifications-component';

import AppRouter from './routers';
import store from './redux';

const App = () => (
  <Provider store={store}>
    <AppRouter />
    <ReactNotification />
  </Provider>
);

export default App;
