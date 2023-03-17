import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.list}>
    <li className={css.list}>Good: {good}</li>
    <li className={css.list}>Neutral: {neutral}</li>
    <li className={css.list}>Bad: {bad}</li>
    <li className={css.tolal}>Total: {total}</li>
    <li className={css.feedback}>Positive feedback: {positivePercentage} %</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
