import {combineEpics} from 'redux-observable';

import sessionEpic from './session';

const rootEpic = combineEpics(sessionEpic);

export default rootEpic;
