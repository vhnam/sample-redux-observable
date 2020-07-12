import history from '../../helpers/history';
import {REDIRECT} from '../constants/redirect';

const redirectMiddware = (store) => {
  return (next) => (action) => {
    const {type, path} = action;

    if (type === REDIRECT) {
      history.push(path);
    }

    next(action);
  };
};

export default redirectMiddware;
