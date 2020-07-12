import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../../../components/Card';
import Button, {ButtonSize, ButtonColor} from '../../../../components/Button';

import illustration from '../../../../assets/mello.svg';

import styles from './SignInForm.module.css';

const SignInForm = ({signInURL}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Card>
          <img className={styles.illustration} src={illustration} alt="Mello" />
          <p className={styles.description}>Welcome to our world!</p>

          <a href={signInURL}>
            <Button size={ButtonSize.Large} color={ButtonColor.Primary}>
              Okay, YOLO!!!
            </Button>
          </a>
        </Card>
      </div>
    </div>
  );
};

SignInForm.propTypes = {
  signInURL: PropTypes.string,
};

export default SignInForm;
