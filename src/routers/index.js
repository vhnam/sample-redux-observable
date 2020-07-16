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

import Loading from '../components/Loading';

const PublicRoute = ({component: Component, ...others}) => {
  const isLogin = useSelector(selectAccessToken());

  if (isLogin) {
    return <Redirect to={config.app.homepage} />;
  }

  return <Route {...others} render={(props) => <Component {...props} />} />;
};

const ProtectedRoute = ({component: Component, ...others}) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectAccessToken());

  if (isLogin) {
    return (
      <Route
        {...others}
        render={(props) => (
          <ProtectedLayout>
            <Component {...props} />
          </ProtectedLayout>
        )}
      />
    );
  }

  dispatch(signOut());

  return <Redirect to={config.app.index} />;
};

const AppRouter = () => (
  <Router history={history}>
    <Suspense fallback={<Loading />}>
      <Switch>
        {publicRoutes.map((route, index) => (
          <PublicRoute key={index} exact {...route} />
        ))}
        {protectedRoutes.map((route, index) => (
          <ProtectedRoute key={index} exact {...route} />
        ))}
      </Switch>
    </Suspense>
  </Router>
);

export default AppRouter;
