import React, {Fragment, useLayoutEffect} from 'react';
import {useDispatch} from 'react-redux';

import {checkAuthorization} from '../../redux/actions/session';

const ProtectedLayout = ({children}) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(checkAuthorization());
  }, [dispatch]);

  return <Fragment>{children}</Fragment>;
};

export default ProtectedLayout;
