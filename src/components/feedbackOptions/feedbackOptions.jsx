import css from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  console.log();
  return (
    <div style={css.div}>
      {Object.keys(options).map(btnName => {
        return (
          <button
            key={btnName}
            type="button"
            name={btnName}
            onClick={onLeaveFeedback}
          >
            {' '}
            {btnName}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  option: PropTypes.object,
};

export default FeedbackOptions;
