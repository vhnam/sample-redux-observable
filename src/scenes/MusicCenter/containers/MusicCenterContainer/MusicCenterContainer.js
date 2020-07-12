import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectProfile} from '../../../../redux/selectors/profile';
import {getPlaylists} from '../../../../redux/actions/playlists';

import MusicCenter from '../../components/MusicCenter';

const MusicCenterContainer = () => {
  const dispatch = useDispatch();

  const profile = useSelector(selectProfile());

  useLayoutEffect(() => {
    dispatch(getPlaylists(profile.id));
  }, [dispatch, profile.id]);

  return (
    <div>
      <MusicCenter />
    </div>
  );
};

export default MusicCenterContainer;
