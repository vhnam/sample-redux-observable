import React, {Suspense} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import publicRoutes from './public';
import protectedRoutes from './protected';

const PublicRoute = ({component: Component, ...others}) => (
  <Route
    {...others}
    render={(props) => {
      return <Component {...props} />;
    }}
  ></Route>
);

const ProtectedRoute = ({component: Component, ...others}) => (
  <Route
    {...others}
    render={(props) => {
      return <Component {...props} />;
    }}
  ></Route>
);

const AppRouter = () => {
  const history = createBrowserHistory();

  return (
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
};

export default AppRouter;
