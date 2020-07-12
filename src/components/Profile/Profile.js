import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {selectProfile} from '../../redux/selectors/profile';

import {Account} from '../Icons';

import styles from './Profile.module.css';

const Profile = ({onSignOut}) => {
  const profile = useSelector(selectProfile());

  return (
    <nav className={styles.container}>
      <div className={styles.profile}>
        <Account />
        <span className={styles.displayName}>{profile.display_name}</span>
        <span
          className={styles.btnLogout}
          onClick={onSignOut}
          onTouchEnd={onSignOut}
        >
          Sign out
        </span>
      </div>
    </nav>
  );
};

Profile.propTypes = {
  onSignOut: PropTypes.func,
};

export default Profile;
