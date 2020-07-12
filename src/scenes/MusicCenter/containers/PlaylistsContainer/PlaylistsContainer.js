import React from 'react';
import {useSelector} from 'react-redux';

import {selectPlaylists} from '../../../../redux/selectors/playlists';

import Playlists from '../../components/Playlists';

const PlaylistsContainer = () => {
  const playlists = useSelector(selectPlaylists());

  return <Playlists playlists={playlists?.items} />;
};

export default PlaylistsContainer;
