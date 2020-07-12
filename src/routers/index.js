import React, {Suspense} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Cookies from 'js-cookie';

import config from '../config';

import history from '../helpers/history';
import {addSnackBar, SnackBarType} from '../helpers/snackBar';

import {selectAccessToken} from '../redux/selectors/session';

import publicRoutes from './public';
import protectedRoutes from './protected';

const PublicRoute = ({component: Component, ...others}) => (
  <Route
    {...others}
    render={(props) => {
      return <Component {...props} />;
    }}
  />
);

const ProtectedRoute = ({component: Component, ...others}) => {
  const isLogin = useSelector(selectAccessToken());

  if (isLogin) {
    return (
      <Route
        {...others}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  }

  addSnackBar({
    message: 'Invalid session.',
    type: SnackBarType.Danger,
  });

  Cookies.remove('refresh_token');

  return <Redirect to={config.app.index} />;
};

const AppRouter = () => (
  <Router history={history}>
    <Suspense fallback={<div>LOADING</div>}>
      <Switch>
        {publicRoutes.map((route, index) => {
          return <PublicRoute key={index} exact {...route} />;
        })}
        {protectedRoutes.map((route, index) => {
          return <ProtectedRoute key={index} exact {...route} />;
        })}
      </Switch>
    </Suspense>
  </Router>
);

export default AppRouter;
