import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SignIn from './scenes/SignIn';
import MusicCenter from './scenes/MusicCenter';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={'/'} component={SignIn} />
        <Route exact={true} path={'/app'} component={MusicCenter} />
      </Switch>
    </Router>
  );
}

export default App;
