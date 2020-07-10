import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {signIn} from '../../../../redux/actions/session';

import SignInForm from '../../components/SignInForm';

const SignInContainer = () => {
  const dispatch = useDispatch();

  const handleSignIn = useCallback(() => {
    dispatch(signIn());
  }, [dispatch]);

  return <SignInForm onSignIn={handleSignIn} />;
};

export default SignInContainer;
