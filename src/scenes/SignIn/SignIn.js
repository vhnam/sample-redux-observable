import React from 'react';

import useToggle from '../../hooks/useToggle';

import Card from '../../components/Card';
import TextField from '../../components/TextField';
import Button, {ButtonSize, ButtonColor} from '../../components/Button';
import {Account, Eye} from '../../components/Icons';

import illustration from '../../assets/mello.svg';

import styles from './SignIn.module.css';

const SignIn = () => {
  const toggleSeePassword = useToggle();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Card>
          <img className={styles.illustration} src={illustration} alt="Mello" />
          <p className={styles.description}>
            Please enter your Spotify account
          </p>
          <form noValidate={true}>
            <TextField label="Username" name="username" icon={<Account />} />
            <TextField
              label="Password"
              type={toggleSeePassword.isActive ? 'text' : 'password'}
              name="password"
              icon={
                <Eye
                  state={toggleSeePassword.isActive ? 'open' : 'close'}
                  onClick={() => toggleSeePassword.toggle()}
                />
              }
            />
            <Button size={ButtonSize.Large} color={ButtonColor.Primary}>
              Sign in
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
