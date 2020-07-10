import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

const Card = ({children}) => <div className={styles.container}>{children}</div>;

Card.propTypes = {
  children: PropTypes.oneOfType([(PropTypes.element, PropTypes.array)]),
};

export default Card;
