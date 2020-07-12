import React, {useCallback, useEffect, useMemo} from 'react';
import {useDispatch} from 'react-redux';

import config from '../../../../config';

import generateRandomString from '../../../../helpers/generateRandomString';
import buildQueryString from '../../../../helpers/buildQueryString';
import {addSnackBar, SnackBarType} from '../../../../helpers/snackBar';

import {signIn} from '../../../../redux/actions/session';

import SignInForm from '../../components/SignInForm';

const SignInContainer = () => {
  const dispatch = useDispatch();

  const SIGN_IN_URL = useMemo(() => {
    const {url} = config.apis.authorize;
    const scope = 'user-read-private user-read-email';
    const state = generateRandomString(16);
    const query = buildQueryString({
      client_id: config.env.client_id,
      response_type: 'code',
      redirect_uri: config.env.redirect_uri,
      scope,
      state,
      show_dialog: 'true',
    });

    return `${url}${query}`;
  }, []);

  const handleSignInFailed = useCallback(() => {
    addSnackBar({
      message: 'Sign in failed!',
      type: SnackBarType.Danger,
    });
  }, []);

  const handleSignInSuccess = useCallback(
    (code) => {
      dispatch(signIn(code)).then(() => {
        addSnackBar({
          message: 'Sign in successfully!',
          type: SnackBarType.Success,
        });
      });
    },
    [dispatch],
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');
    const state = urlParams.get('state');

    if ((code || error) && state) {
      if (code) {
        handleSignInSuccess(code);
      } else if (error) {
        handleSignInFailed();
      }
    }
  }, [handleSignInSuccess, handleSignInFailed]);

  return <SignInForm signInURL={SIGN_IN_URL} />;
};

export default SignInContainer;
