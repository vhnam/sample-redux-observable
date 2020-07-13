import React, {useEffect, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectProfile} from '../../../../redux/selectors/profile';
import {getPlaylists} from '../../../../redux/actions/playlists';
import {selectPlaylists} from '../../../../redux/selectors/playlists';
import {getTracks} from '../../../../redux/actions/tracks';
import {selectTracks} from '../../../../redux/selectors/tracks';

import MusicCenter from '../../components/MusicCenter';

const MusicCenterContainer = () => {
  const dispatch = useDispatch();
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const profile = useSelector(selectProfile());
  const playlists = useSelector(selectPlaylists());
  const tracks = useSelector(selectTracks());

  const handleSelect = useCallback(
    (playlist_id) => {
      const p = playlists.items.find((playlist) => playlist.id === playlist_id);
      setSelectedPlaylist(p);
      dispatch(getTracks(playlist_id));
    },
    [dispatch, playlists],
  );

  useEffect(() => {
    dispatch(getPlaylists(profile.id));
  }, [dispatch, profile.id]);

  return (
    <div>
      <MusicCenter
        selectedPlaylist={selectedPlaylist}
        tracks={tracks ? tracks.items : []}
        playlists={playlists ? playlists.items : []}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default MusicCenterContainer;
