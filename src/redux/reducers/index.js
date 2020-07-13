import {combineReducers} from 'redux';

import sessionReducer from './session';
import profileReducer from './profile';
import playlistsReducer from './playlists';
import tracksReducer from './tracks';

const rootReducer = combineReducers({
  session: sessionReducer,
  profile: profileReducer,
  playlists: playlistsReducer,
  tracks: tracksReducer,
});

export default rootReducer;
