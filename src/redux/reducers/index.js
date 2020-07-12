import {combineReducers} from 'redux';

import sessionReducer from './session';
import profileReducer from './profile';
import playlistsReducer from './playlists';

const rootReducer = combineReducers({
  session: sessionReducer,
  profile: profileReducer,
  playlists: playlistsReducer,
});

export default rootReducer;
