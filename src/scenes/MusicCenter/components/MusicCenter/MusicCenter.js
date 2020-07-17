import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import Loading from '../../../../components/Loading';

import Playlists from '../Playlists';
import Content from '../Content';
import Player from '../Player';

import styles from './MusicCenter.module.css';

const observerOption = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};

const MusicCenter = ({
  playlists,
  onSelect,
  onFetchMore,
  selectedPlaylist,
  tracks,
  isLoading,
}) => {
  const loader = useRef(null);

  useEffect(() => {
    let observe;

    if (loader.current) {
      observe = new IntersectionObserver((entries) => {
        const target = entries[0];

        if (target.intersectionRatio >= 1) {
          onFetchMore();
        }
      }, observerOption);

      observe.observe(loader.current);
    }

    return () => {
      if (observe) {
        observe.disconnect();
      }
    };
  }, [onFetchMore]);

  return (
    <>
      <Playlists
        playlists={playlists}
        selectedPlaylist={selectedPlaylist}
        onSelect={onSelect}
      />
      <div className={styles.content}>
        {selectedPlaylist && (
          <Content
            selectedPlaylist={selectedPlaylist}
            tracks={tracks}
            onFetchMore={onFetchMore}
          />
        )}

        <div className={styles.loader} ref={loader}>
          {isLoading && <Loading />}
        </div>
      </div>

      <Player />
    </>
  );
};

MusicCenter.propTypes = {
  playlists: PropTypes.array,
  onSelect: PropTypes.func,
  selectedPlaylist: PropTypes.object,
  tracks: PropTypes.array,
  onFetchMore: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default MusicCenter;
