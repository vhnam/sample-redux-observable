import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import Glider from 'react-glider';
import clsx from 'clsx';

import Image from '../../../../components/Image';

import 'glider-js/glider.min.css';
import styles from './Playlists.module.css';

const Playlists = ({playlists, onSelect, selectedPlaylist}) => {
  const gliderRef = useRef();

  return (
    <>
      {playlists.length > 0 && (
        <Glider ref={gliderRef} slidesToScroll={5} slidesToShow={5}>
          {playlists.map((item) => {
            const img = item.images[0];

            return (
              <div
                key={item.id}
                className={styles.playlist}
                onClick={() => onSelect(item.id)}
                title={item.name}
              >
                <Image
                  className={clsx(styles.image, {
                    [styles.selected]:
                      selectedPlaylist && item.id === selectedPlaylist.id,
                  })}
                  src={img.url}
                  alt={item.name}
                  height={160}
                  width={160}
                />
                <div
                  className={clsx(styles.name, {
                    [styles.selected]:
                      selectedPlaylist && item.id === selectedPlaylist.id,
                  })}
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </Glider>
      )}
    </>
  );
};

Playlists.propTypes = {
  playlists: PropTypes.array,
  onSelect: PropTypes.func,
  selectedPlaylist: PropTypes.object,
};

export default Playlists;
