import React, {useCallback, useContext} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import PlayerContext from '../../contexts/PlayerContext';

import formatDuration from '../../../../helpers/formatDuration';

import {AudioTrack} from '../../../../components/Icons';

import styles from './Content.module.css';
import Image from '../../../../components/Image';

const Content = ({selectedPlaylist, tracks}) => {
  const playerContext = useContext(PlayerContext);

  const renderArtists = useCallback((artists) => {
    const arr = [];

    artists.forEach((artist) => {
      arr.push(artist.name);
    });

    return arr.join(', ');
  }, []);

  const handlePlay = useCallback(
    (track) => {
      return () => playerContext.onPlay(track);
    },
    [playerContext],
  );

  return (
    <div className={styles.container}>
      <div className={styles.overview}>
        <span className={styles.name}>{selectedPlaylist.name}</span>
        <span className={styles.total}>
          <AudioTrack />
          {selectedPlaylist.tracks.total}
        </span>
      </div>

      <ul className={styles.list}>
        {tracks
          .filter((t) => t.track !== undefined)
          .map((t, index) => {
            const {track} = t;
            const {album} = track;

            return (
              <li
                key={`${track.id}:${index}`}
                className={clsx(styles.item, {
                  [styles.isLocal]: t.is_local,
                })}
                onClick={handlePlay(track)}
              >
                <span className={styles.itemInformation}>
                  {album.images.length > 0 ? (
                    <Image
                      className={styles.trackImage}
                      width={48}
                      height={48}
                      src={album.images[0].url}
                      alt={album.name}
                    />
                  ) : (
                    <div className={styles.trackImage} />
                  )}
                  <span className={styles.trackInformation}>
                    <span className={styles.trackName}>{track.name}</span>
                    <span className={styles.trackArtists}>
                      {renderArtists(track.artists)}
                    </span>
                  </span>
                </span>
                <span>{formatDuration(track.duration_ms)}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Content.propTypes = {
  selectedPlaylist: PropTypes.object,
  tracks: PropTypes.array,
};

export default Content;
