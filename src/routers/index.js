import React, {Suspense} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import config from '../config';

import history from '../helpers/history';

import {signOut} from '../redux/actions/session';
import {selectAccessToken} from '../redux/selectors/session';

import publicRoutes from './public';
import protectedRoutes from './protected';
import ProtectedLayout from '../layouts/ProtectedLayout';

const PublicRoute = ({component: Component, ...others}) => (
  <Route
    {...others}
    render={(props) => {
      return <Component {...props} />;
    }}
  />
);

const ProtectedRoute = ({component: Component, ...others}) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectAccessToken());

  if (isLogin) {
    return (
      <Route
        {...others}
        render={(props) => {
          return (
            <ProtectedLayout>
              <Component {...props} />
            </ProtectedLayout>
          );
        }}
      />
    );
  }

  dispatch(signOut());

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
