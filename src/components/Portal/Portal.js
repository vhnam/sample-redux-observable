import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({children}) => {
  const mount = document.getElementById('portal-root');
  const element = document.createElement('div');

  useEffect(() => {
    mount.appendChild(element);

    return () => mount.removeChild(element);
  }, [element, mount]);

  return createPortal(children, element);
};

Portal.propTypes = {
  children: PropTypes.element,
};

export default Portal;
