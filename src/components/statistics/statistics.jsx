import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({ bad, good, neutral, total, positivePercentage }) => {
  return (
    <div style={css}>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive fedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
