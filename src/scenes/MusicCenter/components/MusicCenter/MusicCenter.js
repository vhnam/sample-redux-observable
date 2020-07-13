import React from 'react';
import PropTypes from 'prop-types';

import Playlists from '../../components/Playlists';

import Content from '../Content';

import styles from './MusicCenter.module.css';

const MusicCenter = ({playlists, onSelect, selectedPlaylist, tracks}) => {
  return (
    <div>
      <Playlists
        playlists={playlists}
        selectedPlaylist={selectedPlaylist}
        onSelect={onSelect}
      />
      <div className={styles.content}>
        {selectedPlaylist && (
          <Content selectedPlaylist={selectedPlaylist} tracks={tracks} />
        )}
      </div>
    </div>
  );
};

MusicCenter.propTypes = {
  playlists: PropTypes.array,
  onSelect: PropTypes.func,
  selectedPlaylist: PropTypes.object,
  tracks: PropTypes.array,
};

export default MusicCenter;
