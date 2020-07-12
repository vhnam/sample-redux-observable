import {combineEpics} from 'redux-observable';

import sessionEpic from './session';
import profileEpic from './profile';

const rootEpic = combineEpics(sessionEpic, profileEpic);

export default rootEpic;
