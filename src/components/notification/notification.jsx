import PropTypes from 'prop-types';
import css from './notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={css.notification}>
      <p>{message}</p>
    </div>
  );
};

Notification.prototype = {
  message: PropTypes.string,
};

export default Notification;
