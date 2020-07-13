import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Glider from 'react-glider';
import clsx from 'clsx';

import 'glider-js/glider.min.css';
import styles from './Playlists.module.css';

const Playlists = ({playlists, onSelect, selectedPlaylist}) => {
  const gliderRef = useRef(null);

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      gliderRef.current.destroy();
    };
  }, []);

  return (
    <div>
      {playlists.length > 0 && (
        <Glider ref={gliderRef} slidesToScroll={5} slidesToShow={5}>
          {playlists.map((item) => {
            const img = item.images[0];

            return (
              <div
                key={item.id}
                className={styles.playlist}
                onClick={() => onSelect(item.id)}
              >
                <img
                  className={clsx(styles.image, {
                    [styles.selected]:
                      selectedPlaylist && item.id === selectedPlaylist.id,
                  })}
                  src={img.url}
                  alt={item.name}
                />
                <div className={styles.name}>{item.name}</div>
              </div>
            );
          })}
        </Glider>
      )}
    </div>
  );
};

Playlists.propTypes = {
  playlists: PropTypes.array,
  onSelect: PropTypes.func,
  selectedPlaylist: PropTypes.object,
};

export default Playlists;
