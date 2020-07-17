import React, {useEffect, useCallback, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import PlayerContext from '../../contexts/PlayerContext';

import {selectProfile} from '../../../../redux/selectors/profile';
import {getPlaylists} from '../../../../redux/actions/playlists';
import {selectPlaylists} from '../../../../redux/selectors/playlists';
import {getTracks, clearTracks} from '../../../../redux/actions/tracks';
import {selectTracks} from '../../../../redux/selectors/tracks';

import useToggle from '../../../../hooks/useToggle';

import MusicCenter from '../../components/MusicCenter';

const MusicCenterContainer = () => {
  const dispatch = useDispatch();
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const togglePlaying = useToggle();

  const profile = useSelector(selectProfile());
  const playlists = useSelector(selectPlaylists());
  const tracks = useSelector(selectTracks());

  const audioObject = useRef();

  const handleSelect = useCallback(
    (playlist_id) => {
      const p = playlists.items.find((playlist) => playlist.id === playlist_id);
      setSelectedPlaylist(p);
      dispatch(clearTracks()).then(() => {
        dispatch(getTracks({playlist_id}));
      });
    },
    [dispatch, playlists],
  );

  const handleFetchMore = useCallback(() => {
    if (tracks.data && !tracks.isLoading && tracks.data.next) {
      dispatch(
        getTracks({
          cursor: tracks.data.next,
        }),
      );
    }
  }, [dispatch, tracks]);

  const handlePlay = useCallback(
    (track) => {
      audioObject.current = new Audio(track.preview_url);
      audioObject.current.play();
      togglePlaying.setActive();
    },
    [togglePlaying],
  );

  const handlePause = useCallback(() => {
    audioObject.current.pause();
    togglePlaying.setInActive();
  }, [togglePlaying]);

  const handleResume = useCallback(() => {
    audioObject.current.play();
    togglePlaying.setActive();
  }, [togglePlaying]);

  useEffect(() => {
    if (profile) {
      dispatch(getPlaylists(profile.id));
    }
  }, [dispatch, profile]);

  return (
    <PlayerContext.Provider
      value={{
        isPlaying: togglePlaying.isActive,
        onPlay: handlePlay,
        onPause: handlePause,
        onResume: handleResume,
      }}
    >
      <MusicCenter
        selectedPlaylist={selectedPlaylist}
        tracks={tracks.data ? tracks.data.items : []}
        playlists={playlists ? playlists.items : []}
        onSelect={handleSelect}
        onFetchMore={handleFetchMore}
        isLoading={tracks.isLoading || !!(tracks.data && tracks.data.next)}
      />
    </PlayerContext.Provider>
  );
};

export default MusicCenterContainer;
