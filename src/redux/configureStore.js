import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

import rootEpic from './epics';
import rootReducer from './reducers';

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
