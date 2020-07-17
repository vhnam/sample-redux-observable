import React, {useContext, useCallback} from 'react';

import PlayerContext from '../../contexts/PlayerContext';

import {Pause, Play, Previous, Next} from '../../../../components/Icons';
import Portal from '../../../../components/Portal';

import styles from './Player.module.css';

const Player = () => {
  const playerContext = useContext(PlayerContext);

  const togglePlaying = useCallback(() => {
    if (playerContext.isPlaying) {
      playerContext.onPause();
    } else {
      playerContext.onResume();
    }
  }, [playerContext]);

  return (
    <Portal>
      <div className={styles.container}>
        <div className={styles.btn}>
          <Previous />
        </div>
        <div className={styles.btn} onClick={togglePlaying}>
          {playerContext.isPlaying ? <Pause /> : <Play />}
        </div>
        <div className={styles.btn}>
          <Next />
        </div>
      </div>
    </Portal>
  );
};

export default Player;
