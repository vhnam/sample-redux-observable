import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Button.module.css';

const Button = ({children, className, size, color, ...others}) => {
  const getSize = useCallback(() => {
    switch (size) {
      case 'large': {
        return styles.sizeLarge;
      }
      default:
        return styles.sizeDefault;
    }
  }, [size]);

  const getColor = useCallback(() => {
    switch (color) {
      case 'primary': {
        return styles.colorPrimary;
      }
      default:
        return styles.colorDefault;
    }
  }, [color]);

  return (
    <button
      {...others}
      className={clsx(styles.button, getSize(), getColor(), className)}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    (PropTypes.element, PropTypes.array, PropTypes.string),
  ]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  size: PropTypes.oneOf(['large', 'default']),
  color: PropTypes.oneOf(['primary', 'default']),
};

export default Button;
