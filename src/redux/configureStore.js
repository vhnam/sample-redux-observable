import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import thunk from 'redux-thunk';

import rootEpic from './epics';
import rootReducer from './reducers';

import redirectMiddleware from './middlewares/redirect';

const configureStore = (initialState = {}) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const epicMiddleware = createEpicMiddleware();

  const middlewares = [thunk, epicMiddleware, redirectMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
