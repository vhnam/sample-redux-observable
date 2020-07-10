import React from 'react';
import PropTypes from 'prop-types';

const Eye = ({state, ...others}) => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...others}
  >
    {'open' === state ? (
      <g fill="#000">
        <path
          d="M22.832,11.445C22.656,11.182,18.461,5,12,5C5.506,5,1.34,11.185,1.166,11.448 c-0.222,0.335-0.222,0.771,0.002,1.106C1.344,12.818,5.539,19,12,19c6.428,0,10.653-6.179,10.83-6.442 C23.056,12.222,23.057,11.782,22.832,11.445z M12,17c-4.35,0-7.635-3.596-8.753-5.002c0.658-0.832,2.075-2.425,4.024-3.59 C7.1,8.908,7,9.441,7,10c0,2.757,2.243,5,5,5s5-2.243,5-5c0-0.555-0.099-1.085-0.268-1.582c1.94,1.164,3.357,2.75,4.018,3.581 C19.623,13.407,16.324,17,12,17z"
          fill="#000"
        />
      </g>
    ) : (
      <g fill="#000000" stroke="#000000" strokeLinecap="square" strokeWidth="2">
        <path
          d="M2,12c0,0,4-6,10-6 c6,0,10,6,10,6s-4,6-10,6C6,18,2,12,2,12z"
          fill="none"
          stroke="#000000"
        />
        <circle cx="12" cy="10" fill="none" r="4" />
      </g>
    )}
  </svg>
);

Eye.propTypes = {
  state: PropTypes.oneOf(['open', 'close']),
};

export default Eye;
