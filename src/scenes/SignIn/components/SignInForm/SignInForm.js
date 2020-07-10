import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../../../components/Card';
import Button, {ButtonSize, ButtonColor} from '../../../../components/Button';

import illustration from '../../../../assets/mello.svg';

import styles from './SignInForm.module.css';

const SignInForm = ({onSignIn}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Card>
          <img className={styles.illustration} src={illustration} alt="Mello" />
          <p className={styles.description}>Welcome to our world!</p>

          <Button
            size={ButtonSize.Large}
            color={ButtonColor.Primary}
            onClick={onSignIn}
          >
            Okay, YOLO!!!
          </Button>
        </Card>
      </div>
    </div>
  );
};

SignInForm.propTypes = {
  onSignIn: PropTypes.func,
};

export default SignInForm;
