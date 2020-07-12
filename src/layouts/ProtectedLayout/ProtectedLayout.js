import React, {useCallback, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {checkAuthorization, signOut} from '../../redux/actions/session';
import {selectProfile} from '../../redux/selectors/profile';

import Profile from '../../components/Profile';

const ProtectedLayout = ({children}) => {
  const dispatch = useDispatch();

  const profile = useSelector(selectProfile());

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  useLayoutEffect(() => {
    dispatch(checkAuthorization());
  }, [dispatch]);

  return (
    <div>
      {profile && <Profile onSignOut={handleSignOut} />}

      {children}
    </div>
  );
};

export default ProtectedLayout;
