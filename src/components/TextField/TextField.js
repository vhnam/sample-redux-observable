import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './TextField.module.css';

const TextField = ({label, classes, type, icon, ...others}) => {
  return (
    <div className={styles.container}>
      <label className={clsx(styles.label, classes?.label)}>{label}</label>
      <input
        {...others}
        className={clsx(styles.input, classes?.input, {
          [styles.hasIcon]: icon,
        })}
        type={type || 'text'}
        spellCheck={false}
        autoComplete="off"
      />
      {icon && <span className={styles.icon}>{icon}</span>}
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.object,
  type: PropTypes.string,
  icon: PropTypes.element,
};

export default TextField;
