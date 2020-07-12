import {store} from 'react-notifications-component';

const notification = {
  container: 'bottom-right',
  animationIn: ['animated', 'fadeIn'],
  animationOut: ['animated', 'fadeOut'],
  dismiss: {
    duration: 3000,
    onScreen: true,
  },
};

export const SnackBarType = {
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
};

export const addSnackBar = ({message, type}) => {
  store.addNotification({
    ...notification,
    message,
    type,
  });
};
